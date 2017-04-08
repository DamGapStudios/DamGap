<template>
  <div id="aboutus">

    <!--DamGap Card-->
    <md-card md-with-hover class="padding" md-theme="white">
      <md-card-header>
        <div class="md-title">DamGap Studios</div>
        <div class="md-subhead">A startup with a focused in Web Dev</div>
      </md-card-header>

      <md-card-content>
        DESCRIPTION HERE
      </md-card-content>

    </md-card>

    <h1 class="center-text">Developers</h1>
    <!--Developer Cards-->
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
    name: 'aboutUs',
    data() {
      return {
        title: 'About Us',
        us: [
          { name: 'Adrian Dunham', title: 'Lead Developer', description: 'Some Text here', url: 'adriandunham.com' },
          { name: 'Anthony Garera', title: 'Lead Developer', description: 'Some Text here', url: '' },
        ],
      };
    },
  };
</script>

<style>
  .padding {
    margin: 10px;
  }

  .center-text{
    text-align: center;
  }
</style>
