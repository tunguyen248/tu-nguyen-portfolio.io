<template>
  <div>
    <HeroSection :hero="hero" />

    <SectionBlock id="projects" title="Featured Projects">
      <ProjectGrid :projects="featuredProjects" />
    </SectionBlock>

    <SectionBlock id="experience" title="Experiences">
      <ExperienceGrid :experiences="experiences" />
    </SectionBlock>

    <SectionBlock id="design" title="System Design Snapshot">
      <DesignSnapshot :design="design" />
    </SectionBlock>

    <SectionBlock id="skills" title="Skills">
      <SkillGrid :skills="skills" />
    </SectionBlock>

    <SectionBlock id="contact" title="Contact">
      <ContactCard :contact="contact" />
    </SectionBlock>
  </div>
</template>

<script>
import HeroSection from "../components/HeroSection.vue";
import SectionBlock from "../components/SectionBlock.vue";
import ProjectGrid from "../components/ProjectGrid.vue";
import ExperienceGrid from "../components/ExperienceGrid.vue";
import DesignSnapshot from "../components/DesignSnapshot.vue";
import SkillGrid from "../components/SkillGrid.vue";
import ContactCard from "../components/ContactCard.vue";
import portfolio from "../data/portfolio";

export default {
  name: "HomePage",
  components: {
    HeroSection,
    SectionBlock,
    ProjectGrid,
    ExperienceGrid,
    DesignSnapshot,
    SkillGrid,
    ContactCard,
  },
  data() {
    return {
      hero: portfolio.hero,
      featuredProjects: portfolio.featuredProjects,
      experiences: portfolio.experiences,
      design: portfolio.design,
      skills: portfolio.skills,
      contact: portfolio.contact,
    };
  },
};
</script>