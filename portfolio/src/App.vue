<script setup>
import SocialsVue from './components/socials-vue.vue';
import jumpLink from './components/jump-link.vue';
import myAbout from './components/my-about.vue';
import myProjects from './components/my-projects.vue';

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
    <myProjects />
    <myAbout />
    
  </main>
</template>

<style scoped>

</style>
