import { collection, getFirestore, addDoc, getDocs, getDoc, updateDoc, doc,  } from "firebase/firestore"

const db = getFirestore()
const docName = 'orders'


export async function createOrder(order) {
    try {
        const res = await addDoc(collection(db, docName), order);
        return res
    } catch(error) {
        return null
    }
}

export async function getOrders() {
  try {
      const snapshot = await getDocs(collection(db, docName));
      const orders = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
      }));
      return orders;
  } catch (error) {
      console.log(error)
      return null
  }
}


export async function getOrderById(orderId) {
  try {
    const docSnap = await getDoc(doc(db, docName, orderId))
    if (docSnap.exists()) {
      const orderData = docSnap.data();
      return {
        id: docSnap.id,
        ...orderData
      };
    } else {
      throw new Error(`Order with ID '${orderId}' not found`);
    }
  } catch (error) {
    console.error('Error retrieving order:', error);
    throw error; // Re-throw the error for proper handling
  }
}
