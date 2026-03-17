<template>
  <div class="card span12 pdf-viewer-card">
    <div style="display:flex; justify-content:space-between; align-items:center; gap:12px;">
      <div>
        <strong>{{ selectedTitle || "Certificate Viewer" }}</strong>
        <span class="meta">
          {{
            selectedPdf
              ? "Previewing selected certificate."
              : "Select a certificate above to preview it here."
          }}
        </span>
      </div>

      <button v-if="selectedPdf" type="button" @click="$emit('close')">
        Close
      </button>
    </div>

    <div class="pdf-viewer-body">
      <div v-if="!selectedPdf" class="meta" style="padding:12px 0;">
        Select a certificate above to preview it here.
      </div>

      <iframe
        v-else
        :src="selectedPdf"
        :title="selectedTitle || 'Certification PDF viewer'"
        class="pdf-viewer"
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
};
</script>