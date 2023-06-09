<template>
    <div id="projects" class="page-section">
        <div v-for="(item, index) in projects" :key="index" class="project-card project" @click="$emit('showProj', item.id, item)">
            <div class="feat-image" :style="{ backgroundImage: 'url(' + item.main_pic.guid + ')' }" />
            <div class="texts">
                <h3>
                    {{item.client}}
                    <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m268 112 144 144-144 144m124-144H100"/></svg>
                </h3>
                <p>{{item.overview}}</p>
                
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
      props: ['single'],
      emits: ['show-proj', 'showProj'],
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
        fetchProjects: async function () {
        fetch("https://matt-backend.sh1.hidora.net/wp-json/wp/v2/projects/?per_page=8&order=asc")
            .then(response => response.json())
            .then(data => this.projects = data)
      },
    }
  }  
  </script>
  
  <style>
  #projects {
    width:100%;
    display:flex;
    flex-direction:column;
  }
  #projects svg {
    position:relative;
    height:1.5rem;
    margin-bottom:-6px;
  }
  .project-card {
      display:flex;
      flex:0 1 90%;
      cursor:pointer;
      justify-content:flex-start;
  }
  .project-card .feat-image {
      flex:0 1 23%;
      height:120px;
      background-size:cover;
      background-position:center;
      background-repeat:no-repeat;
  }
  .project-card .texts {
      flex:0 1 75%;
      padding: 0 10px 20px 40px;
      min-height:100px;
      padding-bottom:10px;
  }
  .project-card .texts p {
      margin:5px 0px;
  }
  .project-card {
    padding:20px 40px;
    border-radius:5px;
    -webkit-transition:all 0.2s ease-in-out;
    transition:all 0.2s ease-in-out;
    will-change:transform;
}

.project-card:hover {
    background:rgb(0 15 21 / 41%);
    transform:scale(1.02);
    -webkit-transition:all 0.2s ease-in-out;
    transition:all 0.2s ease-in-out;
}
.project-card svg {
    -webkit-transition:all 0.2s ease-in-out;
    transition:all 0.2s ease-in-out;
}
.project-card * {
    -webkit-transition:all 0.2s ease-in-out;
    transition:all 0.2s ease-in-out;
}
.project-card:hover svg {
    margin-left:10px;
    -webkit-transition:all 0.2s ease-in-out;
    transition:all 0.2s ease-in-out;
}
.project-card:hover * {
    color:var(--matt-green);
    -webkit-transition:all 0.2s ease-in-out;
    transition:all 0.2s ease-in-out;
}

  </style>