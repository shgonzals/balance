
<template>
  <v-app class="modern-shell">
    <div class="layout-root">
      <aside class="left-rail" :class="{ collapsed: isMenuCollapsed }">
        <div v-if="isAuthenticated" class="rail-top">
          <div class="brand">Balance</div>
          <v-list v-if="!isMenuCollapsed" nav density="comfortable" class="menu-list">
            <v-list-item
              v-for="item in menuItems"
              :key="item.name"
              :to="{ name: item.name }"
              :prepend-icon="item.icon"
              :title="item.title"
              rounded="lg"
              class="menu-item"
            />
          </v-list>
          <div v-else class="menu-icons">
            <v-btn
              v-for="item in menuItems"
              :key="item.name"
              :icon="item.icon"
              variant="text"
              class="rail-icon icon-only-item"
              :class="{ 'icon-only-active': isActive(item.name) }"
              :to="{ name: item.name }"
            />
          </div>
        </div>

        <div v-if="isAuthenticated" class="rail-bottom">
          <v-divider class="rail-divider" />
          <v-btn
            v-if="isAuthenticated"
            icon="mdi-logout"
            variant="text"
            class="rail-icon logout-icon"
            @click="logout"
          />
        </div>
      </aside>

      <section class="main-zone">
        <header v-if="isAuthenticated" class="topbar">
          <v-btn
            icon="mdi-menu"
            variant="text"
            size="small"
            class="menu-toggle"
            @click="toggleMenu"
          />
          <v-spacer />
          <div class="user-chip">
            <v-icon icon="mdi-account-circle-outline" size="18" />
            <span>{{ displayUserName }}</span>
          </div>
        </header>
        <main class="content-area">
          <div class="router-panel">
            <router-view />
          </div>
        </main>
      </section>
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const { logout, isAuthenticated, user } = useAuth()
const route = useRoute()
const isMenuCollapsed = ref(false)

// TODO: Añadir tooltips a cada botón de la barra lateral
// TODO: Crear un componente para el panel de menu
const menuItems = [
  { name: 'overview', title: 'Overview', icon: 'mdi-view-dashboard-outline' },
  { name: 'gastos', title: 'Gastos', icon: 'mdi-cash-minus' },
  { name: 'ingresos', title: 'Ingresos', icon: 'mdi-cash-plus' },
  { name: 'estadisticas', title: 'Estadísticas', icon: 'mdi-chart-line' },
  { name: 'configuracion', title: 'Configuración', icon: 'mdi-cog-outline' }
]

const displayUserName = computed(() => user.value?.username || 'user')

const toggleMenu = () => {
  isMenuCollapsed.value = !isMenuCollapsed.value
}

const isActive = (name: string) => route.name === name
</script>

<style scoped>
.modern-shell {
  background: rgb(var(--v-theme-background));
}

.layout-root {
  display: flex;
  height: 100vh;
}

.left-rail {
  width: 230px;
  background: #111317;
  color: #ffffff;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 12px;
  transition: width 0.22s ease, padding 0.22s ease;
}

.left-rail.collapsed {
  width: 78px;
  padding: 16px 8px;
}

.rail-top,
.rail-bottom {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.brand {
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.2px;
  padding: 4px 8px;
  margin-bottom: 6px;
}

.left-rail.collapsed .brand {
  display: none;
}

.menu-list {
  background: transparent;
  padding: 0;
}

.menu-icons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
}

:deep(.menu-item .v-list-item__prepend > .v-icon),
:deep(.menu-item .v-list-item-title) {
  color: rgba(255, 255, 255, 0.75);
}

:deep(.menu-item.v-list-item--active) {
  background: rgba(var(--v-theme-secondary), 0.22);
}

:deep(.menu-item.v-list-item--active .v-list-item__prepend > .v-icon),
:deep(.menu-item.v-list-item--active .v-list-item-title) {
  color: #ffffff;
}

.rail-divider {
  width: 100%;
  border-color: rgba(255, 255, 255, 0.12);
}

.logout-icon {
  color: rgba(255, 255, 255, 0.82);
  align-self: flex-end;
}

.left-rail.collapsed .logout-icon {
  align-self: center;
}

.icon-only-item {
  color: rgba(255, 255, 255, 0.74);
}

.icon-only-active {
  background: rgba(var(--v-theme-secondary), 0.22);
  color: #ffffff;
}

.main-zone {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
}

.topbar {
  height: 60px;
  padding: 0 18px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.menu-toggle {
  color: rgba(15, 23, 42, 0.75);
}

.user-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  color: rgba(15, 23, 42, 0.9);
  font-weight: 500;
  font-size: 0.9rem;
}

.content-area {
  flex: 1;
  padding: 16px;
}

.router-panel {
  height: 100%;
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: rgb(var(--v-theme-surface));
  padding: 22px;
  overflow: auto;
}

.router-panel :deep(> *) {
  min-height: 100%;
}
</style>
