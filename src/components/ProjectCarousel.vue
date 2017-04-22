<template>
  <div id="projectCarousel">
    <div v-for="project in projects" class="projectCard" style="background-color: #F6E84A; color: black">
      <img src='../assets/creative_bookcover.png' class="projectImage"/>
      <div class="projectInfo">
        <h3>Company Name</h3>
        <p class="overFlow">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="row">
          <a class="projectButton" style="background-color: #EE4A5B" href="/">Read More</a>
        </div>
      </div>
    </div>

    <div v-for="project in projects" class="projectCard" :style="{ backgroundColor: project.mainColor, color: project.mainFontColor, }">
      <img v-bind:src="project.image" class="projectImage"/>
      <div class="projectInfo">
        <h3>{{ project.name }}</h3>
        <p class="overFlow">
          {{ project.about }}
        </p>
        <div class="row">
          <a class="projectButton" :style="{ backgroundColor: project.altColor, color: project.altFontColor, }" href="/">Read More</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'projectCarousel',
    data() {
      return {
        title: 'projectCarousel',
        projects: [
          { name: 'Travel Julias Way',
            client: 'Julia Matheson',
            about: 'Lorem ipsum dolor sit amet, consectetur adip',
            image: 'assets/creative_bookcover.png',
            mainColor: 'blue',
            mainFontColor: 'white',
            altColor: 'grey',
            altFontColor: 'white',
          },
        ],
      };
    },
  };
</script>

<style>
  #projectCarousel {
    display: flex;
    flex-wrap: wrap;

  }

  .projectCard {
    height: 200px;
    width: 450px;
    margin: 0 2% 75px 2%;
    border-radius: 4px;

  }

  .projectInfo {
    padding: 10px;
    flex-direction: column;
  }

  .projectImage {
    width: 150px;
    height: 250px;
    margin: 20px;
    box-shadow: 7px 7px 30px rgba(0, 0, 0, .5);
    float: left;
  }

  .projectImage:hover {
    height: 250px;
    margin: 20px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, .5);
  }

  .row{
    display: flex;
    justify-content: center;
  }

  .projectButton{
    text-decoration: none;
    border-radius: 4px;
    color: white;
    text-align: center;
    padding: 10px;
    width: 50%;
    box-shadow: 7px 7px 30px rgba(0, 0, 0, .5);
  }

  .projectButton:hover{
    box-shadow: 1px 1px 4px rgba(0, 0, 0, .5);
  }

  .overFlow{
    text-overflow: ellipsis;
  }

</style>
