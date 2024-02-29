<template>
  <div class="About">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
	name: "AboutPage", // Replace with your component name
	setup() {
		const store = useStore();
	},
});
</script>
