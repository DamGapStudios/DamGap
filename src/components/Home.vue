<template>
  <div>
    <a href="/hello">Hi my name is bob</a>
    <Projects></Projects>
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

