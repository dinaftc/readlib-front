<template>
    <div class="w-full h-full flex flex-col">

        <div class="w-full">
          <nav-bar />
        </div>
    
        <div v-if="!loading" class="w-full h-full flex flex-col justify-center items-center  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12 p-8">
 
        <img class="w-full h-full object-cover" src="@/assets/images/book.jpg" alt="Book 1 image" />
  
        <div class="flex flex-col">
          <div class="flex justify-between mb-4">
            <h2 class="pixa-title mb-2">{{useBook.focusedBook.titre}}</h2>
  
           
          </div>
  
          <p class="text-gray-600 mb-2">Category: {{useBook.focusedBook.categorie_nom}}</p>
  
          <div class="mb-2">
            <p class="text-gray-600 font-semibold">Author:</p>
            <p class="text-gray-600">{{useBook.focusedBook.auteur}}</p>
           
          </div>
          
          <div class="flex justify-left items-center gap-4"
          >
          <p class="text-gray-600 font-semibold">Your rating:</p>
          <input type="text"  placeholder="rate from 0 to 10"
          v-model="useBook.reviewToAdd"
          class=" pr-12 block w-1/3 h-10 rounded-md border-0 py-1.5 mt-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" />

          
          <button  @click="useBook.addReview" class="btn btn-primary w-1/3  btn-sm pixa-btn  mt-2 capitalize fill-white flex justify-center items-center">Rate now</button>
        </div></div>
       
          </div>
          <div class="w-full h-full flex flex-col justify-center items-center">

          
          
      </div>
    
    </div>  
  </template>
  <script setup>
import bookCard from '@/components/commun/books/bookCard.vue'
import navBar from '@/components/commun/navBar.vue'
import {useBooksStore} from '@/stores/book'
import { onMounted ,ref} from 'vue';
import { useRouter,useRoute } from 'vue-router'

const route = useRoute()
const useBook=useBooksStore()
const loading=ref(true)
onMounted(async () => {
    await useBook.getBook(route.params.id)
    console.log(useBook.focusedBook)
loading.value=false
})

</script>
  