<template>
  <div id="app">
    <toolbar></toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Toolbar from './components/Toolbar';

  export default {
    name: 'app',
    data: {
      msg: 'DamGap Studios',
    },
    components: {
      Toolbar,
    },
  };

</script>
<style src="../node_modules/vue-material/dist/vue-material.css">
</style>
