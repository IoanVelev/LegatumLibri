// src/services/bookService.js
import { db } from '../firebase'; // Assuming you have initialized Firebase in this file
import { collection, addDoc, doc, setDoc, getDoc } from "firebase/firestore";

export const addToWishlist = async (userId, book) => {
  try {
    const wishlistRef = collection(db, "users", userId, "wishlist");
    const bookRef = doc(wishlistRef, book.id); // Using the book ID as the document ID
    await setDoc(bookRef, book); // Adds the book to the wishlist
    console.log("Book added to wishlist successfully!");
  } catch (error) {
    console.error("Error adding book to wishlist:", error);
  }
};

export const addToFavourites = async (userId, book) => {
  try {
    const favouritesRef = collection(db, "users", userId, "favourites");
    const bookRef = doc(favouritesRef, book.id); // Using the book ID as the document ID
    await setDoc(bookRef, book); // Adds the book to favourites
    console.log("Book added to favourites successfully!");
  } catch (error) {
    console.error("Error adding book to favourites:", error);
  }
};
