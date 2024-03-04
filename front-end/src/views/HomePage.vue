<template>
  <div class="page">
    <AboutPage class="about"/>
    <div class="projects-experience">
      <ProjectsPage class="projects"/>
      <ExperiencePage class="experience"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
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

.projects {
  margin-right: 10px;
}

@media (max-width: 600px) {
  .projects-experience {
    flex-direction: column;
  }

  .projects, .experience {
    width: 100%;
    margin: 0;
  }
}
</style>