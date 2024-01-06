import { getDownloadURL, 
    getStorage, 
    ref, 
    uploadBytes, 
    deleteObject,
    child,
} from "firebase/storage";

const storage = getStorage()

export const uploadCategoryImage = async (file) => {
    try {
        const date = new Date().getTime()
        const fileName = `${date}-${file.name}`

        const storageRef = ref(storage, `category/${fileName}`)

        const snapshot = await uploadBytes(storageRef, file)
        const image_url = await getDownloadURL(storageRef)
        
        return {
            path: snapshot.metadata.fullPath,
            url: image_url
        }

    } catch (error) {
        console.log(error)
    }
}

export const deleteCatgotyImage = async (path) => {
    try {
        const storageRef = ref(storage, path)

        return await deleteObject(storageRef).then(() => {
            console.log("File deleted successfully")
            return true
        }).catch((error) => {
            console.log(error)
            return false
        });

    } catch (error) {
        console.log(error)
    }
}

export const updateCatgotyImage = async (url, newFile) => {
    try {
        const delImg = await deleteCatgotyImage(url)
        
        if (delImg) {
            const newCateImge = await uploadCategoryImage(newFile)
            return newCateImge
        }
    } catch (error) {
        
    }
}