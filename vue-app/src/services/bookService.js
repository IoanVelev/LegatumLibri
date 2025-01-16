import { db } from "@/firebaseConfig";
import { collection, addDoc, doc, setDoc, getDoc, arrayUnion, deleteDoc, updateDoc, arrayRemove } from "firebase/firestore";

export const addBookToWishlist = async (userId, book) => {
  try {
    if (!book || !book.id) {
      throw new Error("Invalid book object. Book ID is required.");
    }

    //console.log("Adding book to wishlist:", book);
    const wishlistRef = doc(db, "users", userId, "wishlist", "userWishlist");
   
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

export const removeBookFromWishlist = async (userId, bookId) => {
  try {
    const wishlistRef = doc(db, "users", userId, "wishlist", "userWishlist"); // Get the wishlist document
    console.log('Here', wishlistRef);
    
    const docSnap = await getDoc(wishlistRef);

    if (docSnap.exists()) {
      // Get the current books array
      const currentBooks = docSnap.data().books || [];

      // Filter out the book with the specified bookId
      const updatedBooks = currentBooks.filter(book => book.id !== bookId);

      // Update the document with the new books array
      await updateDoc(wishlistRef, { books: updatedBooks });

      console.log(`Book with ID ${bookId} removed from wishlist.`);
    }
    console.log("Book removed from wishlist successfully!");
  } catch (error) {
    console.error("Error removing book from wishlist:", error);
  }
};





