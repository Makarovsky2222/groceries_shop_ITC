import { collection, getFirestore } from "firebase/firestore"

const db = getFirestore()
const docName = "orders"

export async function createOrder(orderData) {
    try {
        const res = await addDoc(collection(db, docName), orderData);
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

export async function updateOrderTotal(orderId, newTotal) {
  const updatedData = {
    totalPrice: newTotal
  };
  await updateOrder(orderId, updatedData);
}

export async function updateOrder(orderId, updatedData) {
  await updateDoc(doc(db, docName, orderId), updatedData);
}

export async function getOrderById(orderId) {
  try {
    const docSnap = await getDoc(doc(db, docName, orderId));
    if (docSnap.exists()) {
      const orderData = docSnap.data();
      return orderData;
    } else {
      throw new Error(`Order with ID '${orderId}' not found`);
    }
  } catch (error) {
    console.error('Error retrieving order:', error);
    throw error; // Re-throw the error for proper handling
  }
}
