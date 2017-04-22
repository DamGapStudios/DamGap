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
    APPdata: {
      msg: 'DamGap Studios',
    },
    components: {
      Toolbar,
    },
  };

</script>
<style>
  body {
    margin: 0;
  }
</style>
