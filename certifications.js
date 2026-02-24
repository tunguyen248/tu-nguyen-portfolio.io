document.addEventListener("DOMContentLoaded", () => {

    const viewer = document.getElementById("certificate-viewer");
    const viewerTitle = document.getElementById("viewer-title");
    const viewerStatus = document.getElementById("viewer-status");

    let currentBlobUrl = null;

    async function openPdfInViewer(pdfPath, titleText) {
        try {
            viewerStatus.textContent = "Loading PDF...";

            const res = await fetch(pdfPath, { cache: "no-store" });
            if (!res.ok) throw new Error("Failed to load PDF");

            const blob = await res.blob();

            if (currentBlobUrl) {
                URL.revokeObjectURL(currentBlobUrl);
            }

            currentBlobUrl = URL.createObjectURL(blob);

            viewer.src = currentBlobUrl;
            viewerTitle.textContent = titleText;
            console.log(currentBlobUrl);
            viewerStatus.textContent = "Previewing PDF in-page.";

            viewer.scrollIntoView({ behavior: "smooth", block: "start" });

        } catch (err) {
            console.error(err);
            viewerStatus.textContent = "Could not preview this PDF.";
        }
    }

    document.querySelectorAll(".cert-link").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();

            const pdfPath = btn.dataset.pdf;
            if (!pdfPath) return;

            openPdfInViewer(pdfPath, btn.textContent);
        });
    });

});