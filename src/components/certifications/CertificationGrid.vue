<template>
  <div class="grid">
    <CertificationCard
      v-for="group in groups"
      :key="group.title"
      :group="group"
      @open-pdf="$emit('open-pdf', $event)"
    />
  </div>
</template>

<script>
import CertificationCard from "./CertificationCard.vue";

export default {
  name: "CertificationGrid",
  components: {
    CertificationCard,
  },
  props: {
    groups: {
      type: Array,
      required: true,
    },
  },
  emits: ["open-pdf"],
};
</script>