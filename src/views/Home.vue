<template>
  <div class="home darkMode">
    <div class="info">
      <div class="center red-glow">
        <span class="code-words">DEVELOP<span class="blinking-cursor">|</span></span>
        <span class="create-words">CREATE </span>
        <span class="smart-words"> IMPRESS</span>
      </div>
    </div>

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
    padding-top: 100px;
    width: 100%;
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
    color: #ba3945;
  }

  .blinking-cursor {
    font-weight: 100;
    font-size: 30px;
    color: #ba3945;
    text-shadow: 0;
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
      color: #ba3945;
    }
  }

  @-moz-keyframes blink {
    from, to {
      color: transparent;
    }
    50% {
      color: #ba3945;
    }
  }

  @-webkit-keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: #ba3945;
    }
  }

  @-ms-keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: #ba3945;
    }
  }

  @-o-keyframes "blink" {
    from, to {
      color: transparent;
    }
    50% {
      color: #ba3945;
    }
  }

  .create-words {
    font-size: 35px;
    padding: 15px;
    font-family:	Comic Sans MS, cursive, sans-serif;
    background-image: -webkit-linear-gradient(left, #ff0018 0%, #993b44 100%);
    color:transparent;
    -webkit-background-clip: text;
  }

  .smart-words {
    font-size: 35px;
    font-family:	Arial Black, Gadget, sans-serif;
    color: #ba3945;
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

