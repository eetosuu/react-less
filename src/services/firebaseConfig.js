import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCEfBhLwlcBpPCgMXBM3cxZ-3pnd1vZiV4",
    authDomain: "chat-cafec.firebaseapp.com",
    databaseURL: "https://chat-cafec-default-rtdb.firebaseio.com",
    projectId: "chat-cafec",
    storageBucket: "chat-cafec.appspot.com",
    messagingSenderId: "503020113519",
    appId: "1:503020113519:web:dc929e44f290e7af3e879a"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;