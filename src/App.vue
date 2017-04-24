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

  @import url(https://fonts.googleapis.com/css?family=Montserrat|Vollkorn:400,400italic,700);

  h1,h2,h3,h4,h5,h6 {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
  }
  p,a,li,blockquote {
    font-family: "Vollkorn", serif;
    font-weight: 400;
  }
</style>
