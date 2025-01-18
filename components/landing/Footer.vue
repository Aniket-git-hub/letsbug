<template>
	<footer
		class="relative bg-gray-50 dark:bg-gray-900 pt-24 pb-12 overflow-hidden"
	>
		<!-- Background Elements -->
		<div class="absolute inset-0 pointer-events-none">
			<!-- Animated Circles -->
			<div ref="circles" class="absolute inset-0 opacity-[0.03]">
				<div
					v-for="i in 5"
					:key="i"
					class="absolute rounded-full bg-current"
					:style="`width: ${80 + i * 20}px; height: ${
						80 + i * 20
					}px;`"
				></div>
			</div>

			<!-- Gradient Overlay -->
			<div
				class="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-900"
			></div>
		</div>

		<div class="max-w-7xl mx-auto px-4 relative z-10">
			<!-- Main Footer Content -->
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
			>
				<!-- Company Info -->
				<div ref="companyInfo" class="space-y-6 opacity-0">
					<div class="flex items-center space-x-3">
						<img
							src="https://placehold.co/100x100"
							alt="Letsbug"
							class="w-8 h-8"
						/>
						<span
							class="text-2xl font-bold text-gray-900 dark:text-white"
							>Letsbug</span
						>
					</div>
					<p class="text-gray-600 dark:text-gray-400">
						Transforming visions into digital realities with
						innovative solutions and exceptional service.
					</p>
					<!-- Social Links -->
					<div class="flex space-x-4">
						<a
							v-for="social in socials"
							:key="social.name"
							:href="social.url"
							class="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center hover:scale-110 transition-transform duration-300"
						>
							<component
								:is="social.icon"
								class="w-5 h-5 text-gray-600 dark:text-gray-400"
							/>
						</a>
					</div>
				</div>

				<!-- Quick Links -->
				<div ref="quickLinks" class="space-y-6 opacity-0">
					<h3 class="text-lg font-bold text-gray-900 dark:text-white">
						Quick Links
					</h3>
					<ul class="space-y-3">
						<li
							v-for="link in quickLinksArray"
							:key="link.name"
							class="group"
						>
							<a
								:href="link.url"
								class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
							>
								<ArrowRight
									class="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300"
								/>
								<span>{{ link.name }}</span>
							</a>
						</li>
					</ul>
				</div>

				<!-- Services -->
				<div ref="services" class="space-y-6 opacity-0">
					<h3 class="text-lg font-bold text-gray-900 dark:text-white">
						Services
					</h3>
					<ul class="space-y-3">
						<li
							v-for="service in servicesArray"
							:key="service"
							class="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
						>
							<CheckCircle class="w-4 h-4 text-green-500" />
							<span>{{ service }}</span>
						</li>
					</ul>
				</div>

				<!-- Newsletter -->
				<div ref="newsletter" class="space-y-6 opacity-0">
					<h3 class="text-lg font-bold text-gray-900 dark:text-white">
						Stay Updated
					</h3>
					<p class="text-gray-600 dark:text-gray-400">
						Subscribe to our newsletter for the latest updates and
						insights.
					</p>
					<form
						@submit.prevent="subscribeNewsletter"
						class="space-y-3"
					>
						<input
							type="email"
							placeholder="Enter your email"
							class="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
						/>
						<button
							type="submit"
							class="w-full px-4 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-300"
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>

			<!-- Bottom Bar -->
			<div
				ref="bottomBar"
				class="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 opacity-0"
			>
				<div
					class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
				>
					<p class="text-gray-600 dark:text-gray-400">
						© {{ new Date().getFullYear() }} Letsbug. All rights
						reserved.
					</p>
					<div class="flex space-x-6">
						<a
							v-for="link in legalLinks"
							:key="link.name"
							:href="link.url"
							class="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
						>
							{{ link.name }}
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup>
import { useNuxtApp } from "#app"
import {
	ArrowRight,
	CheckCircle,
	Github,
	Instagram,
	Linkedin,
	Twitter,
} from "lucide-vue-next"
import { onMounted, ref } from "vue"

// Refs
const companyInfo = ref(null)
const quickLinks = ref(null)
const services = ref(null)
const newsletter = ref(null)
const bottomBar = ref(null)
const circles = ref(null)

// Data
const socials = [
	{ name: "GitHub", icon: Github, url: "https://github.com/Aniket-git-hub" },
	{ name: "Twitter", icon: Twitter, url: "https://x.com/singhaniket06" },
	{
		name: "LinkedIn",
		icon: Linkedin,
		url: "https://www.linkedin.com/in/aniket-singh-80371b201",
	},
	{
		name: "Instagram",
		icon: Instagram,
		url: "https://www.instagram.com/aniketsingh6967/",
	},
]

const quickLinksArray = [
	{ name: "About Us", url: "/about" },
	{ name: "Our Work", url: "https://portfolio.letsbug.in" },
	{ name: "Contact", url: "/contact" },
	{ name: "Blog", url: "https://blog.letsbug.in" },
]

const servicesArray = [
	"Web Development",
	"E-commerce Solutions",
	"Custom Systems",
	"Cloud Hosting",
]

const legalLinks = [
	{ name: "Privacy Policy", url: "#" },
	{ name: "Terms of Service", url: "#" },
	{ name: "Cookie Policy", url: "#" },
]

// Animations
onMounted(() => {
	const { $gsap: gsap } = useNuxtApp()

	// Animate circles
	const circleElements = circles.value.children
	Array.from(circleElements).forEach((circle, index) => {
		gsap.to(circle, {
			x: Math.random() * window.innerWidth,
			y: Math.random() * window.innerHeight,
			duration: 20 + index * 5,
			repeat: -1,
			yoyo: true,
			ease: "none",
		})
	})

	// Animate content sections
	const elements = [
		companyInfo.value,
		quickLinks.value,
		services.value,
		newsletter.value,
	]
	elements.forEach((el, index) => {
		gsap.to(el, {
			opacity: 1,
			y: 0,
			duration: 0.8,
			delay: index * 0.2,
			scrollTrigger: {
				trigger: el,
				start: "top bottom-=100",
			},
		})
	})

	// Animate bottom bar
	gsap.to(bottomBar.value, {
		opacity: 1,
		duration: 0.8,
		scrollTrigger: {
			trigger: bottomBar.value,
			start: "top bottom",
		},
	})
})

// Methods
const subscribeNewsletter = () => {
	// Handle newsletter subscription
}
</script>
