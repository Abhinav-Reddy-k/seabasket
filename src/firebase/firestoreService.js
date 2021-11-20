import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const getCategories = () => {
  return getDocs(collection(db, "categories"));
};
