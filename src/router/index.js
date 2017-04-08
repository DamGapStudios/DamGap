import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/views/Hello';
import Home from '@/views/Home';
import Contact from '@/views/Contact';
import AboutUs from '@/views/AboutUs';

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
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/about-us',
      name: 'About Us',
      component: AboutUs,
    },
  ],
});
