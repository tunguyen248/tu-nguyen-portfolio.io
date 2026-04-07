<template>
  <div class="grid">
    <ProjectCard v-for="p in projects" :key="p.title" :project="p" />
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
export default {
  name:"ProjectGrid",
  components:{
    ProjectCard
  },
  props: {
    projects: Array,
  },
};
</script>