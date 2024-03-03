<template>
  <div class="page">
    <img src="../assets/ProfilePic.jpg" alt="Profile Picture" class="profile-pic">
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
.profile-pic {
  display: block;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 20px auto;
}
</style>