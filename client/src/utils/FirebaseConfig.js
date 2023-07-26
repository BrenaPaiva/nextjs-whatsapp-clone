import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFSfUB-jXfgUTa6ljafIsd5QWgJfLe60s",
  authDomain: "whatsapp-clone-ddbcf.firebaseapp.com",
  projectId: "whatsapp-clone-ddbcf",
  storageBucket: "whatsapp-clone-ddbcf.appspot.com",
  messagingSenderId: "185399702680",
  appId: "1:185399702680:web:d4093b8505ea0c30c64ced",
  measurementId: "G-29JZJ07QTK"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
