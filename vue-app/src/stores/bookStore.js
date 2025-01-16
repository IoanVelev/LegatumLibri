import { defineStore } from 'pinia';
import { db } from '@/firebaseConfig';
import { doc, getDoc, setDoc, arrayUnion } from 'firebase/firestore';
import { addBookToFavourites, fetchFavBooks, removeBookFromFavourites, removeBookFromWishlist } from '@/services/bookService';

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

export const useFavouritesStore = defineStore("favourites", {
    state: () => ({
      favouriteBooks: [],
    }),
    actions: {
        async addToFavourites(userId, book) {
            try {
              await addBookToFavourites(userId, book); // Call service to add book to favourites
              console.log("Book added to favourites!");
              await this.fetchFavouriteBooks(userId); // Refresh after adding
            } catch (error) {
              console.error("Error adding book to favourites:", error);
            }
          },
          async fetchFavouriteBooks(userId) {
            try {
              const favsRef = doc(db, 'users', userId, 'favourites', 'favouriteBooks');

              const snapshot = await getDoc(favsRef);

              if (snapshot.exists()) {
                const data = snapshot.data();
                
                
                this.favouriteBooks = data.books || [];
              } else {
                console.log('No favourites found for this user.');
                this.favouriteBooks = [];
              }
            } catch (error) {
              console.error("Error fetching favourite books:", error);
            }
          },
          async removeFromFavourites(userId, bookId) {
            try {
              await removeBookFromFavourites(userId, bookId); // Call service to remove book
              console.log("Book removed from favourites!");
              await this.fetchFavouriteBooks(userId); // Refresh after removal
            } catch (error) {
              console.error("Error removing book from favourites:", error);
            }
          },
    },
  });