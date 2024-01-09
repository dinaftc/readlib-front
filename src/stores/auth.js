import { reactive } from 'vue'
import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
 
  const authUser = reactive({
    isAuthenticated: false,
    userDetail: null
  })

  const userToAdd=reactive({
    age:'',
    username:'',
    password:'',
    email:'',
    location:''
  })
  

  const login = async (username, password) => {
    try {
      let response = await axios.post('/api/login/', { username, password })
      Cookies.set('access', response.data.access)
      Cookies.set('refresh', response.data.refresh)
      authUser.isAuthenticated = true
        authUser.userDetail = response.data

          router.push({ name: 'books' })
        
      
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message)
    }
  }
  const register = async () => {
    try {
      let response = await axios.post('/api/inscription/', userToAdd)
      console.log(response.data)
      router.push({ name: 'login' })
    } catch (error) {

      console.error('register failed:', error.response ? error.response.data : error.message)
    }
  }

  const signOut = async () => {
    authUser.isAuthenticated = false
    Cookies.remove('access')
    Cookies.remove('refresh')
    authUser.isAuthenticated = false
        authUser.userDetail = ''
    router.push({ name: 'login' })
  }

  return { authUser, login, signOut ,userToAdd,register}
})