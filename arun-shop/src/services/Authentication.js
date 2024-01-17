import { getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  EmailAuthProvider,
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
  updatePassword,
} from "firebase/auth";
import { addUser } from "./UserServices";

const auth = getAuth();

export const signup = async (user) => {
  try {
    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then ( (userCredential) => {
      saveUser(userCredential)
      console.log("userCreditial.id: ", userCredential.user.uid)
      addUser(userCredential.user.uid, user)

      return true
    })
  } catch (error) {
    console.log(error);
    return false
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
 
    const credential = EmailAuthProvider.credential(email, password)
    saveUserFirebase(credential)
    
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

export const getUserID = () => {
  try {
    const user = auth.currentUser
    console.log("uid: ", user.uid)
    return user.uid

  } catch (error) {
    console.log(error)
    return null
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


// HAVE NOT TEST
export const updateUserPassword = (newPassword) => {
  updatePassword(auth, newPassword).then(() => {
    // Password updated successfully
    console.log("Password updated!");
  })
  .catch((error) => {
    // Handle any errors
    console.error("Error updating password:", error);
  });

}