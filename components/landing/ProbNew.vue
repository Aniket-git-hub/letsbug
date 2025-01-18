<template>
	<section
		class="relative py-24 px-4 overflow-hidden bg-white dark:bg-gray-900"
	>
		<!-- Animated Background -->
		<div class="absolute inset-0">
			<!-- Animated lines -->
			<div ref="problemLines" class="absolute inset-0 opacity-10">
				<div
					v-for="i in 5"
					:key="i"
					class="absolute h-px bg-gradient-to-r from-purple-600/0 via-purple-600 to-purple-600/0 w-full"
					:style="{ top: `${i * 20}%` }"
				></div>
			</div>

			<!-- Floating particles -->
			<div class="absolute inset-0">
				<div
					v-for="i in 20"
					:key="i"
					class="absolute w-2 h-2 rounded-full"
					:class="[
						i % 2 === 0 ? 'bg-purple-500/20' : 'bg-blue-500/20',
					]"
					:style="{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						animation: `float ${5 + Math.random() * 5}s infinite`,
					}"
				></div>
			</div>
		</div>

		<div class="max-w-7xl mx-auto relative z-10">
			<!-- Header -->
			<div class="text-center mb-20">
				<h2
					ref="problemTitle"
					class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
				>
					Facing Digital Challenges?
				</h2>
				<p
					ref="problemSubtitle"
					class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto opacity-0"
				>
					Let's address the common hurdles that might be holding your
					business back.
				</p>
			</div>

			<!-- Problem Cards Grid -->
			<div class="grid md:grid-cols-2 gap-8 mt-12">
				<div
					v-for="(problem, index) in problems"
					:key="index"
					ref="problemCards"
					class="group relative p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl opacity-0 translate-y-8 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden"
				>
					<!-- Card Background Animation -->
					<div
						class="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
					></div>

					<!-- Problem Icon -->
					<div
						class="relative w-16 h-16 mb-6 text-purple-600 dark:text-purple-400 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500"
					>
						<component :is="problem.icon" class="w-full h-full" />
					</div>

					<!-- Problem Content -->
					<div class="relative space-y-4">
						<h3
							class="text-2xl font-bold text-gray-900 dark:text-white"
						>
							{{ problem.title }}
						</h3>
						<p class="text-gray-600 dark:text-gray-300">
							{{ problem.description }}
						</p>

						<!-- Impact Stats -->
						<div
							class="pt-4 border-t border-gray-200 dark:border-gray-700"
						>
							<div class="flex items-center space-x-2">
								<div
									class="text-sm text-gray-500 dark:text-gray-400"
								>
									Impact:
								</div>
								<div
									class="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
								>
									<div
										ref="impactBars"
										class="h-full bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"
										:style="{ width: '0%' }"
									></div>
								</div>
								<div
									class="text-sm font-medium text-purple-600 dark:text-purple-400"
								>
									{{ problem.impact }}%
								</div>
							</div>
						</div>

						<!-- Solution Preview -->
						<div
							class="overflow-hidden h-0 group-hover:h-16 transition-all duration-500"
						>
							<p
								class="text-sm text-gray-500 dark:text-gray-400 pt-4"
							>
								{{ problem.solution }}
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Call to Action -->
			<div ref="problemCTA" class="mt-16 text-center opacity-0">
				<button
					class="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-white rounded-xl hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
				>
					Discover Solutions
				</button>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useNuxtApp } from "#app"
import { onMounted, ref } from "vue"
// import { Clock, Server, TrendingDown, Layers } from 'lucide-react'
import {
	LucideClock,
	LucideLayers,
	LucideServer,
	LucideTrendingDown,
} from "#components"
// Refs
const problemTitle = ref(null)
const problemSubtitle = ref(null)
const problemCards = ref([])
const impactBars = ref([])
const problemCTA = ref(null)
const problemLines = ref(null)

// Problem data
const problems = [
	{
		icon: LucideClock,
		title: "Slow Time-to-Market",
		description:
			"Your competitors are launching features faster while your team struggles with lengthy development cycles.",
		impact: 85,
		solution:
			"Our rapid development approach can cut delivery time by up to 60%.",
	},
	{
		icon: LucideServer,
		title: "Technical Debt",
		description:
			"Outdated systems and patchwork solutions are holding back your growth and innovation potential.",
		impact: 75,
		solution:
			"We help modernize your stack while maintaining business continuity.",
	},
	{
		icon: LucideTrendingDown,
		title: "Lost Opportunities",
		description:
			"Poor user experience and slow loading times are causing potential customers to bounce.",
		impact: 90,
		solution:
			"Our optimization techniques can improve conversion rates by up to 40%.",
	},
	{
		icon: LucideLayers,
		title: "Integration Chaos",
		description:
			"Multiple disconnected systems creating data silos and efficiency bottlenecks.",
		impact: 80,
		solution:
			"We create seamless integrations that unify your business processes.",
	},
]

onMounted(() => {
	if (process.client) {
		const { $gsap } = useNuxtApp()

		// Animate background lines
		$gsap.to(problemLines.value.children, {
			xPercent: 100,
			duration: 10,
			ease: "none",
			repeat: -1,
			stagger: {
				each: 0.5,
				from: "random",
			},
		})

		// Create scroll-triggered timeline
		const tl = $gsap.timeline({
			scrollTrigger: {
				trigger: problemTitle.value,
				start: "top bottom-=100",
				end: "bottom center",
				toggleActions: "play none none reverse",
			},
		})

		// Animate title and subtitle
		tl.to(problemTitle.value, {
			opacity: 1,
			duration: 1,
			y: 0,
		}).to(
			problemSubtitle.value,
			{
				opacity: 1,
				duration: 1,
			},
			"-=0.5",
		)

		// Animate problem cards
		problemCards.value.forEach((card, index) => {
			$gsap.to(card, {
				scrollTrigger: {
					trigger: card,
					start: "top bottom-=50",
					toggleActions: "play none none reverse",
				},
				opacity: 1,
				y: 0,
				duration: 1,
				delay: index * 0.2,
			})
		})

		// Animate impact bars
		impactBars.value.forEach((bar, index) => {
			$gsap.to(bar, {
				scrollTrigger: {
					trigger: bar,
					start: "top bottom-=50",
				},
				width: `${problems[index].impact}%`,
				duration: 1.5,
				ease: "power2.out",
				delay: 0.5 + index * 0.2,
			})
		})

		// Animate CTA
		$gsap.to(problemCTA.value, {
			scrollTrigger: {
				trigger: problemCTA.value,
				start: "top bottom-=50",
			},
			opacity: 1,
			duration: 1,
			y: 0,
		})
	}
})
</script>

<style scoped>
@keyframes float {
	0%,
	100% {
		transform: translate(0, 0);
	}
	50% {
		transform: translate(10px, -10px);
	}
}
</style>
