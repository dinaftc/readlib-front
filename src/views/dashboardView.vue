<template>
  <div class="w-full h-full flex flex-col">

    <div class="w-full">
      <top-bar />
    </div>

    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="w-full overflow-y-auto flex flex-col items-center gap-12 justify-center mx-4 my-12">

        <!-- Responsive grid using grid-cols-1 for small screens, grid-cols-2 for medium screens, and grid-cols-3 for large screens -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          <book-card v-for="book in useBook.books" :key="book.id_l" :book="book"/>
        </div>
      </div>
    </div>

  </div>
</template>


<script setup>
import topBar from '@/components/commun/navBar.vue';
import bookCard from '@/components/commun/books/bookCard.vue'
import {useBooksStore} from '@/stores/book'
import { onMounted } from 'vue';

const useBook=useBooksStore()
onMounted(async () => {
   
   useBook.getBooks()
})
</script>

<style lang="scss" scoped></style>