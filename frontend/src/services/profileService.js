import db from "../auth/db";

import {
  doc,
  getDoc,
  updateDoc
} from "firebase/firestore";

// ==============================
// GET USER PROFILE
// ==============================
export const getProfile = async (uid) => {
  const docRef = doc(db, "users", uid);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  }

  return null;
};

// ==============================
// UPDATE USER PROFILE
// ==============================
export const updateProfile = async (uid, profileData) => {
  const docRef = doc(db, "users", uid);

  await updateDoc(docRef, profileData);
};