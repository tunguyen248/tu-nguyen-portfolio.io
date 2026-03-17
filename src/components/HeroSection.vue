<template>
  <div class="hero">
    <h1>{{ hero.title }}</h1>
    <p>{{ hero.description }}</p>

    <div class="cta">
      <a
        v-for="cta in hero.ctas"
        :key="cta.href"
        class="btn"
        :class="{ primary: !!cta.primary }"
        :href="cta.href"
        :target="cta.target || null"
        :rel="cta.rel || null"
      >
        {{ cta.label }}
      </a>
    </div>
  </div>
</template>

<script >
export default {
  props: {
    hero: Object
  },
};
</script>