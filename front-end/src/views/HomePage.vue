<template>
  <div class="home-page">
    <AboutPage class="about" />
    <div class="projects-experience">
      <ProjectsPage class="projects" />
      <ExperiencePage class="experience" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutPage from "./AboutPage.vue";
import ProjectsPage from "./ProjectsPage.vue";
import ExperiencePage from "./ExperiencePage.vue";

export default defineComponent({
	name: "HomePage",
	components: {
		AboutPage,
		ProjectsPage,
		ExperiencePage
	}
});
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
}

.about {
  width: 100%;
}

.projects-experience {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.projects, .experience {
  width: 50%;
}

@media (max-width: 600px) {
  .home-page {
    flex-direction: column;
  }

  .projects-experience {
    flex-direction: column;
  }

  .projects, .experience {
    width: 100%;
  }
}
</style>