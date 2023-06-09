<template>
    <div class="page-section">
        <span @click="$emit('goBack', null)" class="back-out">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400 100 256l144-144M120 256h292"/></svg>
            <span>Return to all projects</span>
        </span>

        <div class="selected-project" v-if="project.gallery">
            <Splide :options="{ rewind: true }" aria-label="Images from the project">
                <SplideSlide><img :src="project.main_pic.guid" class="project-pic"/></SplideSlide>
                <SplideSlide v-for="(item, index) in project.gallery" :key="index">
                    <img :src="item.guid" class="project-pic"/>
                </SplideSlide>            
            </Splide>
        </div>
        <h2 v-html="project.client"></h2>
        <span v-if="project.link" class="project-link">
            <a :href="project.link" target="_blank">
                {{ project.link }}
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48M336 64h112v112M224 288 440 72"/></svg>
            </a>
        </span>
        <p style="margin-top:30px;" v-html="project.project_description"></p>


        <div class="devicons">
            <span v-for="(item, index) in project.dev_icons" :key="index">
                <i :class="item.post_title" :title="item.desc"></i>
                <span class="balloon">{{ item.desc }}</span>
            </span>
        </div>

    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/sea-green';


export default {
    props: ['project'],
    emits: ['go-back'],
    components: { Splide, SplideSlide },
    data() {
      return {
        //
      }
    },
    methods: {
    //
    }
}
</script>

<style>
.splide {
    margin-left:-20px !important;
    padding-left:0 !important;
    padding-right:0 !important;
}
.back-out svg {
    position:relative;
    height:2rem;
    margin-bottom:-6px;
}
.back-out span {
    font-size: 18px;
    font-weight: 600;
    position: relative;
    top: -4px;
    left: 10px;
}
.back-out * {
    cursor:pointer;
    -webkit-transition:all 0.2s ease-in-out;
    transition:all 0.2s ease-in-out;
}
.back-out:hover svg {
    transform:translateX(-10px);
}
.back-out:hover * {
    color:var(--matt-green);
    -webkit-transition:all 0.2s ease-in-out;
    transition:all 0.2s ease-in-out;
}
.splide__slide {
    text-align:center;
}
.splide__slide img {
    display:inline-block;
    max-width:85%;
}
@supports(object-fit:contain) {
    .splide__slide img {
        object-fit:contain;
        height:350px;
    }
}
.project-link {
    position:relative;
    margin-bottom:40px !important;
}
.project-link a {
    color:var(--matt-green);
    font-size:16px;
    font-weight:600;
}
.project-link .ionicon {
    position:relative;
    width:1.3rem;
    stroke:var(--matt-green);
    bottom:-5px;
    right:-10px;
}
.devicons {
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap:20px;
    margin:40px 0;
}
.devicons span {
    display:flex;
    position:relative;
    align-items:center;
    justify-content:center;
    overflow:hidden;
    width:70px;
    height:70px;
    background:var(--matt-green);
    cursor:cell;
}
.devicons span i {
    position:relative;
    top:0;
    font-size:50px !important;
    z-index:2;
    -webkit-transition:all 0.3s ease-in-out;
    transition:all 0.3s ease-in-out;
}
.devicons > span .balloon {
    opacity:0;
    position:absolute;
    bottom:0;
    font-size:12px;
    font-weight:600;
    padding:4px;
    background:rgb(0 15 21 / 80%);
    z-index:0;
    -webkit-transition:all 0.4s ease-in-out;
    transition:all 0.4s ease-in-out;
    will-change: transition;
}
.devicons > span:hover i {
    top:-45px;
    -webkit-transition:all 0.2s ease-in-out;
    transition:all 0.2s ease-in-out;
}
.devicons > span:hover .balloon {
    opacity:1;
    -webkit-transition:all 0.3s ease-in-out;
    transition:all 0.3s ease-in-out;
}
</style>
