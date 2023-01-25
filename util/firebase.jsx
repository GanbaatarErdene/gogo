import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
  child,
  update,
  get,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCdLkOCAeTFGkW4wDsVIlyruWgGitzoup8",
  authDomain: "gogo-64c41.firebaseapp.com",
  databaseURL:
    "https://gogo-64c41-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gogo-64c41",
  storageBucket: "gogo-64c41.appspot.com",
  messagingSenderId: "966570869908",
  appId: "1:966570869908:web:15e4dacaa9f9ef17df6081",
  measurementId: "G-ZPG97KN1TS",
};

const app = initializeApp(firebaseConfig);
const realDatabase = getDatabase(app);

export { realDatabase, ref, set, push, onValue, child, update, get };
