<template>
    <div class="card w-96 h-106 bg-base-100 shadow-xl">
      <figure>
        <img :src="book.image_url_medium || '@/assets/images/book.jpg'" alt="Book Image" />
      </figure>
      <div class="card-body">
        <div class="flex justify-between mb-4">
          <h2 class="card-title text-lg font-semibold mb-2">{{book.titre}}</h2>
  
          <div class="flex space-x-1">
            <template v-for="i in 5">
              <svg
                :class="['h-5 w-5', i <= rating ? 'fill-yellow-500' : 'fill-gray-300']"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 0l2.5 7h7.5l-6 5.5 2.5 7L10 14l-8 6.5 2.5-7L0 7h7.5z"
                />
              </svg>
            </template>
          </div>
          
        </div >
        <p class="text-gray-600 mb-4">{{ book.categorie_nom }}</p>
       
        <div class='flex justify-between'>  <p class="text-gray-600 mb-4">  by: {{book.auteur}}</p>
          </div>
          <div class="card-actions justify-end">
            <router-link :to="{ name: 'book-item', params: { id: book.id_l }}" class="btn btn-primary">Read now</router-link>
          </div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue';
  
  const rating=ref(3)
  const props = defineProps(['book'])

  </script>
  