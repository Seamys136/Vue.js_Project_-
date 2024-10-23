import Vue from '@/App.vue';
import Router from '@/router';
import HomePage from '@/HomePage.vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  }
];

const router = new Router({
    mode: 'history', // Используем режим history для красивых URL без #
    routes
  });
  
  export default router;