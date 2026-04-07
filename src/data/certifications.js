// src/data/certifications.js

const certificationGroups = [
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials (Coursera)",
    pdf: "certifications/Google AI Essentials Certification.pdf",
    filename: "Google AI Essentials Certification.pdf",
    meta: "5 certificates",
    progress: { current: 5, total: 5 },
    certs: [
      {
        label: "Introduction to AI",
        pdf: "certifications/Introduction to AI Certification.pdf",
        filename: "Introduction to AI Certification.pdf",
      },
      {
        label: "Maximize Productivity With AI Tools",
        pdf: "certifications/Maximize Productivity With AI Tools Certification.pdf",
        filename: "Maximize Productivity With AI Tools Certification.pdf",
      },
      {
        label: "Discover the Art of Prompting",
        pdf: "certifications/Discover the Art of Prompting Certification.pdf",
        filename: "Discover the Art of Prompting Certification.pdf",
      },
      {
        label: "Use AI Responsibly",
        pdf: "certifications/Use AI Responsibly Certification.pdf",
        filename: "Use AI Responsibly Certification.pdf",
      },
      {
        label: "Stay Ahead of the AI Curve",
        pdf: "certifications/Stay Ahead of the AI Curve Certification.pdf",
        filename: "Stay Ahead of the AI Curve Certification.pdf",
      },
    ],
  },
  {
    id: "gen-ai-data-engineers",
    title: "Generative AI for Data Engineers (Coursera)",
    pdf: "certifications/Generative AI for Data Engineers Certification.pdf",
    filename: "Generative AI for Data Engineers Certification.pdf",
    meta: "3 certificates",
    progress: { current: 3, total: 3 },
    certs: [
      {
        label: "Generative AI: Introduction and Applications",
        pdf: "certifications/Generative AI - Introduction and Applications Certification.pdf",
        filename: "Generative AI - Introduction and Applications Certification.pdf",
      },
      {
        label: "Generative AI: Prompt Engineering Basics",
        pdf: "certifications/Generative AI - Prompt Engineering Basics Certification.pdf",
        filename: "Generative AI - Prompt Engineering Basics Certification.pdf",
      },
      {
        label: "Generative AI: Elevate your Data Engineering Career",
        pdf: "certifications/Generative AI - Elevate your Data Engineering Certification.pdf",
        filename: "Generative AI - Elevate your Data Engineering Certification.pdf",
      },
    ],
  },
  {
    id: "vue-complete-guide",
    title: "Vue - The Complete Guide (Udemy)",
    pdf: "certifications/Vue-The Complete Guide (incl. Router & Composition API).pdf",
    filename: "Vue-The Complete Guide (incl. Router & Composition API).pdf",
    disabled: false,
    meta: "1 certificates",
    progress: { current: 29, total: 29 },
    certs: [
      {
        label: "Vue - The Complete Guide (Udemy)",
        pdf: "certifications/Vue-The Complete Guide (incl. Router & Composition API).pdf",
        filename: "Vue-The Complete Guide (incl. Router & Composition API).pdf",
        disabled: false,
      },
    ],
  },
  {
    id: "aws-certified-developer-associate",
    title: "AWS Certified Developer - Associate",
    pdf: "certifications/AWS/AWS Certified Developer - Associate certificate.pdf",
    filename: "AWS Certified Developer - Associate certificate.pdf",
    meta: "1 certificates",
    progress: { current: 1, total: 1 },
    certs: [
      {
        label: "AWS Certified Developer - Associate",
        pdf: "certifications/AWS/AWS Certified Developer - Associate certificate.pdf",
        filename: "AWS Certified Developer - Associate certificate.pdf",
      }
    ],
  },
];

export default certificationGroups;