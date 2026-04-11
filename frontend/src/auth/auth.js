import app from "./firebase";
import db from "./db";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

const auth = getAuth(app);

// SIGNUP + STORE USER
export const signup = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  const user = userCredential.user;

  // 🔥 Store user in Firestore
  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    createdAt: new Date()
  });

  return user;
};

// LOGIN
export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

// LOGOUT
export const logout = async () => {
  await signOut(auth);
};

// AUTH STATE (for later use)
export const observeAuth = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export default auth;