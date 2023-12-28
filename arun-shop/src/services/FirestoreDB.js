// import app from "./firebase/FirebaseConfig"
// import {
//     getDatabase,
//     set,
//     ref,
// } from "firebase/database"


// const database = getDatabase(app)
// export const writeUserData = () => {

//     const user = JSON.parse(localStorage("firebase:authUser:AIzaSyCII-qeakfOGeXew6bZvBCZP0m3c6vIMGo:[DEFAULT]"))

//     set(ref(database, 'users/' + user.uid), {
//         id: user.uid,
//         email: user.email,
//         password: user.password
//     });
// }