<template>
  <div 
    class="w-full h-screen flex justify-center overflow-hidden">
    <div class="w-full h-full overflow-auto">
      <div class="w-full h-fit flex flex-col">
        <div class="w-full h-screen relative flex justify-center">
          <div class="w-full h-full overflow-hidden relative">
            <div class="w-full h-full bg-gradient-to-t from-primary/60 to-slate-900/40 absolute"></div>
            <img src="@/assets/images/test1.jpg" class="w-full h-full object-cover" alt="">
          </div>
          <div class="w-full h-screen max-w-screen-2xl absolute px-8 flex flex-col items-center">
            <nav-bar />
            <div class="w-[800px] grow flex flex-col justify-center items-center gap-12">
              <span class="text-6xl font-bold   text-white">lorem ipsum dolor</span>

              <span class=" text-justify   text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est alias
                asperiores
                vitae illum ducimus
                perferendis officia! Repellat officia recusandae, reiciendis ad in expedita eum quaerat fuga minima iusto
                quos deleniti. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est alias asperiores
                vitae illum ducimus
                perferendis officia! Repellat officia recusandae, reiciendis ad in expedita eum quaerat fuga minima iusto
                quos deleniti.</span>

             
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
