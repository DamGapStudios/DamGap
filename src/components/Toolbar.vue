<template>
  <div>
    <md-toolbar md-theme="toolbar">
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
      </md-button>

      <h2 class="md-title" style="flex: 1">DamGap Studios</h2>

      <md-button class="md-white" md-hide-medium v-for="link in this.$router.options.routes" v-bind:href="link.path" :key="link.name" v-once>{{link.name}}</md-button>

    </md-toolbar>

    <div>
    </div>

    <md-sidenav class="md-left" ref="leftSidenav" md-theme="toolbar">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">DamGap Studios</h3>
        </div>
      </md-toolbar>
        <div class="padding">
          <md-list>
            <md-list-item v-for="link in this.$router.options.routes" v-bind:href="link.path" :key="link.name" v-once>{{link.name}}</md-list-item>
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
