import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const app = firebase.initializeApp({
  apiKey:"AIzaSyBvZJzaeWMW1I_zwhQ0QnF9rdd9LaESH0Y",
  authDomain:"auth-development-aaf2f.firebaseapp.com",
  databaseURL:"https://auth-development-aaf2f-default-rtdb.firebaseio.com/",
  projectId:"auth-development-aaf2f",
  storageBucket: "auth-development-aaf2f.appspot.com",
  messagingSenderId: "413585873055",
  appId: "1:413585873055:web:aaacc198bfd47b01182aaa",
  measurementId: "G-JK0KZYN8ZQ",
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app
