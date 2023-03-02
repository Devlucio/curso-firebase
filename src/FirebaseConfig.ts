import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Substitua o seguinte pela configuração do projeto Firebase do seu aplicativo
// Consulte: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyC42TqyXgiJXvUtHAK8rV_9Vh36EkVd4fU",
    authDomain: "curso-de-firebase-01-03-2023.firebaseapp.com",
    projectId: "curso-de-firebase-01-03-2023",
    storageBucket: "curso-de-firebase-01-03-2023.appspot.com",
    messagingSenderId: "612889888954",
    appId: "1:612889888954:web:54a997eeff74d688f21a83"
  };

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);


// Inicialize o Cloud Firestore e obtenha uma referência ao serviço
export const db = firebase.firestore();
