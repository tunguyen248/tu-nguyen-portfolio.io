<template>
  <div class="card span6">
    <button
      class="cert-section-link"
      :class="{ disabled: group.disabled }"
      type="button"
      @click="openGroupPdf"
      :disabled="group.disabled"
    >
      {{ group.title }}
    </button>

    <div class="meta">{{ group.meta }}</div>

    <div class="cert-progress" :class="{ disabled: group.disabled }">
      <div class="cert-progress-label">
        Progress: {{ group.completed }}/{{ group.total }} completed
      </div>

      <div
        class="progress-track"
        role="progressbar"
        :aria-valuemin="0"
        :aria-valuemax="group.total"
        :aria-valuenow="group.completed"
      >
        <span class="progress-fill" :style="{ width: progressWidth }"></span>
      </div>
    </div>

    <ul>
      <li v-for="item in group.items" :key="item.title">
        <button
          class="cert-link"
          :class="{ disabled: item.disabled }"
          type="button"
          @click="openItemPdf(item)"
          :disabled="item.disabled"
        >
          {{ item.title }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CertificationCard",
  props: {
    group: {
      type: Object,
      required: true,
    },
  },
  emits: ["open-pdf"],
  computed: {
    progressWidth() {
      if (!this.group.total) return "0%";
      return `${(this.group.completed / this.group.total) * 100}%`;
    },
  },
  methods: {
    openGroupPdf() {
      if (this.group.disabled || !this.group.pdf) return;
      this.$emit("open-pdf", {
        title: this.group.title,
        pdf: this.group.pdf,
        filename: this.group.filename,
      });
    },
    openItemPdf(item) {
      if (item.disabled || !item.pdf) return;
      this.$emit("open-pdf", {
        title: item.title,
        pdf: item.pdf,
        filename: item.filename,
      });
    },
  },
};
</script>