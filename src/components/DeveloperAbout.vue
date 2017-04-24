<template>
  <div id="developerAbout">
    <div v-for="about in us" :key="about.name">

    </div>
    <!--<md-card md-with-hover  class="padding" md-theme="white">-->
      <!--<md-card-header>-->
        <!--<v-gravatar v-bind:email="about.email" />-->
        <!--<div class="md-title">{{ about.name }}</div>-->
        <!--<div class="md-subhead">{{ about.title }}</div>-->
      <!--</md-card-header>-->

      <!--<md-card-content>-->
        <!--{{ about.description }}-->
      <!--</md-card-content>-->

      <!--<md-card-actions>-->
        <!--<md-button v-bind:href="about.url">Personal Site</md-button>-->
      <!--</md-card-actions>-->
    <!--</md-card>-->
  </div>
</template>

<script>
  export default {
    name: 'developerAbout',
    data() {
      return {
        title: 'Developer About',
        us: [
          {
            name: 'Adrian Dunham',
            title: 'Lead Developer',
            description: 'Some Text here',
            url: 'https://www.adriandunham.com',
            email: 'adunham95@gmail.com',
            linkedin: 'https://www.linkedin.com/in/adrian-dunham-2521488a',
            github: 'github.com/adunham95',
          },
          { name: 'Anthony Garera', title: 'Lead Developer', description: 'Some Text here', url: 'https://www.anthonygarera.com', email: 'gareraanthony@gmail.com', linkedin: '', github: '' },
        ],
      };
    },
  };
</script>

<style>

</style>
