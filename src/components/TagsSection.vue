<template>
  <div class="tags-section" v-if="tags.length">
    <span v-for="t in tags" :key="t" class="tag">{{ t }}</span>
  </div>
</template>

<script >
export default {
  props: {
    tags: Array,  
  },
};

</script>