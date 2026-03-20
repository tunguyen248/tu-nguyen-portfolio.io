export const portfolio = {
  brand: "Tu Nguyen",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Certifications", href: "/certifications" },
  ],

  hero: {
    title: "Software Engineer — backend & full-stack",
    description:
      "Software engineer focused on building reliable backend and full-stack systems. I design APIs, model data, and build services that behave correctly under retries, partial failures, and real-world production constraints.",
    ctas: [
      {
        label: "GitHub",
        href: "https://github.com/tunguyen248",
        target: "_blank",
        rel: "noreferrer",
        primary: true,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/tu-nguyen-34969924b/",
        target: "_blank",
        rel: "noreferrer",
        primary: false,
      },
      {
        label: "Resume (PDF)",
        href: "./Tu_Nguyen_Resume.pdf",
        primary: false,
      },
    ],
  },

  featuredProjects: [
    {
      title: "Transaction Processing API + Immutable Ledger",
      repoUrl: "https://github.com/tunguyen248/ledger-api",
      meta: "REST API • PostgreSQL • Idempotency • Transactional writes • Integration tests",
      bullets: [
        "Designed and implemented a REST API for processing state-changing operations backed by an immutable ledger for auditability.",
        "Ensured correctness under retries by using idempotency keys and database constraints to prevent duplicate side effects.",
        "Modeled transactional workflows in PostgreSQL with schema migrations and end-to-end integration tests.",
        "Built an asynchronous processing pipeline using an outbox pattern and background workers.",
        "Containerized the service with Docker Compose to support reproducible local development and testing.",
      ],
      note: "Simulates a production-style financial transaction system with strict correctness and audit guarantees.",
      tags: ["Correctness", "Transactions", "Reliability"],
      spanClass: "span6",
    },
    {
      title: "Fraud / Risk Scoring Service",
      repoUrl: "https://github.com/tunguyen248/risk-service",
      meta: "Feature pipeline • Explainable scoring • Offline evaluation • Threshold tuning",
      bullets: [
        "Built a service that ingests event data, extracts features, and produces a normalized risk score for downstream decision-making.",
        "Implemented both rule-based logic and a lightweight statistical model to compare interpretability and predictive behavior.",
        "Evaluated model performance using offline metrics and documented precision/recall tradeoffs for threshold selection.",
        "Designed the system to support asynchronous ingestion and batch or near-real-time scoring workflows.",
      ],
      tags: ["Data", "Risk", "APIs"],
      spanClass: "span6",
    },
    {
      title: "Air-to-Ground Search (Senior Design)",
      repoUrl: "https://github.com/tunguyen248/Air-to-ground-search",
      meta: "C++ • Pathfinding • Python integration • Visualization",
      bullets: [
        "Developed a C++ path-finding system for a Boeing-sponsored air-to-ground search project to cover 80% of a 2D grid world while obeying aircraft fuel, obstacle, and movement constraints.",
        "Implemented route optimization to minimize cell movements and improve search efficiency in a constrained grid-based simulation.",
        "Built dead-area detection using a water-drop algorithm to identify obstacle-surrounded spawn regions and prevent invalid aircraft placement.",
        "Iterated on routing logic across Scrum milestones to improve path selection and simulation usability.",
      ],
      tags: ["Algorithms", "Systems", "Integration"],
      spanClass: "span6",
    },
    {
      title: "AI Note-Taking App",
      repoUrl: "https://github.com/tunguyen248/note-taking-app",
      meta: "Vue • RESTful API • AI • Visualization",
      bullets: [
        "Building a Vue.js AI app that converts transcript text, uploaded files, and audio/video into structured Markdown notes for Notion and Obsidian.",
        "Designing transcription and note-generation REST APIs with a consistent Markdown schema, regenerate-from-source workflows, and split-screen review/editing..",
        "Targeting 95% schema consistency and sub-30s/sub-90s generation time for transcript and media inputs across all 3 MVP input paths.",
      ],
      tags: ["RESTful APIs", "Vue", "Integration", "AI"],
      spanClass: "span6",
    },
    {
      title: "AI Language Learning App",
      repoUrl: "https://github.com/tunguyen248/language-lab",
      meta: "RESTful API • AI • Visualization",
      bullets: [
        "Building a JavaScript AI app that helps users to learn different languages.",
        "Designing text-to-speech and note-generation REST APIs with a consistent Markdown schema, regenerate-from-source workflows, and split-screen review/editing..",
        "Targeting 95% schema consistency and sub-30s/sub-90s generation time for transcript and media inputs across all 3 MVP input paths.",
      ],
      tags: ["RESTful APIs", "JavaScript", "Integration", "AI"],
      spanClass: "span6",
    },
    {
      title: "PDF Spaced Repetition (Capstone)",
      repoUrl: "https://github.com/tunguyen248/pdf-spaced-repetition-main",
      meta: "React • TypeScript • Local-first persistence • Rendering pipeline",
      bullets: [
        "Led a 3-person team in building a React-based spaced-repetition PDF viewer that supported annotation, summarization, and interactive document review..",
        "Engineered React components to support rendering and annotation for 500+ page PDFs.",
        "Architected a scalable frontend workflow with code reviews and 85% test coverage.",
      ],
      tags: ["Frontend", "UX", "Data Modeling"],
      spanClass: "span6",
    },
  ],

  experiences: [
    {
      title: "Ameren Digital Co-op - Software Engineering Co-op",
      bullets: [
        "Built UI components in C#/.NET for Switching Manager, an electrical grid management application supporting power distribution workflows.",
        "Wrote and optimized SQL queries for Switching Manager, reducing query response time by 40% and improving data retrieval for grid-management workflows.",
        "Collaborated with senior developers to implement and test new features under established coding standards in a production software environment.",
        "Automated repetitive Excel-based data processing tasks using AutoIt, reducing manual processing time by two weeks for engineering or operations staff.",
      ],
      spanClass: "span6",
    },
    {
      title: "Capstone II - Software Engineer",
      bullets: [
        "Designed and implemented a search algorithm for an air-to-ground search system optimized for efficiency and coverage.",
        "Developed an interactive GUI to visualize flight paths and search regions in two dimensions.",
        "Collaborated with a team of three to integrate heuristics, obstacle detection, and route optimization.",
        "Worked in an iterative Scrum-based workflow with regular design reviews and refinements.",
      ],
      spanClass: "span6",
    },
  ],

  design: {
    left: {
      title: "Reliable State-Changing Service Architecture",
      bullets: [
        "API layer validates requests and persists state changes in a transactional database.",
        "Idempotency keys prevent duplicate side effects during retries or network failures.",
        "Asynchronous workers process events generated by the primary service.",
        "Observability includes structured logging, request correlation IDs, and latency/error metrics.",
        "System behavior under partial failure is documented and tested.",
      ],
    },
    right: {
      title: "What I emphasize",
      bullets: [
        "Correctness under retries",
        "Data integrity and audit trails",
        "Clear failure modes",
        "Security basics (auth, secrets, least privilege)",
      ],
    },
  },

  skills: [
    {
      title: "Languages",
      value: "C++, TypeScript, Python, SQL, Java, C#, Visual Basic",
      spanClass: "span4",
    },
    {
      title: "Frontend",
      value: "Vue.js, React, .NET, Spring Boot, TypeScript",
      spanClass: "span4",
    },
    {
      title: "Backend",
      value: "REST, Oracle, MongoDB, Postgres, caching, queues, testing",
      spanClass: "span4",
    },
    {
      title: "Tools",
      value: "Git, Docker, AutoIt, AWS, Linux, Jira, Robot, GenAI",
      spanClass: "span4",
    },
    {
      title: "Quality",
      value: "CI/CD, integration tests, profiling, observability, Agile/Scrum",
      spanClass: "span4",
    },
  ],

  contact: {
    email: "tuthanhnguyen248@gmail.com",
    location: "O'Fallon, MO",
    status: "Open to SWE roles",
  },
};
