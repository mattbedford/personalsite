<template>
    <div class="skills page-section" id="skills">
        <h1>My skills</h1>
        <p>A large part of my job is "skills updating" so I'm always taking courses and trying out new projects with different technologies.</p>
        <p>That said, my <strong>main skills now are in PHP, Vue and vanilla JavaScript.</strong> I'm extremely proficient in WordPress and related software
            and in the near future I am focused on building my knowledge of <strong>React</strong>, <strong>Node/NoSQL Databases</strong> and PHP 
            platforms such as <strong>Laravel/Symphony</strong>.</p>
        <p>I'm a good team player; am extremely direct and transparent and am personally very, very driven by themes relating to sustainability.</p>
        <div class="skills-wrap">
            <span v-for="(item, index) in skills" :key="index">
                <i :class="item.title.rendered" :title="item.desc"></i>
                <span class="balloon">{{ item.desc }}</span>
            </span>   
        </div>
    </div>
</template>

<script>
export default {

data() {
    return {
        skills: null,
    }
    },
    mounted: function() {
    this.fetchSkills()
    },
    methods: {
    fetchSkills: async function () {
    fetch("https://matt-backend.sh1.hidora.net/wp-json/wp/v2/dev_icon/?per_page=30&order=asc")
        .then(response => response.json())
        .then(data => this.skills = data)
    },
}


}
</script>

<style scoped>
#skills {
    padding-left:40px;
    padding-right:40px;
    margin-top:50px;
    padding-bottom:200px;
}
.skills-wrap {
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap:20px;
    margin:40px 0;

}
.skills-wrap span {
    display:flex;
    position:relative;
    align-items:center;
    justify-content:center;
    overflow:hidden;
    width:100px;
    height:100px;
    background:var(--matt-green);
    cursor:cell;
}
.skills-wrap span i {
    position:relative;
    top:0;
    font-size:50px !important;
    z-index:2;
    -webkit-transition:all 0.3s ease-in-out;
    transition:all 0.3s ease-in-out;
}
.skills-wrap > span .balloon {
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
.skills-wrap > span:hover i {
    top:-45px;
    -webkit-transition:all 0.2s ease-in-out;
    transition:all 0.2s ease-in-out;
}
.skills-wrap > span:hover .balloon {
    opacity:1;
    -webkit-transition:all 0.3s ease-in-out;
    transition:all 0.3s ease-in-out;
}
</style>