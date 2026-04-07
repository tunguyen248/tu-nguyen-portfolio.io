<template>
  <div class="container">
    <SiteHeader :brand="brand" :navLinks="navLinks" />

    <router-view />

    <SiteFooter :brand="brand" :year="year" />
  </div>
</template>

<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import portfolio from "./data/portfolio";

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteFooter,
  },
  data() {
    return {
      brand: portfolio.brand,
      navLinks: portfolio.navLinks,
    };
  },
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>