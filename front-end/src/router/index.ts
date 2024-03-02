import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ProjectsPage from "@/views/ProjectsPage.vue";
import ExperiencePage from "@/views/ExperiencePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		components: {
			default: HomePage,
			contact: ContactPage
		}
	},
	{
		path: "/projects",
		name: "Projects",
		component: ProjectsPage,
	},
	{
		path: "/experience",
		name: "Experience",
		component: ExperiencePage,
	},
	{
		path: "/about",
		name: "About",
		component: AboutPage,
	},
	{
		path: "/contact",
		name: "Contact",
		component: ContactPage,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
