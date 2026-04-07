<template>
  <div class="grid">
    <div v-for="s in skills" :key="s.title" class="card" :class="s.spanClass">
      <strong>{{ s.title }}</strong>
      <div class="meta">{{ s.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skills: Array,
  },
};

</script>