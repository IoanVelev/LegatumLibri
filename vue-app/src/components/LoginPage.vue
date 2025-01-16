<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, helpers } from '@vuelidate/validators'
import ErrorMessage from './ErrorMessage.vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig';

export default {
  components: {
        ErrorMessage,
    },
    setup() {
        return {
            v$: useVuelidate()
        }
    },
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      errorMsg: "",
    };
  },
  validations() {
    return {
        formData: {
            email: {
                required: helpers.withMessage('Email is required!', required),
                email,
            },
            password: {
                required: helpers.withMessage('Password is required!', required),
                minLength: minLength(6),
                maxLength: maxLength(10),
            }
        }
    }
  },
  methods: {
    async onLogin() {
    const isValid = await this.v$.$validate();
      if (!isValid) {
        return;
      }

      try {
        await signInWithEmailAndPassword(auth, this.formData.email, this.formData.password);

        this.$router.push('/');
      } catch (error) {
        this.errorMsg = error.message;
      }
    },
  },
};
</script>

<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="onLogin">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          placeholder="Enter your email"
          @blur="v$.formData.email.$touch"
        />
        <ErrorMessage :errors="v$.formData.email.$errors"></ErrorMessage>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="formData.password"
          placeholder="Enter your password"
          @blur="v$.formData.password.$touch"
        />
        <ErrorMessage :errors="v$.formData.password.$errors"></ErrorMessage>
      </div>
      <p v-if="errorMsg" class="error-message">{{ errorMsg }}</p>

      <button type="submit">Login</button>
      <p>Don't have an account?</p>
      <router-link to="/register" class="register">Sign up</router-link>
    </form>
  </div>
</template>

<style scoped>
.login-page {
  width: 400px;
  height: 50vh;
  padding: 20px;
  display: grid;
  justify-self: center;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
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
  gap: 5px;
}

label {
  font-size: 14px;
  color: #555;
}

input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:hover {
  border-color: #007bff;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

button {
  padding: 10px 15px;
  font-size: 16px;
  color: white;
  background: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #0056b3;
}

.error-message {
  color: red;
  font-size: 14px;
  text-align: center;
}

p {
    text-align: center;
}

.register {
    color: #007bff;
    text-align: center;
    font-weight:700
}

.register:hover {
    color: white;
    background-color: #0056b3;
    border: none;
  border-radius: 4px;
  transition: background 0.3s;
}

@media (max-width: 768px) {
  .login-page {
    margin-top: 300px;
  }

  h1 {
    font-size: 24px;
  }

  input {
    font-size: 14px;
  }

  button {
    font-size: 14px;
  }
}
</style>