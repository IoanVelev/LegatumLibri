<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onLogin() {
      if (this.password === null || '') {
        alert("Make sure password is entered!");
        return;
      }
      alert("Login successful!");
    },
  },
};
</script>

<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="onRegister">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit">Login</button>
      <p>Dont have an account?</p>
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