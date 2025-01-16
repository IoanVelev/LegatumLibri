import { db } from "@/firebaseConfig";
import { collection, addDoc, doc, setDoc, getDoc, arrayUnion } from "firebase/firestore";

export const addBookToWishlist = async (userId, book) => {
  try {
    // Check if the book object is valid
    if (!book || !book.id) {
      throw new Error("Invalid book object. Book ID is required.");
    }

    console.log("Adding book to wishlist:", book);
    //console.log(userId);
    // Reference to the user's wishlist document
    const wishlistRef = doc(db, "users", userId, "wishlist", "userWishlist");
   
    
    console.log(wishlistRef);
    

    // Add the book to the array of books in the 'wishlist' field of the document
    await setDoc(
      wishlistRef,
      {
        books: arrayUnion(book),
      },
      { merge: true }
    );

    console.log("Book added to wishlist successfully!");
  } catch (error) {
    console.error("Error adding book to wishlist:", error);
  }
};



