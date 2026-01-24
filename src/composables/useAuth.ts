import { ref, computed } from 'vue'
import { useUserStore, type User } from '@/stores/user'
import { useRouter } from 'vue-router'

export const useAuth = () => {
  const userStore = useUserStore()
  const router = useRouter()
  const loading = ref(false)
  const error = ref<string | null>(null)

  const login = async (username: string, password: string): Promise<boolean> => {
    loading.value = true
    error.value = null
    
    try {
      // Simulación de una llamada a API
      await new Promise(resolve => setTimeout(resolve, 1000))

      if (username === 'admin' && password === '1234') {
        const userData: User = { username, role: 'admin' }
        const token = 'fake-jwt-token'
        
        userStore.setUser(userData, token)
        router.push('/')
        return true
      } else {
        throw new Error('Credenciales inválidas')
      }
    } catch (err: any) {
      error.value = err.message || 'Ocurrió un error inesperado'
      return false
    } finally {
      loading.value = false
    }
  }

  const logout = () => {
    userStore.clearUser()
    router.push('/login')
  }

  return {
    login,
    logout,
    loading,
    error,
    isAuthenticated: computed(() => userStore.isAuthenticated),
    user: computed(() => userStore.user)
  }
}
