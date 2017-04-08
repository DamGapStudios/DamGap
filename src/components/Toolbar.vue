<template>
  <div>
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">DamGap Studios</h2>
    </md-toolbar>

    <div>
    </div>

    <md-sidenav class="md-left" ref="leftSidenav" >
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">DamGap Studios</h3>
        </div>
      </md-toolbar>
        <div class="padding">
          <md-list>
            <md-list-item v-for="link in links" v-bind:href="link.url" :key="link.id">{{link.text}}</md-list-item>
          </md-list>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
        </div>
      </md-sidenav>
  </div>
</template>

<script>

  export default {
    name: 'toolbar',
    data() {
      return {
        title: 'Dam Gap Studios',
        links:
        [
            { id: 1, text: 'Home', url: '/' },
            { id: 2, text: 'Hello', url: '/Hello' },
            { id: 3, text: 'Contact', url: '/Contact' },
            { id: 4, text: 'About Us', url: '/about-us' },
        ],
      };
    },
    methods: {
      toggleLeftSidenav() {
        this.$refs.leftSidenav.toggle();
      },
      methods: {
        toggleLeftSidenav() {
          this.$refs.leftSidenav.toggle();
        },
//        open() {
//          console.log('Opened: ' + ref);
//        },
//        close(ref) {
//          console.log('Closed: ' + ref);
//        },
      },
    },
  };
</script>

<style scoped>
  .padding {
    padding: 10px;
  }
</style>
