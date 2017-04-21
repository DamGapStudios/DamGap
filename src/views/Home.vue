<template>
  <div class="padding">
    <div class="center">
      <span class="code-words">DEVELOP<span class="blinking-cursor">|</span></span>
      <span class="create-words">CREATE </span>
      <span class="smart-words"> IMPRESS</span>
    </div>
  </div>
</template>

<script>

  import Projects from '../components/Projects';
  import Contact from '../components/Contact';

  export default {
    name: 'home',

    components: {
      Projects,
      Contact,
    },
  };
</script>

<style>
  .padding {
    padding: 10px;
  }
  .center{
    text-align: center;
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


</style>

