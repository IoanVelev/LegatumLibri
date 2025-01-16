import { defineStore } from 'pinia';
import { db } from '@/firebaseConfig';
import { doc, getDoc, setDoc, arrayUnion } from 'firebase/firestore';

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    wishlistBooks: [],
  }),
  actions: {
    async addToWishlist(userId, book) {
      try {
        // Reference to the user's wishlist document
        const wishlistRef = doc(db, 'wishlist', userId);
        
        // Add the book to the array of books
        await setDoc(
          wishlistRef,
          {
            books: arrayUnion(book),
          },
          { merge: true }
        );

        console.log('Book added to wishlist successfully!');
      } catch (error) {
        console.error('Error adding book to wishlist:', error);
      }
    },
    async fetchWishlistBooks(userId) {
      try {
        // Reference to the user's wishlist document
        const wishlistRef = doc(db, 'wishlist', userId);

        // Fetch the document data
        const snapshot = await getDoc(wishlistRef);

        if (snapshot.exists()) {
          const data = snapshot.data();
          this.wishlistBooks = data.books || [];
        } else {
          console.log('No wishlist found for this user.');
          this.wishlistBooks = [];
        }
      } catch (error) {
        console.error('Error fetching wishlist books:', error);
      }
    },
  },
});


