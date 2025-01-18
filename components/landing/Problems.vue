<template>
	<section
		class="relative py-24 px-4 bg-white dark:bg-gray-900 overflow-hidden"
	>
		<!-- Animated Background Elements -->
		<div class="absolute inset-0">
			<!-- Gradient Line Path -->
			<svg class="absolute w-full h-full" ref="pathSvg">
				<path
					ref="gradientPath"
					d="M0,100 Q400,150 800,100 T1600,100"
					fill="none"
					stroke="url(#gradientLine)"
					stroke-width="2"
					stroke-dasharray="5,5"
					class="opacity-20"
				/>
				<defs>
					<linearGradient
						id="gradientLine"
						x1="0%"
						y1="0%"
						x2="100%"
						y2="0%"
					>
						<stop offset="0%" style="stop-color: #9333ea" />
						<stop offset="50%" style="stop-color: #3b82f6" />
						<stop offset="100%" style="stop-color: #9333ea" />
					</linearGradient>
				</defs>
			</svg>
		</div>

		<div class="max-w-7xl mx-auto relative z-10">
			<!-- Main Content -->
			<div class="grid lg:grid-cols-2 gap-16 items-center">
				<!-- Left Column - Problem Statement -->
				<div class="space-y-8">
					<h2
						ref="problemTitle"
						class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white opacity-0 transform translate-y-8"
					>
						Is Your Business Stuck with
						<span
							class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"
						>
							Inefficient Systems?
						</span>
					</h2>

					<!-- Problem Cards -->
					<div class="space-y-6">
						<div
							v-for="(problem, index) in problems"
							:key="index"
							ref="problemCards"
							class="relative p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg opacity-0 transform translate-x-8 hover:shadow-xl transition-all duration-300 cursor-pointer group"
						>
							<!-- Animated Border -->
							<div
								class="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]"
							>
								<div
									class="h-full w-full bg-white dark:bg-gray-800 rounded-xl"
								></div>
							</div>

							<div class="relative flex gap-4">
								<!-- Icon Container -->
								<div class="flex-shrink-0">
									<div
										class="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex items-center justify-center"
									>
										<component
											:is="problem.icon"
											class="w-6 h-6 text-purple-600 dark:text-purple-400"
										/>
									</div>
								</div>

								<!-- Content -->
								<div>
									<h3
										class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
									>
										{{ problem.title }}
									</h3>
									<p class="text-gray-600 dark:text-gray-300">
										{{ problem.description }}
									</p>
								</div>

								<!-- Hover Indicator -->
								<div
									class="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-4 transition-all duration-300"
								>
									<LucideArrowRight
										class="w-5 h-5 text-purple-600 dark:text-purple-400"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Right Column - Interactive Illustration -->
				<div ref="illustration" class="relative opacity-0">
					<!-- Main Circle -->
					<div class="relative w-full aspect-square max-w-lg mx-auto">
						<div
							class="absolute inset-0 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50"
							ref="mainCircle"
						>
							<!-- Orbital Circles -->
							<div
								v-for="(orbit, index) in 3"
								:key="index"
								class="absolute inset-0 rounded-full border-2 border-dashed border-gray-200 dark:border-gray-700"
								:style="{
									transform: `scale(${
										1 + index * 0.15
									}) rotate(${index * 45}deg)`,
								}"
								ref="orbits"
							>
								<!-- Orbital Points -->
								<div
									class="absolute w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-400 shadow-lg shadow-purple-600/50 dark:shadow-purple-400/50"
									:style="{
										left: '50%',
										top: '-8px',
										transform: 'translateX(-50%)',
									}"
									ref="orbitalPoints"
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useNuxtApp } from "#app"
import {
	LucideBarChart,
	LucideClock,
	LucideCloud,
	LucideRefreshCw,
} from "#components"

import { onMounted, ref } from "vue"

const problems = [
	{
		icon: LucideClock,
		title: "Time-Consuming Manual Processes",
		description:
			"Hours lost to repetitive tasks and manual data entry that could be automated.",
	},
	{
		icon: LucideCloud,
		title: "Unreliable Infrastructure",
		description:
			"Frequent downtimes and slow performance affecting your business operations.",
	},
	{
		icon: LucideBarChart,
		title: "Limited Growth Potential",
		description:
			"Current systems unable to scale with your growing business needs.",
	},
	{
		icon: LucideRefreshCw,
		title: "Integration Challenges",
		description:
			"Disconnected systems creating data silos and inefficient workflows.",
	},
]

// Animation refs
const problemTitle = ref(null)
const problemCards = ref([])
const illustration = ref(null)
const mainCircle = ref(null)
const orbits = ref([])
const orbitalPoints = ref([])
const gradientPath = ref(null)
const pathSvg = ref(null)

onMounted(() => {
	if (process.client) {
		const { $gsap } = useNuxtApp()

		// Initial animations
		const tl = $gsap.timeline({
			scrollTrigger: {
				trigger: problemTitle.value,
				start: "top bottom-=100",
				end: "bottom center",
				toggleActions: "play none none reverse",
			},
		})

		// Animate title
		tl.to(problemTitle.value, {
			opacity: 1,
			y: 0,
			duration: 1,
			ease: "power3.out",
		})

			// Animate problem cards with stagger
			.to(
				problemCards.value,
				{
					opacity: 1,
					x: 0,
					duration: 0.8,
					stagger: 0.2,
					ease: "power3.out",
				},
				"-=0.5",
			)

			// Animate illustration
			.to(
				illustration.value,
				{
					opacity: 1,
					duration: 1,
				},
				"-=0.8",
			)

		// Rotating orbits animation
		orbits.value.forEach((orbit, index) => {
			$gsap.to(orbit, {
				rotation: "+=360",
				duration: 20 + index * 5,
				repeat: -1,
				ease: "none",
			})
		})

		// Pulsing orbital points
		orbitalPoints.value.forEach((point) => {
			$gsap.to(point, {
				scale: 1.5,
				duration: 1,
				repeat: -1,
				yoyo: true,
				ease: "power1.inOut",
			})
		})

		// Gradient line animation
		$gsap.to(gradientPath.value, {
			strokeDashoffset: -20,
			duration: 15,
			repeat: -1,
			ease: "none",
		})

		// Mouse interaction with main circle
		document.addEventListener("mousemove", (e) => {
			const { clientX, clientY } = e
			const { innerWidth, innerHeight } = window
			const x = (clientX / innerWidth - 0.5) * 20
			const y = (clientY / innerHeight - 0.5) * 20

			$gsap.to(mainCircle.value, {
				x: x,
				y: y,
				duration: 1,
				ease: "power2.out",
			})
		})
	}
})
</script>
