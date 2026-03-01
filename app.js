const projects = [
  {
    title: "Transaction Processing API + Immutable Ledger",
    repo: "https://github.com/tunguyen248/ledger-api",
    meta: "REST API • PostgreSQL • Idempotency • Transactional writes • Integration tests",
    points: [
      "Designed and implemented a REST API for processing state-changing operations backed by an immutable ledger for auditability.",
      "Ensured correctness under retries by using idempotency keys and database constraints to prevent duplicate side effects.",
      "Modeled transactional workflows in PostgreSQL with schema migrations and end-to-end integration tests.",
      "Built an asynchronous processing pipeline using an outbox pattern and background workers.",
    ],
    tags: ["Correctness", "Transactions", "Reliability"],
  },
  {
    title: "Fraud / Risk Scoring Service",
    repo: "https://github.com/tunguyen248/risk-service",
    meta: "Feature pipeline • Explainable scoring • Offline evaluation • Threshold tuning",
    points: [
      "Built a service that ingests event data, extracts features, and produces a normalized risk score for downstream decision-making.",
      "Implemented both rule-based logic and a lightweight statistical model to compare interpretability and predictive behavior.",
      "Evaluated model performance using offline metrics and documented precision/recall tradeoffs for threshold selection.",
      "Designed the system to support asynchronous ingestion and batch or near-real-time scoring workflows.",
    ],
    tags: ["Data", "Risk", "APIs"],
  },
  {
    title: "PDF Spaced Repetition (Capstone)",
    repo: "https://github.com/tunguyen248/pdf-spaced-repetition-main",
    meta: "React • PDF.js • Spaced repetition • Local persistence",
    points: [
      "Built a study workflow for reviewing PDF content with spaced repetition mechanics.",
      "Integrated rendering and annotation tools to support practical learning loops.",
      "Designed reusable frontend components with predictable state updates.",
    ],
    tags: ["Frontend", "UX", "Data Modeling"],
  },
  {
    title: "Air-to-Ground Search (Senior Design)",
    repo: "https://github.com/tunguyen248/Air-to-ground-search",
    meta: "C++ • Pathfinding • Python integration • Visualization",
    points: [
      "Implemented a grid-based path planning system using heuristic search algorithms.",
      "Integrated a C++ core engine with Python for simulation and data generation.",
      "Built an interface to visualize search behavior and algorithm performance.",
      "Analyzed tradeoffs between runtime, memory usage, and path optimality.",
    ],
    tags: ["Algorithms", "Systems", "Integration"],
  },
];

const experiences = [
  {
    title: "Ameren Digital Co-op - Software Engineering Intern",
    points: [
      "Contributed to Switching Manager, a .NET-based electrical grid management system supporting reliable power distribution.",
      "Developed UI components and optimized SQL queries to improve responsiveness and operator workflows.",
      "Collaborated with senior engineers to design, implement, and test features following internal coding standards.",
      "Automated recurring data processing tasks using Excel and AutoIt, reducing manual overhead.",
    ],
  },
  {
    title: "Capstone I - Team Lead",
    points: [
      "Led a team of three in developing a spaced-repetition PDF viewer for annotating technical documents.",
      "Designed and implemented a React-based web application with an interactive PDF rendering pipeline.",
      "Defined a structured system model to improve maintainability and usability.",
    ],
  },
  {
    title: "Capstone II - Software Engineer",
    points: [
      "Designed and implemented a search algorithm for an air-to-ground system optimized for efficiency and coverage.",
      "Developed an interactive GUI to visualize flight paths and search regions in two dimensions.",
      "Collaborated with a team of three to integrate heuristics, obstacle detection, and route optimization.",
    ],
  },
];

