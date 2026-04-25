<template>
  <section class="login-root">
    <v-card class="login-card" elevation="0" rounded="xl">
      <v-card-item>
        <v-card-title class="text-h5 font-weight-semibold">Welcome back</v-card-title>
        <v-card-subtitle>Sign in to continue to Balance</v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-form @submit.prevent="handleLogin">
          <v-text-field
            v-model="email"
            label="Username"
            prepend-inner-icon="mdi-account-outline"
            variant="outlined"
            density="comfortable"
            class="mb-2"
            required
          />

          <v-text-field
            v-model="password"
            label="Password"
            prepend-inner-icon="mdi-lock-outline"
            type="password"
            variant="outlined"
            density="comfortable"
            required
          />

          <v-switch
            v-model="rememberMe"
            color="secondary"
            label="Recuérdame"
            hide-details
            inset
            class="mt-1"
          />

          <v-btn
            :loading="loading"
            type="submit"
            color="secondary"
            variant="tonal"
            size="large"
            class="mt-5 login-btn"
            block
          >
            Log in
          </v-btn>

          <v-alert v-if="error" type="error" variant="tonal" class="mt-4">
            {{ error }}
          </v-alert>
        </v-form>
      </v-card-text>
    </v-card>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const { login, loading, error } = useAuth()

const REMEMBERED_USERNAME_KEY = 'rememberedUsername'

const handleLogin = async () => {
  if (rememberMe.value && email.value) {
    localStorage.setItem(REMEMBERED_USERNAME_KEY, email.value)
  } else {
    localStorage.removeItem(REMEMBERED_USERNAME_KEY)
  }

  await login(email.value, password.value)
}

onMounted(() => {
  const rememberedUsername = localStorage.getItem(REMEMBERED_USERNAME_KEY)
  if (rememberedUsername) {
    email.value = rememberedUsername
    rememberMe.value = true
  }
})
</script>

<style scoped>
.login-root {
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.login-card {
  width: min(100%, 460px);
  border: 1px solid rgba(15, 23, 42, 0.1);
  background: rgb(var(--v-theme-surface));
}

:deep(.login-btn.v-btn) {
  border-radius: 10px;
  background-color: rgba(var(--v-theme-secondary), 0.38) !important;
  color: rgb(var(--v-theme-on-secondary)) !important;
  letter-spacing: 0.3px;
  text-transform: none;
  border: 1px solid rgba(var(--v-theme-secondary), 0.9);
}

:deep(.login-btn.v-btn:hover) {
  background-color: rgba(var(--v-theme-secondary), 0.5) !important;
}
</style>
