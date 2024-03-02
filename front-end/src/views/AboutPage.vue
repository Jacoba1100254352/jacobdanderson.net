<template>
  <div class="page">
    <h1>About Me</h1>
    <div class="item">
      <p>{{ about }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
	name: "AboutPage",
	setup() {
		const store = useStore();
		const about = computed(() => store.state.userProfile.about);

		return { about };
	}
});
</script>

<style scoped>

</style>