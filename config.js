import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDQyfOauAFiraoeHL1lMpt2xXiVOuM0bfc",
  authDomain: "buzzer-app-be33c.firebaseapp.com",
  projectId: "buzzer-app-be33c",
  storageBucket: "buzzer-app-be33c.appspot.com",
  messagingSenderId: "269545233303",
  appId: "1:269545233303:web:da024cb194854c042502d2"
};

// Initialize Firebase
 let app = firebase.initializeApp(firebaseConfig);
 export default app.database()