import {
    addDoc,
    collection,
    getFirestore,
    setDoc,
    getDoc,
} from "firebase/firestore";

const db = getFirestore();
const docName = "stocks";

export async function createStock(stock_id, stock) {
    try {
        const docRef = doc(db, docName, stock_id);
        await setDoc(docRef, stock);

        console.log("done");
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

export async function getStocks() {
    try {
        const snapshot = await getDocs(collection(db, docName));
        const stocks = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return stocks;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getStockByID(stock_id) {
    try {
        const docSnap = await getDoc(doc(db, docName, stock_id));
        if (docSnap.exists()) {
            const stockData = docSnap.data();
            return {
                id: docSnap.id,
                ...stockData,
            };
        } else {
            throw new Error(`Stock with ID '${stock_id}' not found`);
        }
    } catch (error) {
        console.error("Error retrieving order:", error);
        throw error; // Re-throw the error for proper handling
    }
}


