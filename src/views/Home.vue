<template>
  <div class="padding">
    <Projects></Projects>
    <md-button>Default</md-button>
  </div>
</template>

<script>

  import Projects from '../components/Projects';

  export default {
    name: 'home',

    components: {
      Projects,
    },
  };
</script>

<style>
  .padding {
    padding: 10px;
  }
</style>

