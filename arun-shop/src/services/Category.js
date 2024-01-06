import { collection, getDocs, getDoc, setDoc, doc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./../Configuration/FirebaseConfig"

const docName = 'category'

export const addCategory = async (category) => {
    try {
        const docRef = doc(collection(db, docName))
        await setDoc(docRef , {
            name: category.name,
            color: category.color,
            image_url: category.image_url
        });

        console.log("docRef: ", docRef)
        return docRef.id

    } catch (error) {
        console.log(error)
        return null
    }
}

export const getAllCategory = async () => {
    try {
        var allCategory = []
        const querySnapshot = await getDocs(collection(db, docName));

        querySnapshot.forEach((doc) => {
            var cate = doc.data()
            cate.id = doc.id
            allCategory.push(cate)
        });

        return allCategory
    } catch (error) {
        console.log(error)
        return null
    }
}

export const getByID = async (cate_id) => {
    const docRef = doc(db, docName, cate_id)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()) {
        console.log("cate: ", docSnap.data())
        var cate = docSnap.data()
        cate.id = docSnap.id
        return cate
    }
}


export const updateByID = async (cate_id, newCate) => {
    try {
        const docRef = doc(db, docName, cate_id)
        await updateDoc(docRef , {
            name: newCate.name,
            color: newCate.color,
            image_url: newCate.image_url
        });

        return true

    } catch (error) {
        console.log(error)
        return null
    }
}

export const deleteById = async (cate_id) => {
    await deleteDoc(doc(db, docName, cate_id));
}
    

// category: {
//     id: string,
//     name: string,
//     color: string,
//     image_url: string,
// }