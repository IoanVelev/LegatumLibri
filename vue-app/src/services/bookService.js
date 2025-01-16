import { db } from "@/firebaseConfig";
import { collection, addDoc, doc, setDoc, getDoc, arrayUnion, deleteDoc, updateDoc, arrayRemove } from "firebase/firestore";

export const addBookToWishlist = async (userId, book) => {
  try {
    if (!book || !book.id) {
      throw new Error("Invalid book object. Book ID is required.");
    }

    const wishlistRef = doc(db, "users", userId, "wishlist", "userWishlist");
   
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
    
    const docSnap = await getDoc(wishlistRef);

    if (docSnap.exists()) {
      const currentBooks = docSnap.data().books || [];

      const updatedBooks = currentBooks.filter(book => book.id !== bookId);

      await updateDoc(wishlistRef, { books: updatedBooks });

      console.log(`Book with ID ${bookId} removed from wishlist.`);
    }
    console.log("Book removed from wishlist successfully!");
  } catch (error) {
    console.error("Error removing book from wishlist:", error);
  }
};

export const addBookToFavourites = async (userId, book) => {
  try {
    const favouritesRef = doc(db, "users", userId, "favourites", "favouriteBooks");

    // Add book to the array (if not already present) using arrayUnion
    await updateDoc(favouritesRef, {
      books: arrayUnion(book),
    });

    console.log("Book added to favourites successfully!");
  } catch (error) {
    console.error("Error adding book to favourites:", error);
  }
};

// Fetch books from favourites
export const fetchFavBooks = async (userId) => {
  try {
    const favouritesRef = doc(db, "users", userId, "favourites", "favouriteBooks");
    
    const snapshot = await getDoc(favouritesRef);
    console.log(snapshot);
    

    if (snapshot.exists()) {
      return snapshot.data().books || []; // Return the books array if it exists
    } else {
      console.log("No favouriteBooks document found for this user.");
      return []; // Return an empty array if no books are found
    }
  } catch (error) {
    console.error("Error fetching favourite books:", error);
    return [];
  }
};

// Remove book from favourites
export const removeBookFromFavourites = async (userId, bookId) => {
  try {
    const favouritesRef = doc(db, "users", userId, "favourites", "favouriteBooks");
    const snapshot = await getDoc(favouritesRef);

    if (snapshot.exists()) {
      const currentBooks = snapshot.data().books || [];
      const updatedBooks = currentBooks.filter(book => book.id !== bookId); // Remove book by ID

      await updateDoc(favouritesRef, {
        books: updatedBooks,
      });

      console.log("Book removed from favourites successfully!");
    } else {
      console.log("No favouriteBooks document found for this user.");
    }
  } catch (error) {
    console.error("Error removing book from favourites:", error);
  }
};






