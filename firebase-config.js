// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

// TU FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCr1-2dIqgxoXBTKYgSusnUZorUICX2Too",
  authDomain: "chatglobal-e9370.firebaseapp.com",
  databaseURL: "https://chatglobal-e9370-default-rtdb.firebaseio.com",
  projectId: "chatglobal-e9370",
  storageBucket: "chatglobal-e9370.firebasestorage.app",
  messagingSenderId: "382420208590",
  appId: "1:382420208590:web:9425fa28c8cdf669adb99f"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const database = getDatabase(app);