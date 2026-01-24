import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'home',
      component: LoginView,
    }, {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }
    }
  ],
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const isAuthenticated = userStore.isAuthenticated

  if (to.meta.requiresAuth && !isAuthenticated) {
    // Si requiere auth y no está autenticado, al login
    next({ name: 'login' })
  } else if (to.meta.guestOnly && isAuthenticated) {
    // Si es solo para invitados (como el login) y ya está autenticado, al dashboard
    next({ name: 'dashboard' })
  } else {
    next()
  }
})

export default router
