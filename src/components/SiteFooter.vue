<template>
  <div>
    <div class="hr"></div>
    <footer>© {{ year }} {{ brand }}.</footer>
  </div>
</template>

<script>
export default {
  props: {
    brand: String,
    year: Number  
  },
};

</script>