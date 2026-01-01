<template>
  <v-main class="d-flex align-center justify-center" style="min-height: 100vh;">
    <v-card class="pa-6 align-center justify-center" style="width: 40%;">
      <v-card-title class="text-h5 text-center">Welcome to Balance</v-card-title>
      <v-card-text>
        <v-form ref="form" @submit.prevent="handleLogin">
          <v-text-field
            v-model="email"
            label="Username"
            prepend-icon="mdi-account"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            prepend-icon="mdi-lock"
            type="password"
            required
          ></v-text-field>

          <v-btn type="submit" color="primary" class="mt-4" block>
            Login
          </v-btn>

          <v-alert
            v-if="error"
            type="error"
            class="mt-4"
            dense
            text
          >
            {{ error }}
          </v-alert>
        </v-form>
      </v-card-text>
    </v-card>
  </v-main>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const email = ref("")
    const password = ref("")
    const error = ref("")

    const handleLogin = () => {
      if (email.value === "admin" && password.value === "1234") {
        alert("Login successful!")
        error.value = ""
        // router.push("/dashboard") más adelante
      } else {
        error.value = "Invalid username or password"
      }
    }

    return {
      email,
      password,
      error,
      handleLogin
    }
  }
}
</script>