const certificationPrograms = [
  {
    title: "Google AI Essentials (Coursera)",
    certificateCount: "5 certificates",
    progressLabel: "Progress: 5/5 completed",
    progressCurrent: 5,
    progressMax: 5,
    previewPdf: "certifications/Google AI Essentials Certification.pdf",
    previewFilename: "Google AI Essentials Certification.pdf",
    certificates: [
      { title: "Introduction to AI", pdf: "certifications/Introduction to AI Certification.pdf" },
      { title: "Maximize Productivity With AI Tools", pdf: "certifications/Maximize Productivity With AI Tools Certification.pdf" },
      { title: "Discover the Art of Prompting", pdf: "certifications/Discover the Art of Prompting Certification.pdf" },
      { title: "Use AI Responsibly", pdf: "certifications/Use AI Responsibly Certification.pdf" },
      { title: "Stay Ahead of the AI Curve", pdf: "certifications/Stay Ahead of the AI Curve Certification.pdf" },
    ],
  },
  {
    title: "Generative AI for Data Engineers (Coursera)",
    certificateCount: "3 certificates",
    progressLabel: "Progress: 3/3 completed",
    progressCurrent: 3,
    progressMax: 3,
    previewPdf: "certifications/Generative AI for Data Engineers Certification.pdf",
    previewFilename: "Generative AI for Data Engineers Certification.pdf",
    certificates: [
      { title: "Generative AI: Introduction and Applications", pdf: "certifications/Generative AI - Introduction and Applications Certification.pdf" },
      { title: "Generative AI: Prompt Engineering Basics", pdf: "certifications/Generative AI - Prompt Engineering Basics Certification.pdf" },
      { title: "Generative AI: Advanced Prompt Engineering", pdf: "certifications/Generative AI - Advance Prompt Engineering Certification.pdf" },
    ],
  },
];

const HomeView = {
  data: () => ({ projects, experiences }),
  template: `
    <div>
      <section class="hero">
        <h1>Software Engineer — backend & full-stack</h1>
        <p>
          Software engineer focused on building reliable backend and full-stack systems. I design APIs, model data,
          and build services that behave correctly under retries, partial failures, and real-world production constraints.
        </p>
        <div class="cta">
          <a class="btn primary" href="https://github.com/tunguyen248" target="_blank" rel="noreferrer">GitHub</a>
          <a class="btn" href="https://www.linkedin.com/in/tu-nguyen-34969924b/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a class="btn" href="./Tu_Nguyen_Resume.pdf">Resume (PDF)</a>
        </div>
      </section>

      <section>
        <h2>Featured Projects</h2>
        <div class="grid">
          <article class="card span6" v-for="project in projects" :key="project.title">
            <div class="card-title-row">
              <strong>{{ project.title }}</strong>
              <span class="meta"><a :href="project.repo" target="_blank" rel="noreferrer">repo</a></span>
            </div>
            <div class="meta">{{ project.meta }}</div>
            <ul>
              <li v-for="point in project.points" :key="point">{{ point }}</li>
            </ul>
            <div class="tags">
              <span class="tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
          </article>
        </div>
      </section>

      <section>
        <h2>Experiences</h2>
        <div class="grid">
          <article class="card span6" v-for="experience in experiences" :key="experience.title">
            <strong>{{ experience.title }}</strong>
            <ul>
              <li v-for="point in experience.points" :key="point">{{ point }}</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  `,
};

const SkillsView = {
  template: `
    <section>
      <h2>Skills</h2>
      <div class="grid">
        <div class="card span4"><strong>Languages</strong>
          <div class="meta">C++, TypeScript, Python, SQL, Java, C#, Visual Basic</div>
        </div>
        <div class="card span4"><strong>Backend</strong>
          <div class="meta">REST, Postgres, caching, queues, testing</div>
        </div>
        <div class="card span4"><strong>Quality</strong>
          <div class="meta">CI, integration tests, profiling, observability</div>
        </div>
      </div>
    </section>
  `,
};

