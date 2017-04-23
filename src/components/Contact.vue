<template>
  <div class="darkMode grid">
    <div class="center" style="font-size: 20pt">Contact Us</div>

    <div class="inputData">
      <label for="name">Name</label>
      <input class="contact" v-model="name" id="name">
    </div>
    <div class="inputData">
      <label for="company">Company</label>
      <input class="contact" v-model="company" id="company">
    </div>
    <div class="inputData">
      <label for="email">Email</label>
      <input class="contact" v-model="email" type="email" id="email">
    </div>
    <div class="inputData">
      <label for="phone">Phone</label>
      <input class="contact" v-model="phone" type="tel" id="phone">
    </div>
    <div class="inputData">
      <label for="message">Message</label>
      <textarea class="contact" style="width: 100%" v-model="message" id="message"></textarea>
    </div>


  </div>
</template>

<script>

  export default {
    name: 'contact',
    data() {
      return {
        title: 'Contact',
        name: 'Steve',
        company: 'Monsters Inc',
        email: 'steve@monsters.inc',
        phone: '18003664222',
        message: 'Some Message Goes Here',
      };
    },

  };
</script>

<style scoped>

  .darkMode{

  }

  input.contact {
    background-color: transparent;
    border-style: hidden hidden solid hidden;
    border-color: transparent transparent #53565b transparent;
    color: white;
  }

  input.contact:focus {
    border-color: transparent transparent #ba3945 transparent;
    color: white;
    outline: none;
  }

  textarea.contact {
    background-color: transparent;
    border-style: hidden hidden solid hidden;
    border-color: transparent transparent #53565b transparent;
    color: white;
  }

  textarea.contact:focus {
    border-color: transparent transparent #ba3945 transparent;
    color: white;
    outline: none;
  }

  .inputData {
    padding: 10px;
  }

  label {display:block;}
  textarea { display:block;}
  input { display:block;}

</style>

