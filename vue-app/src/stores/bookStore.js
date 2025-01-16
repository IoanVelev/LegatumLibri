import { defineStore } from 'pinia';
import { ref } from 'vue';
import { db } from '@/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export const useBookStore = defineStore('bookStore', () => {
  const wishlist = ref([]);
  const favourites = ref([]);

  // Function to add a book to the wishlist
  const addToWishlist = async (book, userId) => {
    try {
      await addDoc(collection(db, 'users', userId, 'wishlist'), {
        title: book.title,
        genre: book.genre,
        author: book.author,
        description: book.description,
        imageUrl: book.imageUrl,
      });
      wishlist.value.push(book); // Update local wishlist
    } catch (error) {
      console.error('Error adding book to wishlist:', error);
    }
  };

  // Function to add a book to the favourites
  const addToFavourites = async (book, userId) => {
    try {
      await addDoc(collection(db, 'users', userId, 'favourites'), {
        title: book.title,
        genre: book.genre,
        author: book.author,
        description: book.description,
        imageUrl: book.imageUrl,
      });
      favourites.value.push(book); // Update local favourites
    } catch (error) {
      console.error('Error adding book to favourites:', error);
    }
  };

  return {
    wishlist,
    favourites,
    addToWishlist,
    addToFavourites,
  };
});
