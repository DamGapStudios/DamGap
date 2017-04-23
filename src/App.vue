<template>
  <div id="app" class="darkMode">
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
    height: 100%;
  }

  .darkMode{
    color: #ba3945;
    background-color: #313439;
  }
</style>
