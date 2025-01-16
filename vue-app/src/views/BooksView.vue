<script>
import { db } from "@/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      books: [],
      loading: true,
      errorMsg: "",
    };
  },
  async created() {
    await this.fetchBooks();
  },

  methods: {
    async fetchBooks() {
      const bookRef = collection(db, "books");

      try {
        const querySnapshot = await getDocs(bookRef);

        this.books = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.loading = false;
      } catch (error) {
        this.errorMsg = error.message;
        this.loading = false;
      }
    },
    navigateToBook(bookId) {

    this.$router.push(`/book/${bookId}`);
  },
  },
  
};
</script>

<template>
  <section>
    <div class="card-container">
      <!-- Book Card 1 -->
      <div class="card" v-for="book in books" :key="book.id">
        <img :src="book.imageUrl" :alt="book.title" />
        <div class="card-content">
          <h3 class="card-title">{{ book.title }}</h3>
          <p class="card-genre">Genre: {{ book.genre }}</p>
          <button class="buttonLink" @click="navigateToBook(book.id)">
            Description
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
section {
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
  min-height: 50vh;
  width: 1500px;
}
.card-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
}
.card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: calc((100% - 80px) / 3); /* Ensure 3 cards per row with gaps */
  transition: transform 0.2s, box-shadow 0.2s;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-content {
  padding: 15px;
}
.card-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 10px;
  color: #333;
}
.card-genre {
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
}
.card button {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.2s;
}
.card button:hover {
  background: #0056b3;
}

.buttonLink {
  color: #fff;
  transition: background 0.2s;
}

.buttonLink:hover {
  background: #0056b3;
}

@media (max-width: 768px) {
  .card-container {
    justify-content: center;
    margin-left: 0;
    padding-top: 80px;
  }
  .card {
    flex: 1 1 100%;
    max-width: 150px;
  }
}
</style>
