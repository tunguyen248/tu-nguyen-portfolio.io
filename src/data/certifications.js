// src/data/certifications.js

const certificationGroups = [
  {
    id: `google-ai-essentials`,
    title: `Google AI Essentials (Coursera)`,
    pdf: `${process.env.BASE_URL}certifications/Google AI Essentials Certification.pdf`,
    filename: `Google AI Essentials Certification.pdf`,
    meta: `5 certificates`,
    progress: { current: 5, total: 5 },
    certs: [
      {
        label: `Introduction to AI`,
        pdf: `${process.env.BASE_URL}certifications/Introduction to AI Certification.pdf`,
        filename: `Introduction to AI Certification.pdf`,
      },
      {
        label: `Maximize Productivity With AI Tools`,
        pdf: `${process.env.BASE_URL}certifications/Maximize Productivity With AI Tools Certification.pdf`,
        filename: `Maximize Productivity With AI Tools Certification.pdf`,
      },
      {
        label: `Discover the Art of Prompting`,
        pdf: `${process.env.BASE_URL}certifications/Discover the Art of Prompting Certification.pdf`,
        filename: `Discover the Art of Prompting Certification.pdf`,
      },
      {
        label: `Use AI Responsibly`,
        pdf: `${process.env.BASE_URL}certifications/Use AI Responsibly Certification.pdf`,
        filename: `Use AI Responsibly Certification.pdf`,
      },
      {
        label: `Stay Ahead of the AI Curve`,
        pdf: `${process.env.BASE_URL}certifications/Stay Ahead of the AI Curve Certification.pdf`,
        filename: `Stay Ahead of the AI Curve Certification.pdf`,
      },
    ],
  },
  {
    id: `gen-ai-data-engineers`,
    title: `Generative AI for Data Engineers (Coursera)`,
    pdf: `${process.env.BASE_URL}certifications/Generative AI for Data Engineers Certification.pdf`,
    filename: `Generative AI for Data Engineers Certification.pdf`,
    meta: `3 certificates`,
    progress: { current: 3, total: 3 },
    certs: [
      {
        label: `Generative AI: Introduction and Applications`,
        pdf: `${process.env.BASE_URL}certifications/Generative AI - Introduction and Applications Certification.pdf`,
        filename: `Generative AI - Introduction and Applications Certification.pdf`,
      },
      {
        label: `Generative AI: Prompt Engineering Basics`,
        pdf: `${process.env.BASE_URL}certifications/Generative AI - Prompt Engineering Basics Certification.pdf`,
        filename: `Generative AI - Prompt Engineering Basics Certification.pdf`,
      },
      {
        label: `Generative AI: Elevate your Data Engineering Career`,
        pdf: `${process.env.BASE_URL}certifications/Generative AI - Elevate your Data Engineering Certification.pdf`,
        filename: `Generative AI - Elevate your Data Engineering Certification.pdf`,
      },
    ],
  },
  {
    id: `vue-complete-guide`,
    title: `Vue - The Complete Guide (Udemy)`,
    pdf: `${process.env.BASE_URL}certifications/Vue-The Complete Guide (incl. Router & Composition API).pdf`,
    filename: `Vue-The Complete Guide (incl. Router & Composition API).pdf`,
    disabled: false,
    meta: `1 certificates`,
    progress: { current: 29, total: 29 },
    certs: [
      {
        label: `Vue - The Complete Guide (Udemy)`,
        pdf: `${process.env.BASE_URL}certifications/Vue-The Complete Guide (incl. Router & Composition API).pdf`,
        filename: `Vue-The Complete Guide (incl. Router & Composition API).pdf`,
        disabled: false,
      },
    ],
  },
  {
    id: `aws-certified-developer-associate`,
    title: `AWS Certified Developer - Associate`,
    pdf: `${process.env.BASE_URL}certifications/AWS/AWS Certified Developer - Associate certificate.pdf`,
    filename: `AWS Certified Developer - Associate certificate.pdf`,
    meta: `1 certificates`,
    progress: { current: 1, total: 1 },
    certs: [
      {
        label: `AWS Certified Developer - Associate`,
        pdf: `${process.env.BASE_URL}certifications/AWS/AWS Certified Developer - Associate certificate.pdf`,
        filename: `AWS Certified Developer - Associate certificate.pdf`,
      }
    ],
  },
];

export default certificationGroups;