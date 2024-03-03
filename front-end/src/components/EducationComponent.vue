<template>
  <div class="page">
    <h1>Education</h1>
    <div v-for="(item, index) in education" :key="index" class="item">
      <h2>{{ item.degree }}</h2>
      <h3>{{ item.institution }}</h3>
      <p>{{ item.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import {useStore} from "vuex";

export default defineComponent({
	name: "EducationComponent",
	setup() {
		const store = useStore();
		const education = computed(() => store.state.userProfile.education);

		return {education};
	}
});
</script>

<style scoped>

</style>
