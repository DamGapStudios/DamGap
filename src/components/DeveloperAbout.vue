<template>
  <div id="developerAbout">
    <md-card md-with-hover v-for="about in us" :key="about.name" class="padding" md-theme="white">
      <md-card-header>
        <div class="md-title">{{ about.name }}</div>
        <div class="md-subhead">{{ about.title }}</div>
      </md-card-header>

      <md-card-content>
        {{ about.desription }}
      </md-card-content>

      <md-card-actions>
        <md-button v-bind:href="about.url">Personal Site</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
  export default {
    name: 'developerAbout',
    data() {
      return {
        title: 'Developer About',
        us: [
          { name: 'Adrian Dunham', title: 'Lead Developer', description: 'Some Text here', url: 'https://www.adriandunham.com' },
          { name: 'Anthony Garera', title: 'Lead Developer', description: 'Some Text here', url: 'https://www.anthonygarera.com' },
        ],
      };
    },
  };
</script>

<style>

</style>
