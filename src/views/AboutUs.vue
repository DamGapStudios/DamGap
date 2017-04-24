<template>
  <div id="aboutus">

    <h1 class="center-text md-display-1">Developers</h1>
    <!--Developer Cards-->
    <developer-about></developer-about>


  </div>
</template>

<script>
  import DeveloperAbout from '../components/DeveloperAbout';

  export default {
    name: 'aboutUs',
    data() {
      return {
        title: 'About Us',
      };
    },

    components: {
      DeveloperAbout,
    },
  };
</script>

<style>
  .padding {
    margin: 10px;
  }

  .center-text{
    text-align: center;
  }
</style>
