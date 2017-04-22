import Vue from 'vue';

import Router from 'vue-router';
import Hello from '@/views/Hello';
import Home from '@/views/Home';
import AboutUs from '@/views/AboutUs';
import Services from '@/views/Services';

import 'font-awesome/css/font-awesome.min.css';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
    },
    {
      path: '/about-us',
      name: 'About Us',
      component: AboutUs,
    },
  ],
});
