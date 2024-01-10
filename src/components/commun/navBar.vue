<template>
  <div className="navbar  lg:px-16">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>explore Books</a></li>
        <li>
          <a>For you</a>
        </li>
        <li><a>About us</a></li>
        </ul>
      </div>

      <router-link :to="{ name: 'books'}" :class="[logged ? 'text-2xl text-primary' : 'text-2xl text-white']">
        <p>ReadLib</p>
      </router-link>
      
    </div>
    <div className="navbar-center  hidden lg:flex"  v-if="logged">
      <ul className="menu menu-horizontal px-1">
        <li><router-link :to="{ name: 'books' }" >explore Books</router-link></li>
        <li>
          <router-link :to="{ name: 'recommended' }" >For you</router-link>
        </li>
        <li><a>About us</a></li>
      </ul>
    </div>

    <div v-if="!logged" className="navbar-end">

      <router-link :to="{ name: 'login' }" class="btn btn-sm pixa-btn btn-primary capitalize flex gap-4">
        <span>login</span>
        <login-icon class="w-5 h-5" />
    </router-link> </div>

    
  <div class='navbar-end' v-if="logged"> 
    <div className=" dropdown dropdown-end" >
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><a>Settings</a></li>
        <li><button @click='useAuth.signOut' >Logout</button></li>
      </ul>
    </div>  </div>
    </div>
  
</template>
<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import loginIcon from '@/assets/icons/loginIcon.vue';
import {useAuthStore} from '@/stores/auth'

const useAuth=useAuthStore()
const logged = ref(false);
const route = useRoute();

watch(() => {
  // Check if the current route is 'dashboard'
  logged.value = route.name !== 'home';
});
</script>