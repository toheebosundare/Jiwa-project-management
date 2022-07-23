import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {

  apiKey: "AIzaSyAH7TVoY1Apa0kuOzBy05AJtoqcBeXe1dw",

  authDomain: "dojo-e9236.firebaseapp.com",

  projectId: "dojo-e9236",

  storageBucket: "dojo-e9236.appspot.com",

  messagingSenderId: "1041711551253",

  appId: "1:1041711551253:web:bc2d60a1c24fd61c404f1c"

};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth }