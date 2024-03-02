<template>
  <div class="page">
    <h1>Experience</h1>
    <div v-for="(item, index) in experience" :key="index" class="item">
      <h2>{{ item.role }}</h2>
      <h3>{{ item.location }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
	name: "ExperiencePage",
	setup() {
		const store = useStore();
		const experience = computed(() => store.state.userProfile.experience);

		return { experience };
	}
});
</script>

<style scoped>

</style>
