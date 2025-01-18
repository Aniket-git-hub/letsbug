<template>
	<section
		class="relative py-32 px-4 bg-gray-50/50 dark:bg-gray-900/50 overflow-hidden"
	>
		<!-- Animated Background -->
		<div class="absolute inset-0">
			<!-- Honeycomb Pattern -->
			<div ref="honeycomb" class="absolute inset-0 opacity-[0.03]">
				<svg width="100%" height="100%">
					<pattern
						id="honeycomb"
						x="0"
						y="0"
						width="30"
						height="52"
						patternUnits="userSpaceOnUse"
					>
						<path
							d="M15 0L30 8.66v17.34L15 34.66L0 26V8.66L15 0z"
							fill="currentColor"
						/>
					</pattern>
					<rect width="100%" height="100%" fill="url(#honeycomb)" />
				</svg>
			</div>

			<!-- Gradient Overlay -->
			<div
				class="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80 dark:via-gray-900/50 dark:to-gray-900/80"
			></div>
		</div>

		<div class="max-w-7xl mx-auto relative z-10">
			<!-- Section Header -->
			<div class="text-center mb-20">
				<h2
					ref="solutionTitle"
					class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0"
				>
					<span
						class="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:from-purple-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
					>
						Custom Solutions
					</span>
					<span class="block text-gray-900 dark:text-white"
						>Built for Your Success</span
					>
				</h2>
				<p
					ref="solutionSubtitle"
					class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto opacity-0"
				>
					From web development to hosting, we deliver tailor-made
					digital tools that fit your goals and grow with you.
				</p>
			</div>

			<!-- Solutions Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
				<div
					v-for="(solution, index) in solutions"
					:key="index"
					:ref="
						(el) => {
							if (el) solutionCards[index] = el
						}
					"
					class="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 opacity-0 translate-y-8 hover:shadow-xl transition-all duration-500"
				>
					<!-- Card Decoration -->
					<div
						class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
					></div>

					<!-- Icon Container -->
					<div class="relative mb-6">
						<div
							class="w-16 h-16 rounded-xl bg-purple-500/10 dark:bg-purple-400/10 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
						>
							<component
								:is="solution.icon"
								class="w-8 h-8 text-purple-600 dark:text-purple-400"
							/>
						</div>
					</div>

					<!-- Content -->
					<div class="relative space-y-4">
						<h3
							class="text-2xl font-bold text-gray-900 dark:text-white"
						>
							{{ solution.title }}
						</h3>
						<p class="text-gray-600 dark:text-gray-300">
							{{ solution.description }}
						</p>

						<!-- Features List -->
						<ul class="space-y-2 pt-4">
							<li
								v-for="(feature, fIndex) in solution.features"
								:key="fIndex"
								class="flex items-center text-gray-500 dark:text-gray-400"
							>
								<CheckCircle
									class="w-5 h-5 mr-2 text-green-500"
								/>
								{{ feature }}
							</li>
						</ul>

						<!-- Interactive Elements -->
						<div class="pt-6">
							<button
								class="group inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
							>
								<span>Learn More</span>
								<ArrowRight
									class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
								/>
							</button>
						</div>
					</div>

					<!-- Progress Indicator -->
					<div
						class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"
					></div>
				</div>
			</div>

			<!-- Interactive Timeline -->
			<div ref="timeline" class="mt-24 relative opacity-0">
				<h3
					class="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
				>
					Our Development Process
				</h3>

				<div class="relative">
					<!-- Timeline Line -->
					<div
						class="absolute top-1/2 left-0 w-full h-px bg-gray-200 dark:bg-gray-700"
					></div>

					<!-- Timeline Steps -->
					<div
						class="relative flex justify-between max-w-4xl mx-auto"
					>
						<div
							v-for="(step, index) in process"
							:key="index"
							:ref="
								(el) => {
									if (el) timelineSteps[index] = el
								}
							"
							class="relative flex flex-col items-center group"
						>
							<!-- Step Circle -->
							<div
								class="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border-4 border-purple-600 dark:border-purple-400 z-10 group-hover:scale-125 transition-transform duration-300"
							></div>

							<!-- Step Content -->
							<div
								class="absolute top-12 w-48 text-center opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
							>
								<h4
									class="font-bold text-gray-900 dark:text-white mb-2"
								>
									{{ step.title }}
								</h4>
								<p
									class="text-sm text-gray-600 dark:text-gray-300"
								>
									{{ step.description }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Call to Action -->
			<div ref="solutionCTA" class="mt-24 text-center opacity-0">
				<button
					class="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-white rounded-xl hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
				>
					Start Your Project
				</button>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useNuxtApp } from "#app"
