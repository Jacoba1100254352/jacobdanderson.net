<template>
  <div class="page">
    <h1>Projects</h1>
    <div v-for="(project, index) in projects" :key="index" class="item">
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
	name: "ProjectsPage",
	setup() {
		const store = useStore();
		const projects = computed(() => store.state.userProfile.projects);

		return { projects };
	}
});
</script>

<style scoped>

</style>