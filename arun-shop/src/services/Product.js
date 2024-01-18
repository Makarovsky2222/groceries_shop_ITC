import { collection, doc, addDoc, getDocs, setDoc, getDoc, updateDoc, getFirestore, deleteDoc } from "firebase/firestore"; 
import { getStorage,  ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Products from "./Product.json"

const db = getFirestore();
const storage = getStorage();
const docName = 'products'

async function addProductFromJson() {
  try {
    const data = Products;

    if (data && data.products) {
      const products = data.products;

      for (const product of products) {
        try {
          const docRef = doc(collection(db, docName));
          await setDoc(docRef, product);

          console.log("docRef: ", docRef);
        } catch (error) {
          console.log(error);
          return null;
        }
      }

      console.log("Products added successfully.");
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function createProduct(productData, imageFile) {
    try {
        if (imageFile) {
            const date = new Date().getTime()
            const fileName = `${date}-${imageFile.name}`   

            const storageRef = ref(storage, `product/${fileName}`);
            const uploadTask = await uploadBytes(storageRef, imageFile);
            const imageUrl = await getDownloadURL(storageRef)
            productData.image_url = imageUrl;
          } 
        
          await addDoc(collection(db, docName), productData);    
    } catch (error) {
        console.log(error)
    }
  }
  
export async function getProducts() { 
    var allProducts = []

    const snapshot = await getDocs(collection(db, docName));
    const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
    return products;
  }
  
export async function updateProduct(productId, updatedData, imageFile) {
    if (imageFile) {
        const date = new Date().getTime()
        const fileName = `${date}-${imageFile.name}`

        const storageRef = ref(storage, `product/${fileName}`);
        const uploadTask = await uploadBytes(storageRef, imageFile);
        const imageUrl = await uploadTask.ref.getDownloadURL();
        updatedData.imageUrl = imageUrl;
    }

    await updateDoc(doc(db, docName, productId), updatedData);
}


export async function deleteProduct(productId) {
    await deleteDoc(doc(db, docName, productId));
}

export async function getProductById(productId) {
    try {
      const docSnap = await getDoc(doc(db, docName, productId));
      if (docSnap.exists()) {
        const productData = docSnap.data();
        return {
          id: docSnap.id,
          ...productData
        };
      } else {
        throw new Error('Product not found');
      }
    } catch (error) {
      console.error('Error retrieving product:', error);
      throw error; // Re-throw the error for proper handling
    }
}
  

export async function updateProductCategory(productId, newCategory_id) {
    try {
      await updateDoc(doc(db, docName, productId), {
        category_id: newCategory_id
      });
    } catch (error) {
      console.error('Error updating product category:', error);
      throw error; // Re-throw the error for proper handling
    }
  }
  

export async function getProductsByCategoryId(categoryId) {
    try {
      const querySnapshot = await getDocs(collection(db, docName), {
        where: {
          category_id: categoryId
        }
      });
  
      const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })).filter((product) => {
        return product.category_id == categoryId
      });
      
      console.log("data: ", products)
      return products;
    } catch (error) {
      console.error('Error retrieving products:', error);
      throw error; 
    }
  }
  

export async function addAmountProduct(prod_id, addAmount) {
    try {
      const product = getProductById(prod_id)
      const newAmount = product.amount + addAmount
      
      await updateDoc(doc(db, docName, prod_id), {
        amount: newAmount
      });
    } catch (error) {
      
    }
}