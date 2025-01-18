<template>
	<section
		class="relative py-32 px-4 bg-white dark:bg-gray-900 overflow-hidden"
	>
		<!-- Background Elements -->
		<div class="absolute inset-0">
			<!-- Animated Circles -->
			<div ref="circles" class="absolute inset-0 opacity-[0.03]">
				<div
					v-for="i in 5"
					:key="i"
					class="absolute rounded-full bg-current"
					:style="{
						width: `${Math.random() * 300 + 100}px`,
						height: `${Math.random() * 300 + 100}px`,
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
					}"
				></div>
			</div>

			<!-- Gradient Overlay -->
			<div
				class="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white dark:from-gray-900 dark:via-gray-900/90 dark:to-gray-900"
			></div>
		</div>

		<div class="max-w-7xl mx-auto relative z-10">
			<!-- Section Header -->
			<div class="text-center mb-20">
				<h2
					ref="collabTitle"
					class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0"
				>
					<span
						class="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:from-purple-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
					>
						Growth Partner
					</span>
					<span class="block text-gray-900 dark:text-white"
						>Not Just a Vendor</span
					>
				</h2>
				<p
					ref="collabSubtitle"
					class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto opacity-0"
				>
					Our solutions integrate seamlessly with your workflows and
					hardware, enabling you to focus on what matters most -
					growth.
				</p>
			</div>

			<!-- Core Principles Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
				<div
					v-for="(principle, index) in principles"
					:key="index"
					:ref="
						(el) => {
							if (el) principleCards[index] = el
						}
					"
					class="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 opacity-0 translate-y-8"
				>
					<!-- Card Glow Effect -->
					<div
						class="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
					></div>

					<!-- Icon -->
					<div class="relative mb-6">
						<div
							class="w-20 h-20 rounded-2xl bg-purple-500/10 dark:bg-purple-400/10 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
						>
							<component
								:is="principle.icon"
								class="w-10 h-10 text-purple-600 dark:text-purple-400"
							/>
						</div>
					</div>

					<!-- Content -->
					<div class="relative">
						<h3
							class="text-2xl font-bold text-gray-900 dark:text-white mb-4"
						>
							{{ principle.title }}
						</h3>
						<p class="text-gray-600 dark:text-gray-300">
							{{ principle.description }}
						</p>
					</div>

					<!-- Bottom Progress Bar -->
					<div
						class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"
					></div>
				</div>
			</div>

			<!-- Interactive Workflow Visualization -->
			<div ref="workflow" class="mt-24 relative opacity-0">
				<div class="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8">
					<h3
						class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
					>
						How We Work Together
					</h3>

					<!-- Workflow Steps -->
					<div
						class="relative flex flex-col md:flex-row justify-between items-center gap-8"
					>
						<div
							v-for="(step, index) in workflowSteps"
							:key="index"
							:ref="
								(el) => {
									if (el) workflowCards[index] = el
								}
							"
							class="relative flex flex-col items-center text-center group"
						>
							<!-- Step Number -->
							<div
								class="w-12 h-12 rounded-full bg-purple-600 dark:bg-purple-400 text-white flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300"
							>
								{{ index + 1 }}
							</div>

							<!-- Step Content -->
							<h4
								class="text-lg font-bold text-gray-900 dark:text-white mb-2"
							>
								{{ step.title }}
							</h4>
							<p
								class="text-sm text-gray-600 dark:text-gray-300 max-w-xs"
							>
								{{ step.description }}
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- CTA -->
			<div ref="collabCTA" class="mt-24 text-center opacity-0">
				<button
					class="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-white rounded-xl hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
				>
					Start Collaborating
				</button>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useNuxtApp } from "#app"
import { Link, Settings, TrendingUp, Users } from "lucide-vue-next"
import { onMounted, ref } from "vue"

// Refs
const collabTitle = ref(null)
const collabSubtitle = ref(null)
const principleCards = ref([])
const workflow = ref(null)
const workflowCards = ref([])
const collabCTA = ref(null)
const circles = ref(null)

// Data
const principles = [
	{
		icon: Users,
		title: "Collaboration",
		description:
			"We work closely with your team to understand and achieve your vision.",
	},
	{
		icon: Settings,
		title: "Customization",
		description:
			"Solutions tailored specifically to your unique business needs.",
	},
	{
		icon: Link,
		title: "Integration",
		description:
			"Seamless integration with your existing systems and workflows.",
	},
	{
		icon: TrendingUp,
		title: "Scalability",
		description: "Built to evolve and grow alongside your business.",
	},
]

const workflowSteps = [
	{
		title: "Discovery",
		description: "We learn about your business, goals, and challenges.",
	},
	{
		title: "Strategy",
		description: "Develop a tailored plan to achieve your objectives.",
	},
	{
		title: "Implementation",
		description: "Execute the plan with regular communication and updates.",
	},
	{
		title: "Growth",
		description: "Monitor, optimize, and scale for continued success.",
	},
]

onMounted(() => {
	const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
	gsap.registerPlugin(ScrollTrigger)

	// Animate background circles
	gsap.to(circles.value.children, {
		rotation: 360,
		duration: "random(20, 40)",
		repeat: -1,
		ease: "none",
		stagger: {
			amount: 4,
			from: "random",
		},
	})

	// Header animations
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: collabTitle.value,
			start: "top bottom-=100",
			end: "bottom center",
			toggleActions: "play none none reverse",
		},
	})

	tl.to(collabTitle.value, {
		opacity: 1,
		duration: 1,
	}).to(
		collabSubtitle.value,
		{
			opacity: 1,
			duration: 1,
		},
		"-=0.5",
	)

	// Principle cards animation
	principleCards.value.forEach((card, index) => {
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

	// Workflow animation
	gsap.to(workflow.value, {
		scrollTrigger: {
			trigger: workflow.value,
			start: "top bottom-=100",
		},
		opacity: 1,
		duration: 1,
	})

	// Workflow steps animation
	workflowCards.value.forEach((card, index) => {
		gsap.from(card, {
			scrollTrigger: {
				trigger: workflow.value,
				start: "top bottom-=100",
			},
			scale: 0,
			duration: 0.5,
			delay: index * 0.2,
		})
	})

	// CTA animation
	gsap.to(collabCTA.value, {
		scrollTrigger: {
			trigger: collabCTA.value,
			start: "top bottom-=50",
		},
		opacity: 1,
		duration: 1,
	})
})
</script>
