// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA9selShXfI8jEfXSUA7xQL0KsBcTv4DD8",
  authDomain: "todo-app-62846.firebaseapp.com",
  databaseURL: "https://todo-app-62846-default-rtdb.firebaseio.com",
  projectId: "todo-app-62846",
  storageBucket: "todo-app-62846.firebasestorage.app",
  messagingSenderId: "402517887676",
  appId: "1:402517887676:web:ca7a17aab4b77f11779eb9",
  measurementId: "G-2WCZ1Z18PE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig