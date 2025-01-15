<script>
import { useVuelidate } from "@vuelidate/core";
import { helpers, maxLength, minLength, required } from "@vuelidate/validators";
import ErrorMessage from "./ErrorMessage.vue";

const bookTitlePattern = /^[a-zA-Z0-9\s:,'"-]+$/;
const bookGenrePattern = /^[A-Z][a-zA-Z\s-]+$/;
const authorNamePattern = /^[A-Z][a-zA-Z\s.'-]+$/gm;
const imageUrlPattern = /^(https?:\/\/(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\/[^\s]*)?\.(?:png|jpg|jpeg|gif|webp)$/i;


export default {
  components: {
    ErrorMessage,
  },
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      book: {
        title: "",
        genre: "",
        author: "",
        description: "",
        imageUrl: "",
      },
    };
  },
  validations() {
    return {
      book: {
        title: {
          required: helpers.withMessage("Title is required!", required),
          minLength: minLength(2),
          maxLength: maxLength(100),
          titlePattern: helpers.withMessage(
            "Title can only contain letters, numbers, and basic punctuation.",
            bookTitlePattern
          ),
        },
        genre: {
          required: helpers.withMessage("Genre is required!", required),
          minLength: minLength(4),
          maxLength: maxLength(15),
          genrePattern: helpers.withMessage(
            "Invalid genre format. Use only letters and spaces.",
            bookGenrePattern
          ),
        },
        author: {
          required: helpers.withMessage("Author name is required!", required),
          minLength: minLength(5),
          maxLength: maxLength(30),
          authorPattern: helpers.withMessage(
            "Invalid author name format. Please check for invalid characters.",
            authorNamePattern
          ),
        },
        description: {
          required: helpers.withMessage("Description is required!", required),
          minLength: minLength(4),
          maxLength: maxLength(250),
        },
        imageUrl: {
          required: helpers.withMessage("Image url is required!", required),
          imagePattern: helpers.withMessage(
            "Invalid URL format. The URL should be a valid image link (e.g., http://example.com/image.jpg).",
            imageUrlPattern
          ),
        },
      },
    };
  },
  methods: {
    handleSubmit() {
      alert("Book submitted successfully!");
      console.log("Book Details:", this.book);
      // Add your submission logic here
    },
  },
};
</script>

<template>
  <div class="book-form">
    <h1>Create a New Book</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          v-model="book.title"
          placeholder="Enter book title"
          @blur="v$.book.title.$touch"
        />
        <ErrorMessage :errors="v$.book.title.$errors"></ErrorMessage>
      </div>

      <div class="form-group">
        <label for="genre">Genre</label>
        <input
          type="text"
          id="genre"
          v-model="book.genre"
          placeholder="Enter book genre"
          @blur="v$.book.genre.$touch"
        />
        <ErrorMessage :errors="v$.book.genre.$errors"></ErrorMessage>
      </div>

      <div class="form-group">
        <label for="author">Author</label>
        <input
          type="text"
          id="author"
          v-model="book.author"
          placeholder="Enter author name"
          @blur="v$.book.author.$touch"
        />
        <ErrorMessage :errors="v$.book.author.$errors"></ErrorMessage>
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          id="description"
          v-model="book.description"
          placeholder="Enter book description"
          @blur="v$.book.description.$touch"
        ></textarea>
        <ErrorMessage :errors="v$.book.description.$errors"></ErrorMessage>
      </div>

      <div class="form-group">
        <label for="imageUrl">Image URL</label>
        <input
          type="text"
          id="imageUrl"
          v-model="book.imageUrl"
          placeholder="Enter image URL"
          @blur="v$.book.imageUrl.$touch"
        />
        <ErrorMessage :errors="v$.book.imageUrl.$errors"></ErrorMessage>
      </div>

      <button type="submit" class="submit-button">Create Book</button>
    </form>
  </div>
</template>

<style scoped>
.book-form {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.8rem;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 1rem;
  margin-bottom: 5px;
  color: #555;
}

input,
textarea {
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:hover,
textarea:hover {
  border-color: #aaa;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

textarea {
  resize: vertical;
  height: 100px;
}

.submit-button {
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.submit-button:hover {
  background-color: #0056b3;
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .book-form {
    padding: 15px;
  }

  h1 {
    font-size: 1.5rem;
  }

  input,
  textarea {
    font-size: 0.9rem;
    padding: 8px;
  }

  .submit-button {
    font-size: 0.9rem;
    padding: 8px;
  }
}

@media (max-width: 480px) {
  .book-form {
    padding: 10px;
  }

  h1 {
    font-size: 1.2rem;
  }

  input,
  textarea {
    font-size: 0.8rem;
    padding: 6px;
  }

  .submit-button {
    font-size: 0.8rem;
    padding: 6px;
  }
}
</style>
