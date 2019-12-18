import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Storage from './views/Storage.vue';
import CreateStorage from './views/storage/CreateStorage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/storage',
      name: 'storage',
      component: Storage,
    },
    {
      path: '/storage/new',
      name: 'create-storage',
      component: CreateStorage,
    },
    {
      path: '/storage/:id',
      name: 'view-storage',
      component: Storage,
    },
  ],
});
