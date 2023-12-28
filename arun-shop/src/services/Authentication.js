import { getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  EmailAuthProvider,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import app from "./firebase/FirebaseConfig"

const auth = getAuth();

export const signup = async (email, password) => {
  try {
    createUserWithEmailAndPassword(auth, email, password)
    .then ( (userCredential) => {
      saveUser(userCredential)
    })
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("userCredential: ", userCredential)

    const credential = EmailAuthProvider.credential(email, password)
    saveUserFirebase(credential)

    // saveUserIDToken(auth.currentUser.getIdToken)

    return user
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    clearUser()
  } catch (error) {
    console.log(error);
  }
};

export const getMe = async () => {
  try {
    const user = auth.currentUser
    console.log("Me: ", user)
    return user

  } catch (error) {
    console.log(error)
  }
}

const saveUser = (credential) => {
  localStorage.setItem("userCedential", JSON.stringify(credential))
}
const saveUserIDToken = (token) => {
  localStorage.setItem("token", token)
}


const saveUserFirebase = (authCreditial) => {
  setPersistence(auth, browserSessionPersistence)
  .then(() => {
    return signInWithEmailAndPassword(auth, authCreditial.email, authCreditial.password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code; 
    const errorMessage = error.message;
  });
  
}

const clearUser = () => {
  localStorage.removeItem("userCedential")
}

export const checkingUserSign = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.id)
    }
  });

}

export const verifyUserToken = () => {
  const token = localStorage.getItem("token")

  getAuth().verifyIdToken(token).then((decodedToken) => {
    console.log("decodedToken: ", decodedToken)
    // return decodedToken.user
  })
}