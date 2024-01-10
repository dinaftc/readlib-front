import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/auth/LoginView.vue';
import RegisterView from '@/views/auth/RegisterView.vue';
import MainPanel from '@/views/MainPanel.vue';
import DashboardView from '@/views/dashboardView.vue';
import BookItemView from '@/views/books/bookItemView.vue';
import RecommandationView from '@/views/recommandationView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/app',
      component: MainPanel,
      children: [
        {
          path: 'books', 
          name: 'books',
          component: DashboardView,
        },
            {
              path: 'book/:id', 
              name: 'book-item',
              component: BookItemView, 
            },
         
            {
              path: 'recommended', 
              name: 'recommended',
              component: RecommandationView, 
            },
      ],
    },
  ],
});

export default router;


