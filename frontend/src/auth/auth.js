import app from "./firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

const auth = getAuth(app);

// SIGNUP
export const signup = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  return userCredential.user;
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

// AUTH STATE LISTENER (VERY IMPORTANT 🔥)
export const observeAuth = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export default auth;