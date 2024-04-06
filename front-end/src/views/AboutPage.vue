<template>
  <div class="page">
    <img alt="Profile Picture" class="profile-pic" src="../../public/assets/images/Jacob_Anderson.jpg">
    <h1>About Me</h1>
    <div class="item">
      <p>{{ about }}</p>
    </div>
  </div>

  <!-- Do not show Education Component on home page -->
  <EducationComponent v-if="route.path !== '/'"/>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import {useStore} from "vuex";
import EducationComponent from "@/components/EducationComponent.vue";
import {useRoute} from "vue-router";

export default defineComponent({
	name: "AboutPage",
	components: {
		EducationComponent
	},
	setup() {
		const store = useStore();
		const about = computed(() => store.state.userProfile.about);
		const route = useRoute();

		return {about, route};
	}
});
</script>

<style scoped>
.profile-pic {
  display: block;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 20px auto;
}
</style>