<script setup>
import SocialsVue from './components/socials-vue.vue';
import jumpLink from './components/jump-link.vue';
import myAbout from './components/my-about.vue';
import myProjects from './components/my-projects.vue';
import theShelf from './components/the-shelf.vue';
import mySkills from './components/my-skills.vue';
import { ref } from 'vue'

let showing = ref(false)
let dataProj = ref([])

function noShow() {
  showing.value = false
}

function doMe(id, projObj) {
  showing.value = id
  dataProj = projObj
}

function visibilityChanged (isVisible, entry, el) {
  console.log("isVis: " + el)
}

</script>

<template>
  <div class="page">
    <header @click="noShow()">
      <div class="wrapper">
        <div class="wrapper-inner">
          <img alt="Vue logo" class="logo" src="@/assets/matt-logo-personal-alpha.webp" width="367" height="138" />
          <p>Full-stack developer with JavaScript/Vue and PHP. I freelance for companies who want to make the world a better place.</p>
          <nav>
            <jump-link link="projects" text="Projects" />
            <jump-link link="about" text="About" />
            <jump-link link="skills" text="Skills" />
          </nav>
        </div>

        <SocialsVue />
      </div>
    </header>

    <main>
        <theShelf v-if="showing" :project="dataProj" @goBack="doMe"/>
        <myProjects v-show="!showing" @show-proj="doMe" v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, 'projects')" />
        <myAbout v-show="!showing" v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, 'about')" />
        <mySkills v-show="!showing" v-observe-visibility="(isVisible, entry) => visibilityChanged(isVisible, entry, 'skills')" />
    </main>
  </div>
</template>

<style scoped>

</style>
