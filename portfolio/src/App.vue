<script setup>
import SocialsVue from './components/socials-vue.vue';
import jumpLink from './components/jump-link.vue';
import myAbout from './components/my-about.vue';
import myProjects from './components/my-projects.vue';
import { ref } from 'vue'

let showing = ref(false)


function doMe(id) {
  showing.value = !showing.value;
  console.log(showing)
}
</script>

<template>
   <header>
    <div class="wrapper">
      <div class="wrapper-inner">
        <img alt="Vue logo" class="logo" src="@/assets/matt-logo-personal-alpha.webp" width="367" height="138" />
        <p>Full-stack developer with JavaScript/Vue and PHP. I freelance for companies who want to make the world a better place.</p>
        <nav>
          <jump-link link="projects" text="Projects" />
          <jump-link link="about" text="About" />
          <jump-link link="contact" text="Contact" />
        </nav>
      </div>

      <SocialsVue />
    </div>
  </header>

  <main>
    <div v-if="showing" class="red">xxxxxxxxxxxxxxxxxxxx</div>
    <myProjects @show-proj="doMe"/>
    <myAbout />
    
  </main>
</template>

<style scoped>
.red {
  width:100%;
  height:200px;
  background:red;
}
</style>
