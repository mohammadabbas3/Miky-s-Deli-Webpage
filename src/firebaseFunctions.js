import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { firestore } from "./firebase.config";

export const saveItem = async (data) => {
  await setDoc(doc(firestore, "menuItems", `${Date.now()}`), data, {
    merge: true,
  });
};
