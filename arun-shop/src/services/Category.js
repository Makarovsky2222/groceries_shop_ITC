import {
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./../Configuration/FirebaseConfig";
import { updateCatgotyImage, uploadCategoryImage } from "./Storage";
import categories from "../components/OrderModule/categories.json";

const docName = "category";

export const addCategoriesFromJson = async () => {
  try {
    const data = categories;

    if (data && data.categories) {
      const categories = data.categories;

      for (const category of categories) {
        try {
          const docRef = doc(collection(db, docName));
          await setDoc(docRef, {
            name: category.name,
            color: category.color,
            image_url: "null",
            filePath: "null",
          });
          console.log("docRef: ", docRef);
        } catch (error) {
          console.log(error);
          return null;
        }
      }

      console.log("Categories added successfully.");
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const addCategory = async (category, file) => {
  try {
    const cateImage = await uploadCategoryImage(file);

    const docRef = doc(collection(db, docName));
    await setDoc(docRef, {
      name: category.name,
      color: category.color,
      image_url: cateImage.url,
      filePath: cateImage.path,
    });

    console.log("docRef: ", docRef);
    return docRef.id;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllCategory = async () => {
  try {
    var allCategory = [];
    const querySnapshot = await getDocs(collection(db, docName));

    querySnapshot.forEach((doc) => {
      var cate = doc.data();
      cate.id = doc.id;
      allCategory.push(cate);
    });

    return allCategory;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getByID = async (cate_id) => {
  const docRef = doc(db, docName, cate_id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("cate: ", docSnap.data());
    var cate = docSnap.data();
    cate.id = docSnap.id;
    return cate;
  }
};

export const updateByID = async (cate_id, newCate) => {
  try {
    const docRef = doc(db, docName, cate_id);
    await updateDoc(docRef, {
      name: newCate.name,
    });

    return true;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateCateImage = async (cate_id, newFile) => {
  try {
    const docRef = doc(db, docName, cate_id);
    const cate = await getByID(cate_id);

    const newCateImg = await updateCatgotyImage(cate.image_url, newFile);

    console.log("newCateImage", newCateImg);

    updateDoc(docRef, {
      image_url: newCateImg.url,
      filePath: newCateImg.path,
    });

    return newCateImg.url;
  } catch (error) {
    console.log(error);
  }
};

export const deleteById = async (cate_id) => {
  await deleteDoc(doc(db, docName, cate_id));
};

// category: {
//     id: string,
//     name: string,
//     color: string,
//     image_url: string,
// }
