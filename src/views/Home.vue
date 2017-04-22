<template>
  <div class="home">
    <div class="info">
      <div class="center">
        <span class="code-words">DEVELOP<span class="blinking-cursor">|</span></span>
        <span class="create-words">CREATE </span>
        <span class="smart-words"> IMPRESS</span>
      </div>
    </div>

    <project-carousel style="padding-top: 100px"></project-carousel>
    <div class="mainContent">
      <div class="developers"></div>
    </div>
  </div>
</template>

<script>
  import ProjectCarousel from '../components/ProjectCarousel';

  export default {
    name: 'home',

    components: {
      ProjectCarousel,
    },
  };
</script>

<style>

  .home {
    position: absolute; top: 0; left: 0;
    width: 100%;
    background-image: url("../assets/pexels-photo-390392.jpeg");
    background-color: grey;
    z-index: -1;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center top;
  }
  .center{
    text-align: center;
    padding: 22px 22% 22px 22%;
    margin: 0 5%;
  }
  .code-words {
    font-family:	Lucida Console, Monaco, monospace;
    font-size: 35px;
    padding: 15px;
  }

  .blinking-cursor {
    font-weight: 100;
    font-size: 30px;
    color: #2E3D48;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
  }

  @keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: black;
    }
  }

  @-moz-keyframes blink {
    from, to {
      color: transparent;
    }
    50% {
      color: black;
    }
  }

  @-webkit-keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: black;
    }
  }

  @-ms-keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: black;
    }
  }

  @-o-keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: black;
    }
  }

  .create-words {
    font-size: 35px;
    padding: 15px;
    font-family:	Comic Sans MS, cursive, sans-serif;
    background-image: -webkit-linear-gradient(left, #48d7ea 0%, #005eff 100%);
    color:transparent;
    -webkit-background-clip: text;
  }

  .smart-words {
    font-size: 35px;
    font-family:	Arial Black, Gadget, sans-serif;

  }

  .info {
    background-color: white;
    width: 100%;
    margin-top: 200px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
  }

  .mainContent {
    background-color: white;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
    width: 90%;
    margin: 200px 0 5% 5%;
    flex-direction: row
  }

  .projectCarousel{

  }

</style>

