import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuthStore } from './auth'
export const useBooksStore = defineStore('books', () => {
const useAuth=useAuthStore()
  
  const books = ref([])

 const recommendedbooks=ref([])
  const focusedBook = ref({})

 const reviewToAdd=ref('')
  const getBooks = async () => {
    let response = await axios.get(`/api/livres/`)
    books.value = response.data
    console.log(books.value)
  }

const getBook = async (id) => {
    let response = await axios.get(`/api/livres/${id}`)
    focusedBook.value = response.data
    
  }
  const addReview = async () => {
    console.log(useAuth.userId)
    try {
     
      // Make a POST request to add the review
      const response = await axios.post(`/api/aj_eval/${useAuth.userId}/${focusedBook.value.id_l}/${reviewToAdd.value}/`);
  
      // Log the response data
      console.log(response.data);
  
      // You can handle the response data as needed, e.g., show a success message, update UI, etc.
    } catch (error) {
      // Handle errors here
      console.error('Error adding review:', error);
  
  
      throw error;
    }
  };
  const getRecommendedBooks = async () => {
    try {
      let response = await axios.get(`/api/recommandation_u/${useAuth.userId}/`)
    const consequentsArray = response.data.formatted_rules.map(rule => rule.consequents).flat()
    
    // Assuming you have a books array with objects having a 'titre' property
    const filteredBooks = books.value.filter(book => consequentsArray.includes(book.titre))

    recommendedbooks.value = filteredBooks
    console.log(recommendedbooks.value)
    } catch (error) {
      console.error('Error fetching recommended books:', error.response ? error.response.data : error.message)
    }
  }
  return {
    books,getBooks,focusedBook,getBook,addReview,reviewToAdd,getRecommendedBooks,recommendedbooks
  }
})
