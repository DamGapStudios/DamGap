<template>
  <div id="aboutus">

    <!--DamGap Card-->
    <md-card md-with-hover class="padding" md-theme="white">
      <md-card-header>
        <div class="md-title">DamGap Studios</div>
        <div class="md-subhead">A startup with a focus in Web Development</div>
      </md-card-header>

      <md-card-content>
        DESCRIPTION HERE
      </md-card-content>

    </md-card>

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
