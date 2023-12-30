<template>
  <div class="w-full h-screen flex justify-center overflow-hidden">
    <div class="w-full h-full overflow-auto">
      <div class="w-full h-fit flex flex-col">
        <div class="w-full h-screen relative flex justify-center">
          <div class="w-full h-full overflow-hidden relative">
            <div class="w-full h-full bg-gradient-to-t from-primary/60 to-slate-900/40 absolute"></div>
            <img src="@/assets/images/test1.jpg" class="w-full h-full object-cover" alt="">
          </div>
          <div class="w-full h-screen max-w-screen-2xl absolute px-8 flex flex-col items-center">
            <nav-bar />
            <div class="w-full max-w-[800px] grow flex flex-col justify-center items-center gap-12">
              <span class="text-6xl font-bold text-white text-center">Your favourite online library</span>

              <span class=" text-center text-white">
                where the journey of knowledge begins. Immerse yourself in a world of literary
                wonders with our extensive collection of books, articles, and resources. Whether you're a passionate student,
                dedicated researcher, or avid book enthusiast, our digital library is designed to cater to your diverse interests.
                Explore topics ranging from classical literature to cutting-edge research, and embark on a learning adventure that
                knows no bounds. Discover the joy of reading, the thrill of discovery, and the endless possibilities that our
                curated collection brings to your fingertips. Join us in the pursuit of knowledge and open the door to a world of
                information, inspiration, and imagination.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import navBar from '@/components/commun/navBar.vue'




</script>
