<script>
import { db } from '@/firebaseConfig';
import { useWishlistStore } from '@/stores/bookStore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      book: null,
      loading: true,
      errorMsg: "",
      user: null,
    }
  },
  async created() {
    await this.fetchBookDetails();
    this.setupAuthListener(); // Set up the auth state listener 
  },
  methods: {
    setupAuthListener() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user; // Store the current user
        } else {
          this.user = null; // No user is logged in
        }
        
      });
    },
    async fetchBookDetails() {
      const bookId = this.$route.params.id;
      
      try {
        const docRef = doc(db, "books", bookId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          this.book = docSnap.data();
          
        } else {
          this.errorMsg = 'No such book found';
        }
      } catch (error) {
        this.errorMsg = 'Failed to load book details.'
      }
      finally {
        this.loading = false;
      }
    },
    navigateBack() {
      this.$router.push('/'); // Navigate back to the homepage or books list
    },
    readAloud() {
      // Placeholder for TTS functionality
      console.log("Implement TTS functionality here.");
    },
    async addToWishlist() {
      const bookstore = useWishlistStore();
      if (this.user) {
        console.log(this.user);
        
        
        
        bookstore.addToWishlist(this.user.uid, this.book);
      } else {
        alert('User is not authenticated');
        this.errorMsg = 'User is not authenticated'
      }
    },
    addBookToFavourites() {
      const bookStore = useWishlistStore();
      bookStore.addToFavourites(this.book, this.user.uid);
    },
  },
};
</script>

<template>
  <div class="book-details" v-if="user">
    <header>
        <h1>Book Details</h1>
      <button @click="navigateBack" class="back-btn">← Back</button>
      
    </header>
    <section class="book-info" v-if="book">
      <div class="image-container">
       
        <!--book.imageUrl-->
        <img :src="book.imageUrl" :alt="book.title" /> <!--book.title-->
      </div>
      <div class="details">
        <h2>{{ book.title }}</h2> <!--book.title-->
        <p><strong>Genre:</strong> {{ book.genre }}</p> <!--book.genre-->
        <p><strong>Author:</strong> {{ book.author }}</p> <!--book.author-->
        <p><strong>Description:</strong> {{ book.description }}</p> <!--book.description-->
      </div>
    </section>

    <footer>
      <button @click="readAloud" class="tts-btn">🔊 Read Description</button>
      <button @click="editBook" class="edit-btn">✎ Edit</button>
      <button @click="deleteBook" class="delete-btn">🗑 Delete</button>
      <button @click="addToWishlist" class="wishlist-btn">❤️ Add to Wishlist</button>
      <button @click="addToFavourites" class="favourites-btn">⭐ Add to Favourites</button>
    </footer>
  </div>
</template>

<style scoped>
.book-details {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-size: 2rem;
  margin: 0;
}

.back-btn {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.back-btn:hover {
  background-color: #555;
}

.book-info {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 700px;
}

.image-container img {
  max-width: 300px;
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.details {
  flex: 1;
}

.details h2 {
  margin-top: 0;
  color: #333;
  font-weight: bold;
}

.details p {
  margin: 10px 0;
  font-size: 1rem;
  color: #555;
}

.details strong {
    font-weight: bold;
}

footer {
  margin-top: 20px;
  text-align: center;
}

.tts-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.tts-btn:hover {
  background-color: #0056b3;
}

.edit-btn,
.delete-btn,
.wishlist-btn,
.favourites-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin: 5px;
  transition: background-color 0.3s;
}

.edit-btn:hover,
.wishlist-btn:hover,
.favourites-btn:hover {
  background-color: #0056b3;
}

.delete-btn {
  background-color: #dc3545;
}

.delete-btn:hover {
  background-color: #a71d2a;
}



.wishlist-btn {
  background-color: #28a745;
}

.wishlist-btn:hover {
  background-color: #218838;
}

.favourites-btn {
  background-color: #ffc107;
}

.favourites-btn:hover {
  background-color: #e0a800;
}
</style>