import {
	ArrowRight,
	CheckCircle,
	Code as LucideCode,
	Settings as LucideSettings,
	ShoppingCart as LucideShoppingCart,
} from "lucide-vue-next"
import { onMounted, ref } from "vue"

// Refs
const solutionTitle = ref(null)
const solutionSubtitle = ref(null)
const solutionCards = ref([])
const timeline = ref(null)
const timelineSteps = ref([])
const solutionCTA = ref(null)
const honeycomb = ref(null)

// Data
const solutions = [
	{
		icon: LucideCode,
		title: "Web Development",
		description:
			"Create engaging, high-performance websites that convert visitors into customers.",
		features: [
			"Responsive Design",
			"SEO Optimization",
			"Performance Focused",
			"Analytics Integration",
		],
	},
	{
		icon: LucideShoppingCart,
		title: "E-commerce Solutions",
		description:
			"Build scalable online stores that drive sales and delight customers.",
		features: [
			"Secure Payments",
			"Inventory Management",
			"Mobile Commerce",
			"Customer Analytics",
		],
	},
	{
		icon: LucideSettings,
		title: "Custom Systems",
		description:
			"Develop tailored software solutions that streamline your operations.",
		features: [
			"Process Automation",
			"Data Management",
			"API Integration",
			"Scalable Architecture",
		],
	},
]

const process = [
	{
		title: "Discovery",
		description: "Understanding your needs and goals",
	},
	{
		title: "Planning",
		description: "Creating detailed roadmap and architecture",
	},
	{
		title: "Development",
		description: "Building your solution with best practices",
	},
	{
		title: "Testing",
		description: "Ensuring quality and performance",
	},
	{
		title: "Launch",
		description: "Deploying and monitoring success",
	},
]

onMounted(() => {
	const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()

	// Register ScrollTrigger plugin
	gsap.registerPlugin(ScrollTrigger)

	// Animate honeycomb pattern
	gsap.to(honeycomb.value, {
		rotation: 360,
		duration: 100,
		repeat: -1,
		ease: "none",
	})

	// Create scroll-triggered timeline
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: solutionTitle.value,
			start: "top bottom-=100",
			end: "bottom center",
			toggleActions: "play none none reverse",
		},
	})

	// Animate title and subtitle
	tl.to(solutionTitle.value, {
		opacity: 1,
		duration: 1,
	}).to(
		solutionSubtitle.value,
		{
			opacity: 1,
			duration: 1,
		},
		"-=0.5",
	)

	// Animate solution cards
	solutionCards.value.forEach((card, index) => {
		gsap.to(card, {
			scrollTrigger: {
				trigger: card,
				start: "top bottom-=50",
			},
			opacity: 1,
			y: 0,
			duration: 1,
			delay: index * 0.2,
		})
	})

	// Animate timeline
	gsap.to(timeline.value, {
		scrollTrigger: {
			trigger: timeline.value,
			start: "top bottom-=100",
		},
		opacity: 1,
		duration: 1,
	})

	// Animate timeline steps
	timelineSteps.value.forEach((step, index) => {
		gsap.from(step, {
			scrollTrigger: {
				trigger: timeline.value,
				start: "top bottom-=100",
			},
			scale: 0,
			duration: 0.5,
			delay: index * 0.1,
		})
	})

	// Animate CTA
	gsap.to(solutionCTA.value, {
		scrollTrigger: {
			trigger: solutionCTA.value,
			start: "top bottom-=50",
		},
		opacity: 1,
		duration: 1,
	})
})
</script>
