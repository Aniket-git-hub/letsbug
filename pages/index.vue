<script setup>
import Collaboration from "~/components/landing/Collaboration.vue"
import Contact from "~/components/landing/Contact.vue"
import Footer from "~/components/landing/Footer.vue"
import Hero from "~/components/landing/Hero.vue"
import Problems from "~/components/landing/Problems.vue"
import ProbNew from "~/components/landing/ProbNew.vue"
import Results from "~/components/landing/Results.vue"
import Solutions from "~/components/landing/Solutions.vue"

// SEO Configuration
useHead({
	title: "Letsbug - Professional Web Development Agency",
	meta: [
		{
			name: "description",
			content:
				"Letsbug is a professional web development agency founded by Aniket Singh, offering cutting-edge web development services, custom solutions, and digital transformation expertise.",
		},
		{
			name: "keywords",
			content:
				"web development, web design, digital agency, Letsbug, Aniket Singh, custom websites, web solutions, frontend development, backend development",
		},
		{
			property: "og:title",
			content: "Letsbug - Professional Web Development Agency",
		},
		{
			property: "og:description",
			content:
				"Transform your digital presence with Letsbug's professional web development services.",
		},
		{ property: "og:type", content: "website" },
		{ property: "og:locale", content: "en_US" },
		{ name: "twitter:card", content: "summary_large_image" },
		{
			name: "twitter:title",
			content: "Letsbug - Professional Web Development Agency",
		},
		{
			name: "twitter:description",
			content:
				"Transform your digital presence with Letsbug's professional web development services.",
		},
		{ name: "robots", content: "index, follow" },
	],
	link: [{ rel: "canonical", href: "https://letsbug.in/" }],
})

const { $gsap } = useNuxtApp()

// Mouse follower effect
const cursor = ref(null)
const cursorDot = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)

onMounted(() => {
	// Only run on client-side
	if (process.client) {
		// Initialize smooth scroll
		initMouseFollower()
		initSectionAnimations()
	}
})

const initMouseFollower = () => {
	if (!process.client) return

	window.addEventListener("mousemove", (e) => {
		mouseX.value = e.clientX
		mouseY.value = e.clientY

		$gsap.to(cursor.value, {
			x: mouseX.value,
			y: mouseY.value,
			duration: 0.2,
		})

		$gsap.to(cursorDot.value, {
			x: mouseX.value,
			y: mouseY.value,
			duration: 0.1,
		})
	})
}

const initSectionAnimations = () => {
	if (!process.client) return

	// Animate sections on scroll
	const sections = document.querySelectorAll("section")
	sections.forEach((section) => {
		$gsap.from(section, {
			scrollTrigger: {
				trigger: section,
				start: "top center",
				end: "bottom center",
				toggleActions: "play none none reverse",
			},
			opacity: 0,
			y: 50,
			duration: 1,
			ease: "power2.out",
		})
	})
}
</script>

<template>
	<div class="relative custom-scrollbar">
		<!-- Custom cursor -->
		<div ref="cursor" class="cursor-follower"></div>
		<div ref="cursorDot" class="cursor-dot"></div>

		<!-- Sections -->
		<section class="section"><Hero /></section>
		<section class="section"><Problems /></section>
		<section class="section"><ProbNew /></section>
		<section class="section"><Solutions /></section>
		<section class="section"><Collaboration /></section>
		<section class="section"><Results /></section>
		<section class="section"><Contact /></section>
		<section class="section"><Footer /></section>
	</div>
</template>

<style scoped>
.section {
	position: relative;
	transition: transform 0.3s ease;
}

.section:hover {
	transform: scale(1.02);
}

/* Custom cursor styles */
.cursor-follower {
	width: 40px;
	height: 40px;
	border: 2px solid #4f46e5;
	border-radius: 50%;
	position: fixed;
	pointer-events: none;
	z-index: 9999;
	mix-blend-mode: difference;
	transition: transform 0.1s ease;
}

.cursor-dot {
	width: 8px;
	height: 8px;
	background: #4f46e5;
	border-radius: 50%;
	position: fixed;
	pointer-events: none;
	z-index: 9999;
	mix-blend-mode: difference;
}

/* Hide default cursor */
* {
	cursor: none;
}

/* Responsive cursor */
@media (max-width: 768px) {
	.cursor-follower,
	.cursor-dot {
		display: none;
	}
	* {
		cursor: auto;
	}
}

/* Custom scrollbar styles */
.custom-scrollbar {
	scrollbar-width: thin;
	scrollbar-color: #4f46e5 #f3f4f6;
}

/* For Webkit browsers (Chrome, Safari) */
.custom-scrollbar::-webkit-scrollbar {
	width: 10px;
}

.custom-scrollbar::-webkit-scrollbar-track {
	background: #f3f4f6;
	border-radius: 5px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
	background: #4f46e5;
	border-radius: 5px;
	border: 2px solid #f3f4f6;
	transition: background 0.3s ease;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
	background: #3730a3;
}
</style>
