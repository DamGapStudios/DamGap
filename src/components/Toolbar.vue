<template>
  <div class="toolbar">
    <a class="button" v-for="link in links" v-bind:href="link.path" :key="link.name" v-once>{{link.name}}</a>
    <div>
      <img src="../assets/dglogonewlong.png" style="height: 60px; padding: 0">
      <div class="motto">
        <div class="motto-item">DEVELOP</div>
        <div class="motto-item">GENERATE</div>
        <div class="motto-item">STRIVE</div>
      </div>
    </div>
    <a class="button" v-for="contact in contacts" v-bind:href="contact.path" :key="contact.name" v-once>{{contact.name}}</a>
  </div>
</template>

<script>

  export default {
    name: 'toolbar',
    data() {
      return {
        title: 'Dam Gap Studios',
        links: [
          { path: '/', name: 'Home' },
          { path: '/services', name: 'Services' },
          { path: '/about-us', name: 'About Us' },
        ],
        contacts: [
          { path: 'https://www.github.com/damgapstudios', name: 'Github' },
          { path: '/contact', name: 'Contact Us' },
          { path: '/', name: 'Other' },
        ],
      };
    },
    methods: {
    },
  };
</script>

<style scoped>
  .motto {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .motto-item {
    font-family: "Montserrat", sans-serif;
  }

  .toolbar {
    margin: 0 5%;
    box-shadow: 2px 4px 8px rgba(255, 255, 255, .7);
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #313439;
    /*z-index: 2;*/
    border-radius: 0px 0px 5px 5px;
  }

  a.button {
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    padding: 10px 10px;
    margin: 5px 10px;
    color: #ba3945;
  }

  a.button:hover {
    text-decoration: none;
    border-radius: 4px;
    background: #7f8793;
    color: white;
  }

  a.button:active {
    text-decoration: none;
    border-radius: 4px;
    background: #7f8793;
    color: white;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .7);
  }
</style>
