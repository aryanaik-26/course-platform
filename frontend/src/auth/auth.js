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

// ===========================
// SIGNUP
// ===========================
export const signup = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const user = userCredential.user;

  // Create User Profile
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    email: user.email,
    displayName: "",
    bio: "",
    profileImage: "",
    skillsToTeach: [],
    skillsToLearn: [],
    createdAt: new Date()
  });

  return user;
};

// ===========================
// LOGIN
// ===========================
export const login = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredential.user;
};

// ===========================
// LOGOUT
// ===========================
export const logout = async () => {
  await signOut(auth);
};

// ===========================
// OBSERVE AUTH STATE
// ===========================
export const observeAuth = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export default auth;