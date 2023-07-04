import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpbk7FFhzpkTHEC_vz34T-q2u8khgVyQ8",
  authDomain: "sample-a1d18.firebaseapp.com",
  projectId: "sample-a1d18",
  storageBucket: "sample-a1d18.appspot.com",
  messagingSenderId: "862026640861",
  appId: "1:862026640861:web:c823c69485fc0b5f5ada34"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).mount('#app')
