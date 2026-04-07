<template>
  <div class="card" :class="exp.spanClass">
    <div style="display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap;">
      <strong>{{ exp.title }}</strong>
    </div>

    <ul v-if="exp.bullets?.length">
      <li v-for="(b, i) in exp.bullets" :key="i">{{ b }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    exp: Object,  
  },
};

</script>