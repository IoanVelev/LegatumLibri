<script>
import { db } from '@/firebaseConfig';
import { getAuth } from 'firebase/auth';

export default {
  data() {
    return {
      wishlistBooks: [],
    };
  },
  created() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      this.fetchWishlistBooks(user.uid);
    }
  },
  methods: {
    async fetchWishlistBooks(userId) {
      try {
        const snapshot = await db.collection('wishlist').where('userId', '==', userId).get();
        this.wishlistBooks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (error) {
        console.error('Error fetching wishlist books:', error);
      }
    },
    goToBookDetails(bookId) {
      this.$router.push(`/books/${bookId}`);
    },
  },
};
</script>

<template>
  <div class="wishlist">
    <header>
      <h1>Your Wishlist</h1>
    </header>
    <div class="card-container" v-if="wishlistBooks.length">
      <div class="card" v-for="book in wishlistBooks" :key="book.id">
        <img :src="book.imageUrl" :alt="book.title" />
        <div class="card-content">
          <h3 class="card-title">{{ book.title }}</h3>
          <p class="card-genre">Genre: {{ book.genre }}</p>
          <button @click="goToBookDetails(book.id)" class="button-link">Read Description</button>
        </div>
      </div>
    </div>
    <p v-else>No books in your wishlist yet.</p>
  </div>
</template>

<style scoped>
.wishlist {
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
  text-align: center;
  margin-bottom: 20px;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.card-content {
  padding: 10px;
}

.card-title {
  font-size: 1.2rem;
  color: #333;
}

.card-genre {
  font-size: 1rem;
  color: #555;
}

.button-link {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.button-link:hover {
  background-color: #0056b3;
}
</style>
