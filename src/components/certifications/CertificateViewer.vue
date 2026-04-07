<template>
  <div
    id="pdf-viewer"
    class="card span12 pdf-viewer-card"
    :class="{ 'pdf-viewer-disabled': !selectedPdf }"
  >
    <div
      class="pdf-viewer-header"
      style="display:flex; justify-content:space-between; align-items:center; gap:12px;"
    >
      <div>
        <strong id="viewer-title">{{ viewerTitle }}</strong>
        <span class="meta" id="viewer-status">{{ viewerStatus }}</span>
      </div>

      <div style="display:flex; gap:8px; align-items:center;">
        <div
          v-if="selectedPdf"
          id="close-viewer"
          class="close-container"
          @click="$emit('close')"
        >
          <div class="leftright"></div>
          <div class="rightleft"></div>
          <label class="close">Close</label>
        </div>
      </div>
    </div>

    <!-- Viewer body -->
    <div class="pdf-viewer-body">
      <div
        v-if="!selectedPdf"
        id="viewer-placeholder"
        class="meta"
        style="padding:12px 0;"
      >
        Select a certificate above to preview it here.
      </div>

      <!--
        PDFs are served from public/certifications/.
        Setting src directly is the most reliable approach for
        locally-served files — no fetch/blob needed.
      -->
      <iframe
        v-if="selectedPdf"
        id="certificate-viewer"
        ref="viewerFrame"
        title="Certification PDF viewer"
        class="pdf-viewer"
        :src="selectedPdf"
        @load="onIframeLoad"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "CertificateViewer",
  props: {
    selectedPdf: {
      type: String,
      default: "",
    },
    selectedTitle: {
      type: String,
      default: "",
    },
  },
  emits: ["close"],
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    viewerTitle() {
      return this.selectedTitle || "Certificate Viewer";
    },
    viewerStatus() {
      if (!this.selectedPdf) return "Select a certificate above to preview it here.";
      return this.loaded ? "(Previewing PDF)" : "(Loading PDF...)";
    },
  },
  watch: {
    selectedPdf() {
      // Reset loaded state whenever a new PDF is selected
      this.loaded = false;
      this.$nextTick(() => {
        this.$refs.viewerFrame?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    },
  },
  methods: {
    onIframeLoad() {
      this.loaded = true;
    },
  },
};
</script>