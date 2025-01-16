// import { defineStore } from 'pinia';
// import { db } from '@/firebaseConfig';
// import { doc, getDoc, setDoc, arrayUnion } from 'firebase/firestore';

// export const useWishlistStore = defineStore('wishlist', {
//   state: () => ({
//     wishlistBooks: [],
//   }),
//   actions: {
//     // Function to add a book to the wishlist
//     async addToWishlist(userId, book) {
//       try {
//         // Reference to the user's wishlist document
//         const wishlistRef = doc(db, 'users', userId, 'wishlist', 'userWishlist');

//         // Add the book to the array of books in the 'wishlist' field of the document
//         await setDoc(
//           wishlistRef,
//           {
//             books: arrayUnion(book),
//           },
//           { merge: true }
//         );

//         console.log('Book added to wishlist successfully!');
//       } catch (error) {
//         console.error('Error adding book to wishlist:', error);
//       }
//     },

//     // Fetch all wishlist books for the given user
//     async fetchWishlistBooks(userId) {
//       try {
//         // Reference to the user's wishlist document
//         const wishlistRef = doc(db, 'users', userId, 'wishlist', 'userWishlist');

//         // Fetch the document data
//         const snapshot = await getDoc(wishlistRef);

//         if (snapshot.exists()) {
//           const data = snapshot.data();
//           this.wishlistBooks = data.books || [];
//         } else {
//           console.log('No wishlist found for this user.');
//           this.wishlistBooks = [];
//         }
//       } catch (error) {
//         console.error('Error fetching wishlist books:', error);
//       }
//     },
//   },
// });
