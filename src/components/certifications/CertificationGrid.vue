<template>
  <div class="grid">
    <div
      v-for="group in groups"
      :key="group.id"
      class="card span6"
    >
      <!-- Group title — clickable if not disabled -->
      <button
        class="cert-section-link"
        :class="{ disabled: group.disabled }"
        :style="groupTitleStyle(group)"
        type="button"
        :disabled="group.disabled"
        @click="!group.disabled && openPdf(group)"
      >
        {{ group.title }}
      </button>

      <div class="meta">{{ group.meta }}</div>

      <!-- Progress bar -->
      <div
        class="cert-progress"
        :class="{ disabled: group.disabled }"
        :aria-label="group.title + ' progress'"
      >
        <div class="cert-progress-label">
          Progress: {{ group.progress.current }}/{{ group.progress.total }} completed
        </div>
        <div
          class="progress-track"
          role="progressbar"
          :aria-valuemin="0"
          :aria-valuemax="group.progress.total"
          :aria-valuenow="group.progress.current"
          :aria-valuetext="`${group.progress.current} out of ${group.progress.total} completed`"
        >
          <span
            class="progress-fill"
            :style="{ width: progressPercent(group) + '%' }"
          ></span>
        </div>
      </div>

      <!-- Individual cert links -->
      <ul>
        <li v-for="cert in group.certs" :key="cert.label">
          <a
            class="cert-link"
            :class="{ disabled: cert.disabled }"
            type="button"
            @click="!cert.disabled && openPdf(cert)"
          >
            {{ cert.label }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CertificationGrid",
  props: {
    groups: {
      type: Array,
      required: true,
    },
  },
  emits: ["open-pdf"],
  methods: {
    progressPercent(group) {
      if (!group.progress.total) return 0;
      return Math.round((group.progress.current / group.progress.total) * 100);
    },
    groupTitleStyle(group) {
      return {
        all: "unset",
        cursor: group.disabled ? "default" : "pointer",
        fontWeight: "700",
        color: "white",
        opacity: group.disabled ? "0.5" : "1",
      };
    },
    openPdf(item) {
      if (!item.pdf) return;
      this.$emit("open-pdf", {
        pdf: item.pdf,
        filename: item.filename,
        title: item.label || item.title,
      });
    },
  },
};
</script>