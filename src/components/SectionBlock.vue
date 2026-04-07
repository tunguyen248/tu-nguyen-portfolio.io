<template>
  <section :id="id">
    <h2>{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    id: String,
    title: String,  
  },
};

</script>