const DesignView = {
  template: `
    <section>
      <h2>System Design Snapshot</h2>
      <div class="card">
        <div class="split">
          <div>
            <strong>Reliable State-Changing Service Architecture</strong>
            <ul>
              <li>API layer validates requests and persists state changes in a transactional database.</li>
              <li>Idempotency keys prevent duplicate side effects during retries or network failures.</li>
              <li>Asynchronous workers process events generated by the primary service.</li>
              <li>Observability includes structured logging, request correlation IDs, and latency/error metrics.</li>
            </ul>
          </div>
          <div>
            <strong>What I emphasize</strong>
            <ul>
              <li>Correctness under retries</li>
              <li>Data integrity and audit trails</li>
              <li>Clear failure modes</li>
              <li>Security basics (auth, secrets, least privilege)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
};

const CertificationsView = {
  data() {
    return {
      programs: certificationPrograms,
      selectedPdf: "",
      selectedTitle: "Certificate Viewer",
      selectedStatus: "Select a certificate above to preview it here.",
    };
  },
  methods: {
    selectCertificate(pdf, title) {
      if (!pdf) {
        return;
      }

      this.selectedPdf = pdf;
      this.selectedTitle = title || "Certificate Viewer";
      this.selectedStatus = "Previewing PDF";
    },
    closeViewer() {
      this.selectedPdf = "";
      this.selectedTitle = "Certificate Viewer";
      this.selectedStatus = "Select a certificate above to preview it here.";
    },
    progressWidth(current, max) {
      if (!max) {
        return "0%";
      }

      const pct = Math.min(100, Math.round((current / max) * 100));
      return `${pct}%`;
    },
  },
  template: `
    <section>
      <h2>Certifications</h2>

      <div class="grid">
        <article class="card span6" v-for="program in programs" :key="program.title">
          <button
            class="cert-section-link"
            type="button"
            style="all:unset; cursor:pointer; font-weight:700; color:white"
            @click="selectCertificate(program.previewPdf, program.title)"
          >
            {{ program.title }}
          </button>

          <div class="meta">{{ program.certificateCount }}</div>

          <div class="cert-progress">
            <div class="cert-progress-label">{{ program.progressLabel }}</div>
            <div class="progress-track">
              <span class="progress-fill" :style="{ width: progressWidth(program.progressCurrent, program.progressMax) }"></span>
            </div>
          </div>

          <ul>
            <li v-for="cert in program.certificates" :key="cert.title">
              <a
                class="cert-link"
                role="button"
                @click.prevent="selectCertificate(cert.pdf, cert.title)"
                href="#"
              >
                {{ cert.title }}
              </a>
            </li>
          </ul>
        </article>

        <article class="card span6 pdf-viewer-card" id="pdf-viewer" :class="{ 'pdf-viewer-disabled': !selectedPdf }">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap;">
            <div>
              <strong id="viewer-title">{{ selectedTitle }}</strong>
              <div class="meta" id="viewer-status">{{ selectedStatus }}</div>
            </div>
            <div id="close-viewer" class="close-container" v-show="selectedPdf" @click="closeViewer">
              <div class="leftright"></div>
              <div class="rightleft"></div>
              <label class="close">Close</label>
            </div>
          </div>

          <div class="pdf-viewer-body">
            <div class="meta" style="padding:12px 0;" v-if="!selectedPdf">Select a certificate above to preview it here.</div>
            <iframe
              v-else
              id="certificate-viewer"
              title="Certification PDF viewer"
              class="pdf-viewer"
              :src="selectedPdf"
            ></iframe>
          </div>
        </article>
      </div>
    </section>
  `,
};

const ContactView = {
  template: `
    <section>
      <h2>Contact</h2>
      <div class="card">
        <div class="meta">Email: tuthanhnguyen248@gmail.com • Location: Ofallon, MO • Open to SWE roles</div>
      </div>
    </section>
  `,
};

const routes = [
  { path: "/", component: HomeView },
  { path: "/skills", component: SkillsView },
  { path: "/design", component: DesignView },
  { path: "/certifications", component: CertificationsView },
  { path: "/contact", component: ContactView },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({
  data: () => ({ year: new Date().getFullYear() }),
  template: `
    <div class="container">
      <header>
        <div class="brand">Tu Nguyen</div>
        <nav>
          <RouterLink to="/" class="nav-link">Home</RouterLink>
          <RouterLink to="/skills" class="nav-link">Skills</RouterLink>
          <RouterLink to="/design" class="nav-link">System Design</RouterLink>
          <RouterLink to="/certifications" class="nav-link">Certifications</RouterLink>
          <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
        </nav>
      </header>

      <RouterView />

      <div class="hr"></div>
      <footer>© {{ year }} Tu Nguyen. Built with Vue.js.</footer>
    </div>
  `,
});

app.use(router);
app.mount("#app");
