<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength, alphaNum, helpers } from "@vuelidate/validators";
import ErrorMessage from "./ErrorMessage.vue";
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
      formData: {
        email: "",
        password: "",
        username: "",
      },
    };
  },
  validations() {
    return {
        formData: {
            email: {
                required: helpers.withMessage('Email is required!', required),
                email: helpers.withMessage('Email is not valid', email),
            },
            password: {
                required: helpers.withMessage('Password is required!', required),
                minLength: minLength(6),
                maxLength: maxLength(10),
                alphaNum: helpers.withMessage('Password must be alpha-numeric', alphaNum),
            },
            username: {
                required: helpers.withMessage('Username is required!', required),
                alphaNum: helpers.withMessage('Username must be alpha-numeric', alphaNum),
                minLength: minLength(3),
                maxLength: maxLength(10),
            }
        }
    }
  },
  methods: {
    async onRegister() {
    const isValid = await this.v$.$validate();
      if (!isValid) {
        console.log(this.formData);
        
        alert("Invalid data");
        return;
      }

      console.log(this.formData, 'Valid data');
      
    },
  },
};
</script>

<template>
  <div class="register-page">
    <h1>Register</h1>
    <form @submit.prevent="onRegister">
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
      <div class="form-group">
        <label for="repassword">Username</label>
        <input
          type="text"
          id="username"
          v-model="formData.username"
          placeholder="Choose username"
          @blur="v$.formData.username.$touch"
        />
        <ErrorMessage :errors="v$.formData.username.$errors"></ErrorMessage>
      </div>
      <button type="submit">Register</button>

      <p>Already have an account?</p>
      <router-link to="/login" class="login">Sign in</router-link>
    </form>
  </div>
</template>

<style scoped>
.register-page {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
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

p {
  text-align: center;
}

.login {
  color: #007bff;
  text-align: center;
  font-weight: 700;
}

.login:hover {
  color: white;
  background-color: #0056b3;
  border: none;
  border-radius: 4px;
  transition: background 0.3s;
}

@media (max-width: 768px) {
  .register-page {
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
