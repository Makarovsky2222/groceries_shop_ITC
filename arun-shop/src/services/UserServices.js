import { db } from "../Configuration/FirebaseConfig"
import { doc, getDoc, setDoc, updateDoc, runTransaction } from "firebase/firestore"

export const addUser = async (uid, user) => {
    try {
        const docRef = doc(db, 'users', uid)
        setDoc(docRef, {
            uid: uid,
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            phone_number: user.phone_number,
            password: user.password,
            image_url: user.image_url || null,
            register_date: user.register_date
        });

        console.log("docRef: ", docRef)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export const updateUser = async (uid, user) => {
    try {
        const docRef = doc(db, 'users', uid)

        await runTransaction(db, async (transaction) => {
          const sfDoc = await transaction.get(docRef);
          if (!sfDoc.exists()) {
            throw "Document does not exist!";
          }
          transaction.update(docRef, {
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            phone_number: user.phone_number,
            image_url: user.image_url || null,
            register_date: user.register_date
          });
        });
        console.log("Transaction successfully committed!");
      } catch (e) {
        console.log("Transaction failed: ", e);
      }
}

export const getMe = async (uid) => {

    if (!uid) return null

    const docRef = doc(db, 'users', uid)
    const docSnap = await getDoc(docRef)
    
    if(docSnap.exists()) {
        return docSnap.data()
    }
    
}


// User's Model:
// uid: string,
// username: string,
// firstname: string,
//   : string,
// email: string,
// phone_number: string,
// password: string,
// image_url: string,
// register_date: string


// Example to update user
// async function editUser() {
//     const uid = getUserID()

//     await updateUser(uid, {
//         username: 'power bank',
//         firstname: 'dsfasf',
//         lastname: 'ddddddddd',
//         email: 'testing35@gmail.com',
//         phone_number: '12343213423',
//         image_url: '',
//         register_date: 'dsafasfassa',
//     })
// }