<script lang="ts" setup>
import {ref} from "vue";

const isExpanded = ref(false);
const activeLink = ref("Home");

const links = ref([
  {name: "Projects", path: "/projects"},
  {name: "Experience", path: "/experience"},
  {name: "About", path: "/about"},
  {name: "Contact", path: "/contact"},
]);

function toggleMenu() {
  isExpanded.value = !isExpanded.value;
}

function setActiveLink(linkName: string) {
  activeLink.value = linkName;
  isExpanded.value = false; // Optionally close the menu upon selection
}
</script>

<template>
  <header>
    <nav class="local">
      <ul class="flexbox_container">
        <li :class="{ expanded: isExpanded }" @click="toggleMenu">
          <RouterLink class="nav-link" to="/" @click.prevent="setActiveLink('HomePage')">
            Home
          </RouterLink>
        </li>
        <li
          v-for="link in links" :key="link.path"
          :class="{ expanded: isExpanded, active: activeLink === link.name }" @click="toggleMenu"
        >
          <RouterLink :to="link.path" class="nav-link" @click.prevent="setActiveLink(link.name)">
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>

</style>
