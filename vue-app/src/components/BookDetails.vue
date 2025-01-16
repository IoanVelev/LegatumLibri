<script>
export default {
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigateBack() {
      this.$router.push('/'); // Navigate back to the homepage or books list
    },
    readAloud() {
      // Placeholder for TTS functionality
      console.log("Implement TTS functionality here.");
    },
  },
};
</script>

<template>
  <div class="book-details">
    <header>
        <h1>Book Details</h1>
      <button @click="navigateBack" class="back-btn">← Back</button>
      
    </header>
    <section class="book-info">
      <div class="image-container">
       
        <!--book.imageUrl-->
        <img src="https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg" :alt="img" /> <!--book.title-->
      </div>
      <div class="details">
        <h2>{{ "Harry Potter" }}</h2> <!--book.title-->
        <p><strong>Genre:</strong> {{ "Fantasy" }}</p> <!--book.genre-->
        <p><strong>Author:</strong> {{ "JK. Rowling" }}</p> <!--book.author-->
        <p><strong>Description:</strong> {{ "One of the best books" }}</p> <!--book.description-->
      </div>
    </section>
    <footer>
      <button @click="readAloud" class="tts-btn">🔊 Read Description</button>
      <button @click="editBook" class="edit-btn">✎ Edit</button>
      <button @click="deleteBook" class="delete-btn">🗑 Delete</button>
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
.delete-btn {
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

.edit-btn:hover {
  background-color: #0056b3;
}

.delete-btn {
  background-color: #dc3545;
}

.delete-btn:hover {
  background-color: #a71d2a;
}
</style>
