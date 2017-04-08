<template>
  <div class="padding">
    <md-button>Default</md-button>
  </div>
</template>

<script>

  import Projects from '../components/Projects';

  export default {
    name: 'contact',
    data() {
      return {
        title: 'Contact',
      };
    },

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

