<template>
  <div id="app">
    <nav class="local">
      <ul id="real_list" class="flexbox_container">
        <li><router-link class="nav-link" to="/">Home</router-link></li>
        <li><router-link class="nav-link" to="/projects">Projects</router-link></li>
        <li><router-link class="nav-link" to="/experience">Experience</router-link></li>
        <li><router-link class="nav-link" to="/about">About</router-link></li>
        <li><router-link class="nav-link" to="/contact">Contact</router-link></li>
      </ul>
    </nav>

    <router-view />

    <!-- Additional Router View for Contact Page on Home Page -->
    <router-view v-if="route.path === '/'" name="contact" />

    <!-- Footer Component -->
    <FooterComponent v-if="route.path !== '/'" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useRoute} from "vue-router";
import FooterComponent from "./components/FooterComponent.vue";

export default defineComponent({
	name: "App",
	components: {
		FooterComponent
	},
	setup() {
		const route = useRoute();
		return { route };
	}
});
</script>

<!--suppress CssUnusedSymbol -->
<style>
/**************
*   General   *
**************/

body {
  background-color: #f5f5f5;
  font-size: 110%;
  margin: 0;
}

/******************
*   Router View   *
******************/

h1, h2 {
  font-weight: bold;
  text-align: center;
  padding-bottom: 5px;
  margin: 0;
  color: #2a6496;
}

h1 {
  font-size: 200%;
}

h2 {
  font-size: 150%;
}

.page {
  padding: 20px;
  background-color: #f5f5f5;
}

.item {
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.item p {
  margin-top: 10px;
}


/*****************
*   Navigation   *
*****************/

nav.local {
  position: relative;
}

.nav-link {
  text-decoration: none;
  padding: 3%;
  color: black;
}

ul.flexbox_container {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  list-style-type: none;

  padding: 0;
  margin: 0;
}

nav.local li {
  background-color: rgb(160, 160, 160);
  border-right: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav.local li:last-child {
  border-right: none;
}

nav.local > ul > li {
  width: 20%;
  line-height: 3;
}
</style>
