<template>
    <div class="skills page-section" id="skills">
        <span v-for="(item, index) in skills" :key="index">
            <i :class="item.title.rendered" :title="item.desc"></i>
            <span class="balloon">{{ item.desc }}</span>
        </span>   
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
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap:20px;
    margin:40px 0;
    padding-left:40px;
    padding-right:40px;
}
#skills span {
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
#skills span i {
    position:relative;
    top:0;
    font-size:50px !important;
    z-index:2;
    -webkit-transition:all 0.3s ease-in-out;
    transition:all 0.3s ease-in-out;
}
#skills > span .balloon {
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
#skills > span:hover i {
    top:-45px;
    -webkit-transition:all 0.2s ease-in-out;
    transition:all 0.2s ease-in-out;
}
#skills > span:hover .balloon {
    opacity:1;
    -webkit-transition:all 0.3s ease-in-out;
    transition:all 0.3s ease-in-out;
}
</style>