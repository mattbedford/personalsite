<template>
  <a :href="`/#${link}`" :class="isActive">
    <span class="text">{{ text }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="m268 112 144 144-144 144m124-144H100"/></svg>
  </a>
</template>

<script>
export default {
props: ['link', 'text'],

}
</script>

<style scoped>
* {
  color:var(--matt-green);
}
a {
  display:flex;
  align-items:center;
  position:relative;
  overflow:hidden;
}
a .text {
  position:relative;
  z-index:2;
  left:0;
  -webkit-transition:left 0.2s ease-in-out;
  transition:left 0.2s ease-in-out;
}
a svg {
  position:absolute;
  width:25px;
  left:-50px;
  opacity:1;
  z-index:1;
  -webkit-transition:all 0.4s ease-in-out;
  transition:all 0.4s ease-in-out;
}
a:hover *,
a.activated * {
  color:var(--matt-light-2) !important;
}
a:hover svg,
a.activated svg {
  left:10px;
  -webkit-transition:all 0.4s ease-in-out;
  transition:all 0.4s ease-in-out;
}
a:hover .text,
a.activated .text {
  left:45px;
  -webkit-transition:all 0.2s ease-in-out;
  transition:all 0.2s ease-in-out;
}

</style>