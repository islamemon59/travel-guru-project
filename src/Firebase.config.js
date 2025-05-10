// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Do not share config file in public.
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKrCqdB-wDElPb5i0biSpn4orJyYoANYw",
  authDomain: "travel-guru-project-e6613.firebaseapp.com",
  projectId: "travel-guru-project-e6613",
  storageBucket: "travel-guru-project-e6613.firebasestorage.app",
  messagingSenderId: "216002561617",
  appId: "1:216002561617:web:1f873a62924b3324475a70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);