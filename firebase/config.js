import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";


const firebaseConfig = {
  apiKey: "AIzaSyCX_XH78eu7mTIvotUvs_nEpM-6k3d6YBs",
  authDomain: "nexgen-bb707.firebaseapp.com",
  projectId: "nexgen-bb707",
  storageBucket: "nexgen-bb707.appspot.com",
  messagingSenderId: "286310255711",
  appId: "1:286310255711:web:4c04562771b20e8377dfea",
  measurementId: "G-16ZW71F01V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
