document.addEventListener("DOMContentLoaded", () => {
    // Year
    const yearEl = document.getElementById("y");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Viewer elements
    const viewer = document.getElementById("certificate-viewer");
    const viewerTitle = document.getElementById("viewer-title");
    const viewerStatus = document.getElementById("viewer-status");
    const placeholder = document.getElementById("viewer-placeholder");

    // Close UI
    const closeBtn = document.getElementById("close-viewer");

    // Track blob URLs to avoid memory leaks
    let currentBlobUrl = null;

    function showViewerUI() {
        if (placeholder) placeholder.style.display = "none";
        if (viewer) viewer.style.display = "block";
        if (closeBtn) closeBtn.style.display = "inline-block";
    }

    function hideViewerUI() {
        // Revoke old blob URL if any
        if (currentBlobUrl) {
            URL.revokeObjectURL(currentBlobUrl);
            currentBlobUrl = null;
        }

        if (viewer) {
            viewer.src = "about:blank";
            viewer.style.display = "none";
            document.getElementById("pdf-viewer").classList.add("disabled");  
        }

        if (placeholder) placeholder.style.display = "block";



        if (closeBtn) closeBtn.style.display = "none";

        if (viewerTitle) viewerTitle.textContent = "Certificate Viewer";
        if (viewerStatus) viewerStatus.textContent = "Select a certificate above to preview it here.";
    }

    // Hide viewer on first load
    hideViewerUI();

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            hideViewerUI();
        });
    }

    // Loads PDF into iframe.
    // - If running on http(s), try fetch->blob (prevents forced download behavior in some Firefox cases)
    // - If running on file://, fetch often fails -> fallback to direct iframe src
    async function loadPdf(pdfPath, titleText, filename) {
        if (!viewer) return;
        
        document.getElementById("pdf-viewer").classList.remove("disabled");

        const cleanTitle = (titleText || "").trim() || "Certificate Viewer";
        const cleanFilename =
            (filename || "").trim() ||
            `${cleanTitle.replace(/[\\/:*?"<>|]+/g, "").trim() || "certificate"}.pdf`;

        if (viewerTitle) viewerTitle.textContent = cleanTitle;

        // Always show UI when selecting something
        showViewerUI();

        // If local file mode, avoid fetch() NetworkError
        if (location.protocol === "file:") {
            if (viewerStatus) viewerStatus.textContent = "(Previewing PDF)";
            viewer.src = pdfPath;
            return;
        }

        // http(s): prefer blob rendering
        try {
            if (viewerStatus) viewerStatus.textContent = "(Loading PDF...)";

            const res = await fetch(pdfPath, { cache: "no-store" });
            if (!res.ok) throw new Error(`Failed to load PDF (HTTP ${res.status})`);

            const blob = await res.blob();

            // Cleanup previous blob URL
            if (currentBlobUrl) URL.revokeObjectURL(currentBlobUrl);
            currentBlobUrl = URL.createObjectURL(blob);

            viewer.src = currentBlobUrl;

            if (viewerStatus) viewerStatus.textContent = "(Previewing PDF)";
            if (pageRefreshed) {
                pageRefreshed = false
                document.getElementById("pdf-viewer").classList.remove("disabled");
            }
            viewer.scrollIntoView({ behavior: "smooth", block: "start" });
        } catch (err) {
            console.error(err);

            // Fallback: direct load
            if (viewerStatus) viewerStatus.textContent = "Could not load via fetch; using direct preview.";
            viewer.src = pdfPath;

            // Direct download link (filename may be ignored depending on headers)
            setDownloadTarget(pdfPath, cleanFilename);
        }
    }

    // Attach click handlers
    document.querySelectorAll(".cert-link").forEach((btn) => {
        // Skip disabled buttons
        if (btn.disabled) return;

        btn.addEventListener("click", () => {
            const pdfPath = btn.dataset.pdf;        // stored path
            const filename = btn.dataset.filename;  // desired download name

            if (!pdfPath) return;

            loadPdf(pdfPath, btn.textContent, filename);
        });
    });
});