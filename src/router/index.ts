import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import GastosView from '@/views/GastosView.vue'
import IngresosView from '@/views/IngresosView.vue'
import EstadisticasView from '@/views/EstadisticasView.vue'
import ConfiguracionView from '@/views/ConfiguracionView.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: 'overview' }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { guestOnly: true }
    },
    {
      path: '/overview',
      name: 'overview',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/gastos',
      name: 'gastos',
      component: GastosView,
      meta: { requiresAuth: true }
    },
    {
      path: '/ingresos',
      name: 'ingresos',
      component: IngresosView,
      meta: { requiresAuth: true }
    },
    {
      path: '/estadisticas',
      name: 'estadisticas',
      component: EstadisticasView,
      meta: { requiresAuth: true }
    },
    {
      path: '/configuracion',
      name: 'configuracion',
      component: ConfiguracionView,
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
    next({ name: 'overview' })
  } else {
    next()
  }
})

export default router
