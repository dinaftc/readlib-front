import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

import { useAuthStore } from './auth'
export const useBooksStore = defineStore('books', () => {

  const useAuth = useAuthStore()
  
  const books = ref([])

 
  const focusedBook = ref()

 
  const getBooks = async () => {
    let response = await axios.get(`/classpschool/${useAuth.authUser.userDetail.school}/`)
    books.value = response.data
    console.log(books.value)
  }

 

  return {
    books,getBooks,focusedBook
  }
})
