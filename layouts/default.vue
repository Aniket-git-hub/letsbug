<template>
	<div class="min-h-screen bg-background-light dark:bg-background-dark">
		<!-- Navigation and Theme Controls -->
		<div class="fixed top-4 right-4 z-50 flex items-center gap-2">
			<!-- Navigation Links -->
			<NuxtLink
				v-if="!isCurrentRoute('/')"
				to="/"
				class="nav-link group relative px-3 py-2 rounded-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:border-purple-500/50 dark:hover:border-purple-400/50 transition-all duration-300"
			>
				<span
					class="relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400"
					>Home</span
				>
				<div
					class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-400/10 dark:to-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				></div>
			</NuxtLink>

			<NuxtLink
				v-if="!isCurrentRoute('/about')"
				to="/about"
				class="nav-link group relative px-3 py-2 rounded-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:border-purple-500/50 dark:hover:border-purple-400/50 transition-all duration-300"
			>
				<span
					class="relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400"
					>About</span
				>
				<div
					class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-400/10 dark:to-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				></div>
			</NuxtLink>

			<NuxtLink
				v-if="!isCurrentRoute('/contact')"
				to="/contact"
				class="nav-link group relative px-3 py-2 rounded-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:border-purple-500/50 dark:hover:border-purple-400/50 transition-all duration-300"
			>
				<span
					class="relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400"
					>Contact</span
				>
				<div
					class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-400/10 dark:to-blue-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				></div>
			</NuxtLink>

			<!-- Theme Switcher -->
			<ThemeSwitcher />
		</div>

		<!-- Main Content -->
		<slot />
	</div>
</template>

<script setup>
import { useRoute } from "vue-router"
import ThemeSwitcher from "~/components/ThemeSwitcher.vue"

const route = useRoute()

// Check if current route matches given path
const isCurrentRoute = (path) => {
	return route.path === path
}

// Add GSAP animations when component is mounted
onMounted(() => {
	const { $gsap: gsap } = useNuxtApp()

	// Animate nav links on page load
	gsap.from(".nav-link", {
		y: -20,
		opacity: 0,
		duration: 0.5,
		stagger: 0.1,
		ease: "power3.out",
	})

	// Add hover animations
	const navLinks = document.querySelectorAll(".nav-link")
	navLinks.forEach((link) => {
		link.addEventListener("mouseenter", () => {
			gsap.to(link, {
				y: -2,
				scale: 1.05,
				duration: 0.2,
				ease: "power2.out",
			})
		})

		link.addEventListener("mouseleave", () => {
			gsap.to(link, {
				y: 0,
				scale: 1,
				duration: 0.2,
				ease: "power2.out",
			})
		})
	})
})
</script>

<style scoped>
.nav-link {
	transform-origin: center;
	transition: all 0.3s ease;
}

.nav-link::before {
	content: "";
	position: absolute;
	inset: -1px;
	border-radius: 8px;
	padding: 1px;
	background: linear-gradient(to right, #4f46e5, #818cf8);
	-webkit-mask: linear-gradient(#fff 0 0) content-box,
		linear-gradient(#fff 0 0);
	mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
	-webkit-mask-composite: xor;
	mask-composite: exclude;
	opacity: 0;
	transition: opacity 0.3s ease;
}

.nav-link:hover::before {
	opacity: 1;
}

/* Active state styles */
.router-link-active {
	color: #4f46e5;
	background-color: rgba(79, 70, 229, 0.1);
}

@media (max-width: 768px) {
	.nav-link {
		padding: 0.5rem 1rem;
	}
}
</style>
