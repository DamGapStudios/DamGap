<template>
  <div class="home darkMode">
    <!--<div class="info">-->
      <!--<div class="center red-glow">-->
        <!--<span class="code-words">DEVELOP</span>-->
        <!--<span class="create-words">CREATE </span>-->
        <!--<span class="smart-words"> IMPRESS</span>-->
      <!--</div>-->
    <!--</div>-->

    <project-carousel style="padding-top: 20px"></project-carousel>

    <div class="mainContent">
      <contact></contact>
    </div>
  </div>
</template>

<script>
  import ProjectCarousel from '../components/ProjectCarousel';
  import Contact from '../components/Contact';

  export default {
    name: 'home',

    components: {
      Contact,
      ProjectCarousel,
    },
  };
</script>

<style>

  .home {
    position: absolute; top: 0; left: 0;
    z-index: -1;
    padding-top: 125px;
    width: 100%;
  }
  .center{
    text-align: center;
    padding: 22px 22% 22px 22%;
    margin: 0 5%;
  }

  .info {
    background-color: #313439;
    width: 100%;
    /*margin-top: 200px;*/
    /*box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);*/
  }

  .mainContent {
    width: 90%;
    margin: 200px 0 5% 5%;
    flex-direction: row
  }

  .red-glow {
    box-shadow: 0px 5px 5px 5px rgba(193, 52, 65, .5);
  }
</style>

