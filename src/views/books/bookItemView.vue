<template>
    <div class="w-full h-full flex flex-col">

        <div class="w-full">
          <nav-bar />
        </div>
    
        <div class="w-full h-full flex flex-col justify-center items-center  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-12 p-8">
 
        <img class="w-full h-full object-cover" src="@/assets/images/book.jpg" alt="Book 1 image" />
  
        <div class="flex flex-col">
          <div class="flex justify-between mb-4">
            <h2 class="pixa-title mb-2">Book 1</h2>
  
            <div class="flex space-x-1">
              <template v-for="i in 5" :key="i">
                <svg
                  :class="['h-5 w-5', i <= rating ? 'fill-yellow-500' : 'fill-gray-300']"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0l2.5 7h7.5l-6 5.5 2.5 7L10 14l-8 6.5 2.5-7L0 7h7.5z" />
                </svg>
              </template>
            </div>
          </div>
  
          <p class="text-gray-600 mb-2">Category: Mystery</p>
  
          <div class="mb-2">
            <p class="text-gray-600 font-semibold">Author:</p>
            <p class="text-gray-600">John Doe</p>
            <p class="text-gray-600">Jane Smith</p>
            <p class="text-gray-600">Alan Johnson</p>
          </div>
  
          <p class="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  
          <button    class="btn btn-primary w-full  mt-2 btn-sm pixa-btn capitalize fill-white flex justify-center px-10 group">Mark as read</button>
        </div>
       
          </div>
          <div class="w-full h-full flex flex-col justify-center items-center">

          
          <a className=" pixa-title text-4xl ">Recommended For you</a>
          <div class="w-full h-full flex flex-col justify-center items-center">
              <div class="w-full overflow-y-auto flex flex-col items-center gap-12 justify-center mx-4 my-12">
        
                <!-- Responsive grid using grid-cols-1 for small screens, grid-cols-2 for medium screens, and grid-cols-3 for large screens -->
                <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                  <book-card v-for="i in 6" :key="i" />
                </div>
              </div></div>
      </div>
    
    </div>  
  </template>
  <script setup>
import bookCard from '@/components/commun/books/bookCard.vue'
import navBar from '@/components/commun/navBar.vue'
</script>
  