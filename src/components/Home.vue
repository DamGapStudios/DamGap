<template>
  <div>
    <md-toolbar>
      <h1 class="md-title">My Title</h1>
    </md-toolbar>
    <a href="/hello">Hi my name is bob</a>
    <Projects></Projects>
    <md-button>Default</md-button>
  </div>
</template>

<script>

  import Projects from './Projects';

  export default {
    name: 'home',

    components: {
      Projects,
    },
  };
</script>

