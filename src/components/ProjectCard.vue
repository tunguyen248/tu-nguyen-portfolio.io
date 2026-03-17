<template>
  <div class="card" :class="project.spanClass">
    <div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap;">
      <strong>{{ project.title }}</strong>

      <span class="meta" v-if="project.repoUrl">
        <a :href="project.repoUrl" target="_blank" rel="noreferrer">repo</a>
      </span>
    </div>

    <div class="meta" v-if="project.meta">{{ project.meta }}</div>

    <ul v-if="project.bullets?.length">
      <li v-for="(b, i) in project.bullets" :key="i">{{ b }}</li>
    </ul>

    <div class="meta" v-if="project.note">{{ project.note }}</div>

    <TagsSection :tags="project.tags" />
  </div>
</template>

<script>
import TagsSection from "./TagsSection.vue";
export default {
  name: "ProjectCard",

  components:{
    TagsSection,
  },
  props: {
    project: Object
  },
};

</script>