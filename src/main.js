// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';
import Gravatar from 'vue-gravatar';
import App from './App';
import router from './router';


Vue.use(VueMaterial);
Vue.component('v-gravatar', Gravatar);

Vue.material.registerTheme({
  default: {
    primary: 'blue',
    accent: 'pink',
    background: 'grey',
  },
  blue: {
    primary: 'blue',
    accent: 'pink',
  },
  indigo: {
    primary: 'indigo',
    accent: 'pink',
  },
  brown: {
    primary: 'brown',
    accent: 'green',
  },
  purple: {
    primary: 'purple',
    accent: 'blue',
  },
  orange: {
    primary: 'orange',
    accent: 'purple',
  },
  green: {
    primary: 'green',
    accent: 'pink',
  },
  'light-blue': {
    primary: 'light-blue',
    accent: 'yellow',
  },
  teal: {
    primary: 'teal',
    accent: 'orange',
  },
  'blue-grey': {
    primary: 'blue-grey',
    accent: 'blue',
  },
  cyan: {
    primary: 'cyan',
    accent: 'pink',
  },
  red: {
    primary: 'red',
    accent: 'pink',
  },
  white: {
    primary: 'white',
    accent: 'blue',
  },
  grey: {
    primary: {
      color: 'grey',
      hue: 300,
    },
    accent: 'indigo',
  },
  toolbar: {
    primary: 'indigo',
    background: 'white',
  },
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
