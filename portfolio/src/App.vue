<script setup>
import SocialsVue from './components/socials-vue.vue';
import jumpLink from './components/jump-link.vue';
import myAbout from './components/my-about.vue';
import myProjects from './components/my-projects.vue';
import theShelf from './components/the-shelf.vue';
import mySkills from './components/my-skills.vue';
import { ref, onMounted } from 'vue'

let showing = ref(false)
let dataProj = ref([])

onMounted(() => {
  projectsLink('projects', "")
})

function noShow() {
  showing.value = false
}

function doMe(id, projObj) {
  showing.value = id
  dataProj = projObj
}

function projectsLink(a, b) {
  if(a) {
    document.querySelector('.about-link').classList.remove("activated")
    document.querySelector('.skills-link').classList.remove("activated")
    document.querySelector('.projects-link').classList.add("activated")
  } else {
    document.querySelector('.projects-link').classList.remove("activated")
  }
}

function aboutLink(a, b) {
  if(a) {
    document.querySelector('.skills-link').classList.remove("activated")
    document.querySelector('.projects-link').classList.remove("activated")
    document.querySelector('.about-link').classList.add("activated")
  } else {
    document.querySelector('.about-link').classList.remove("activated")
  }
}

function skillsLink(a, b) {
  if(a) {
    document.querySelector('.projects-link').classList.remove("activated")
    document.querySelector('.about-link').classList.remove("activated")
    document.querySelector('.skills-link').classList.add("activated")
  } else {
    document.querySelector('.skills-link').classList.remove("activated")
  }
}


</script>

<template>
  <div class="page">
    <header @click="noShow()">
      <div class="wrapper">
        <div class="wrapper-inner">
          <img alt="Matt Bedford - Full Stack Developer" class="logo" src="@/assets/matt-logo-personal-alpha.webp" width="367" height="138" />
          <p>Full-stack developer with JavaScript/Vue and PHP. I freelance for companies who want to make the world a better place.</p>
          <nav>
            <jump-link ref="projects" link="projects" text="Projects" class="lz projects-link" />
            <jump-link ref="about" link="about" text="About" class="lz about-link" />
            <jump-link ref="skills" link="skills" text="Skills" class="lz skills-link" />
          </nav>
        </div>

        <SocialsVue />
      </div>
    </header>

    <main>
        <theShelf v-if="showing" :project="dataProj" @goBack="doMe" v-observe-visibility="{
            callback: projectsLink,
            intersection: {
              threshold: 0.0,
            },
          }" />
        <myProjects v-show="!showing" @show-proj="doMe" v-observe-visibility="{
            callback: projectsLink,
            intersection: {
              threshold: 0.3,
            },
          }" />
        <myAbout v-show="!showing" v-observe-visibility="aboutLink" />
        <mySkills v-show="!showing" v-observe-visibility="{
            callback: skillsLink,
            intersection: {
              threshold: 0.3,
            },
          }" />
    </main>
  </div>
</template>

<style scoped>

</style>
