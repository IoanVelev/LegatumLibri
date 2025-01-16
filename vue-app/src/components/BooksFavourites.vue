<script>
import { db } from '@/firebaseConfig';
import { useFavouritesStore } from '@/stores/bookStore';
import { getAuth } from 'firebase/auth';
export default {
  data() {
    return {
      favouriteBooks: [],
    };
  },
  created() {
    const auth = getAuth();
    const user = auth.currentUser;

    const store = useFavouritesStore();
    
    if (user) {
      store.fetchFavouriteBooks(user.uid);
    }
  },
  computed: {
    favBooks() {
      const store = useFavouritesStore();
      return store.favouriteBooks;
    },
  },
  methods: {
    goToBookDetails(bookId) {
      this.$router.push(`/books/${bookId}`);
    },
  },
};
</script>

<template>
  <div class="favourites">
    <header>
      <h1>Your Favourites</h1>
    </header>
    <div class="card-container" v-if="favBooks.length">
      <div class="card" v-for="book in favBooks" :key="book.id">
        <img :src="book.imageUrl" :alt="book.title" />
        <div class="card-content">
          <h3 class="card-title">{{ book.title }}</h3>
          <p class="card-genre">Genre: {{ book.genre }}</p>
          <button @click="goToBookDetails(book.id)" class="button-link">Read Description</button>
        </div>
      </div>
    </div>
    <p v-else class="no-books-message">Your favourite book list is empty. Start adding books!</p>
  </div>
</template>

<style scoped>
.favourites {
  font-family: Arial, sans-serif;
  max-width: 1000px;
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
  width: 200px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100%;
  height: auto;
  object-fit:contain
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

.no-books-message {
  text-align: center;
  font-size: 1.2rem;
  color: #777;
  margin-top: 30px;
}
</style>
