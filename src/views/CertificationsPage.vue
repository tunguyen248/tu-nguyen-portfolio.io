<template>
  <section>
    <h2>Certifications</h2>

    <CertificationGrid
      :groups="certificationGroups"
      @open-pdf="handleOpenPdf"
    />

    <CertificateViewer
      :selectedPdf="selectedPdf"
      :selectedTitle="selectedTitle"
      @close="closeViewer"
    />
  </section>
</template>

<script>
import CertificationGrid from "../components/certifications/CertificationGrid.vue";
import CertificateViewer from "../components/certifications/CertificateViewer.vue";
import certificationGroups from "../data/certifications";

export default {
  name: "CertificationsPage",
  components: {
    CertificationGrid,
    CertificateViewer,
  },
  data() {
    return {
      certificationGroups,
      selectedPdf: "",
      selectedTitle: "",
    };
  },
  methods: {
    handleOpenPdf(payload) {
      this.selectedPdf = payload.pdf;
      this.selectedTitle = payload.title;
    },
    closeViewer() {
      this.selectedPdf = "";
      this.selectedTitle = "";
    },
  },
};
</script>