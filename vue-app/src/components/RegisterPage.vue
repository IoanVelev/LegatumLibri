<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      username: "",
    };
  },
  methods: {
    onRegister() {
      if (this.password === null || '') {
        alert("Make sure password is entered!");
        return;
      }
      alert("Registration successful!");
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
      <div class="form-group">
        <label for="repassword">Username</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="Choose username"
          required
        />
      </div>
      <button type="submit">Register</button>
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
