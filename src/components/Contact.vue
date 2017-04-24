<template>
  <div class="darkMode">
    <div class="center" style="font-size: 20pt">Contact Us</div>

    <div class="grid">
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
      <div class="inputData-wide">
        <label for="message">Message</label>
        <textarea class="contact" style="width: 100%" v-model="message" id="message"></textarea>
      </div>
      <!--TODO There needs to be a submit button here-->
    </div>


  </div>
</template>

<script>

  export default {
    name: 'contact',
    data() {
      return {
        title: 'Contact',
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
      };
    },

  };
</script>

<style scoped>

  .darkMode{
  }

  .grid{
    display: flex;
    flex-flow: row wrap;
    margin: 0 5%;
    justify-content: center;
  }

  .inputData {
    flex: auto;
    width: 49%;
    padding: 10px 0;
  }
  .inputData-wide {
    flex: auto;
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

  label {display:block;}
  textarea { display:block;}
  input { display:block;}

</style>

