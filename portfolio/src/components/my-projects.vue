<template>
    <div id="projects">
        <div v-for="(item, index) in projects" :key="index" class="project-card project" @click="goToProject(item.id)">
            <div class="feat-image" :style="{ backgroundImage: 'url(' + item.main_pic.guid + ')' }" />
            <div class="texts">
                <h3>{{item.client}}</h3>
                <p>{{item.overview}}</p>
                
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
      props: ['single'],
      data() {
        return {
            name: 'myProjects',
            projects: null,
        }
      },
      mounted: function() {
        this.fetchProjects()
      },
      methods: {
        goToProject(projId) {
            //
        },
        fetchProjects: async function () {
        fetch("https://matt-backend.sh1.hidora.net/wp-json/wp/v2/projects/?per_page=8&order=asc")
            .then(response => response.json())
            .then(data => this.projects = data)
      },
    }
  }  
  </script>
  
  <style>
  .projects-box {
      display:flex;
      flex-wrap:wrap;
      justify-content:flex-start;
      gap:20px;
  }
  .project-card {
      flex:0 1 48%;
      width:48%;
      cursor:pointer;
  }
  .project-card .feat-image {
      width:100%;
      height:300px;
      background-size:cover;
      background-position:center;
      background-repeat:no-repeat;
  }
  .project-card .texts {
      background:#e2e2e2;
      padding:10px 20px;
      min-height:100px;
      padding-bottom:10px;
  }
  .project-card .texts p {
      margin:5px 0px;
  }
  
  </style>