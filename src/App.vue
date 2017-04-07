<template>
  <div id="app">
    <md-toolbar>
      <a href="/">
        <h1 class="md-title">My Title</h1>
      </a>
    </md-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: {
    msg: 'DamGap Studios',
  },
};

</script>
<style src="../node_modules/vue-material/dist/vue-material.css">

</style>
