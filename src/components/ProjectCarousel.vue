<template>
  <div id="projectCarousel">
    <div v-for="project in projects" class="projectCard" :id="project.id" :style="{ backgroundColor: project.mainColor, color: project.mainFontColor, }">
      <img src="../assets/creative_bookcover.png" class="projectImage"/>
      <div class="projectInfo">
        <div class="projectTitle">{{ project.name }}</div>
        <div class="projectClient">For {{ project.client }}</div>
        <div class="projectDisc overFlow">{{ project.about }}</div>
        <div class="row">
          <a class="projectButton" :style="{ backgroundColor: project.altColor, color: project.altFontColor, }" v-on:click="showMore(project.id)">Read More</a>
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
          {
            id: 1,
            name: 'Travel Julias Way',
            client: 'Julia Matheson',
            about: 'Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet, consectetur adip',
            image: '../assets/creative_bookcover.png',
            mainColor: '#3C4767',
            mainFontColor: 'white',
            altColor: '#C5C7CE',
            altFontColor: 'black',
          },
        ],
      };
    },
    methods: {
      showMore(id) {
        document.getElementById(id).style.height = '900px';
        alert(id);
      },
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
    box-shadow: 2px 4px 8px rgba(255, 255, 255, .7);
  }

  .projectInfo {
    padding: 10px;
    flex-direction: column;
  }

  .projectImage {
    width: 150px;
    height: 250px;
    margin: 20px;
    box-shadow: 2px 4px 8px rgba(255, 255, 255, .7);
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
    cursor: pointer;
  }

  .projectButton:hover{
    box-shadow: 1px 1px 4px rgba(0, 0, 0, .5);
  }

  .overFlow{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .projectTitle {
    font-size: 20pt;
  }

  .projectClient {
    font-size: 15pt;
  }

  .projectDisc {
    font-size: 12pt;
    height: 70px;
  }
</style>
