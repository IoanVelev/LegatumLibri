import { defineStore } from 'pinia';
import { db } from '@/firebaseConfig';
import { doc, getDoc, setDoc, arrayUnion } from 'firebase/firestore';
import { removeBookFromWishlist } from '@/services/bookService';

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    wishlistBooks: [],
  }),
  actions: {
    async fetchWishlistBooks(userId) {
      try {
        const wishlistRef = doc(db, 'users', userId, 'wishlist', 'userWishlist');

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
    async removeFromWishlist(userId, bookId) {
        try {
          await removeBookFromWishlist(userId, bookId);
          console.log('Book removed from wishlist!');
          await this.fetchWishlistBooks(userId); 
        } catch (error) {
          console.error('Error removing book from wishlist:', error);
        }
      },
  },
});
