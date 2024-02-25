<template>
  <div class="About">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "AboutPage",
})
export default class HomePage extends Vue {
  // If you have data, computed properties, methods, etc., they can be added here.
  // For example, a simple data property would look like this:
  data() {
    return {
      // your data properties here
    };
  }

  // Example of a lifecycle hook
  created() {
    // your created hook logic here
  }
}
</script>
