<template>
    <div class="w-full h-full flex flex-col">
  
      <div class="w-full">
        <top-bar />
      </div>
  
     
      <div class="w-full h-full flex flex-col justify-center items-center">
        <div class="w-fit overflow-y-auto flex flex-col items-center gap-12 justify-center grid grid-cols-3 mx-4  my-12">
          <book-card v-for="i in 6" :key="i" />
        </div>
      </div>
   
   
       
     </div>
  </template>
  

<script setup>
import topBar from '@/components/commun/navBar.vue';
import bookCard from '@/components/commun/books/bookCard.vue'
</script>

<style lang="scss" scoped></style>