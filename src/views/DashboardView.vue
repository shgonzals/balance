<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-6">
          <v-card-title class="text-h4 d-flex justify-space-between align-center">
            Dashboard
            <v-btn color="error" @click="handleLogout" prepend-icon="mdi-logout">
              Cerrar Sesión
            </v-btn>
          </v-card-title>

          <v-card-text>
            <p class="text-body-1">¡Bienvenido, <strong>{{ user?.username }}</strong>!</p>
            <v-divider class="my-4"></v-divider>
            <p>Has iniciado sesión correctamente en Balance. Esta es tu área privada.</p>

            <v-row class="mt-6">
              <v-col cols="12" sm="4">
                <v-card color="primary" theme="dark">
                  <v-card-text>
                    <div class="text-subtitle-1">Estado de Cuenta</div>
                    <div class="text-h5">$0.00</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuth } from '@/composables/useAuth'

export default defineComponent({
  name: 'DashboardView',
  setup() {
    const { user, logout } = useAuth()

    const handleLogout = () => {
      logout()
    }

    return {
      user,
      handleLogout
    }
  }
})
</script>
