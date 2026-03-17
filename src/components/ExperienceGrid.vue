<template>
  <div class="grid">
    <ExperienceCard
      v-for="e in experiences"
      :key="e.title"
      :exp="e"
    />
  </div>
</template>

<script>
import ExperienceCard from "./ExperienceCard.vue";

export default {
  name: "ExperienceGrid",

  components: {
    ExperienceCard,
  },

  props: {
    experiences: {
      type: Array,
      required: true,
    },
  },
};
</script>