<template>
  <header>
    <div class="brand">{{ brand }}</div>
    <nav>
      <router-link
        v-for="item in navLinks"
        :key="item.href"
        :to="item.href"
      >
        {{ item.label }}
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "SiteHeader",
  props: {
    brand: String,
    navLinks: Array,
  },
};
</script>