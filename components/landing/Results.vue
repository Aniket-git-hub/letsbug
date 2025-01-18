<template>
	<section
		class="relative py-32 px-4 bg-white dark:bg-gray-900 overflow-hidden"
	>
		<!-- Background Elements -->
		<div class="absolute inset-0">
			<!-- Animated Particles -->
			<div ref="particles" class="absolute inset-0 opacity-[0.05]">
				<div
					v-for="n in 50"
					:key="n"
					class="absolute w-2 h-2 rounded-full bg-current"
					:style="`top: ${Math.random() * 100}%; left: ${
						Math.random() * 100
					}%`"
				></div>
			</div>

			<!-- Gradient Overlay -->
			<div
				class="absolute inset-0 bg-gradient-to-tr from-purple-50/50 to-blue-50/50 dark:from-purple-900/50 dark:to-blue-900/50"
			></div>
		</div>

		<div class="max-w-7xl mx-auto relative z-10">
			<!-- Section Header -->
			<div class="text-center mb-20">
				<h2
					ref="resultsTitle"
					class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 opacity-0"
				>
					<span
						class="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
					>
						Real Results
					</span>
					<span class="block text-gray-900 dark:text-white"
						>That Drive Growth</span
					>
				</h2>
				<p
					ref="resultsSubtitle"
					class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto opacity-0"
				>
					Our solutions deliver measurable impact across various
					business metrics
				</p>
			</div>

			<!-- Metrics Grid -->
			<div class="grid md:grid-cols-3 gap-8 mb-20">
				<div
					v-for="(metric, index) in metrics"
					:key="index"
					:ref="
						(el) => {
							if (el) metricCards[index] = el
						}
					"
					class="relative bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg opacity-0"
				>
					<!-- Metric Value -->
					<div class="flex items-baseline mb-4">
						<span
							ref="counterRefs[index]"
							class="text-5xl font-bold text-purple-600 dark:text-purple-400"
							>0</span
						>
						<span class="text-2xl ml-1">{{ metric.suffix }}</span>
					</div>

					<!-- Metric Label -->
					<h3
						class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
					>
						{{ metric.label }}
					</h3>
					<p class="text-gray-600 dark:text-gray-300">
						{{ metric.description }}
					</p>

					<!-- Progress Bar -->
					<div
						class="absolute bottom-0 left-0 w-full h-1 bg-gray-100 dark:bg-gray-700"
					>
						<div
							ref="progressBars[index]"
							class="h-full bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"
							:style="{ width: '0%' }"
						></div>
					</div>
				</div>
			</div>

			<!-- Case Studies -->
			<div ref="caseStudies" class="opacity-0">
				<h3
					class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
				>
					Success Stories
				</h3>

				<div class="grid md:grid-cols-2 gap-8">
					<div
						v-for="(caseStudy, index) in caseStudiesArray"
						:key="index"
						:ref="
							(el) => {
								if (el) caseStudyCards[index] = el
							}
						"
						class="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
					>
						<!-- Before/After Image -->
						<div class="relative h-64 overflow-hidden">
							<img
								:src="caseStudy.beforeImage"
								class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
								alt="Before"
							/>
							<img
								:src="caseStudy.afterImage"
								class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
								alt="After"
							/>
						</div>

						<!-- Content -->
						<div class="p-6">
							<h4
								class="text-xl font-bold text-gray-900 dark:text-white mb-2"
							>
								{{ caseStudy.title }}
							</h4>
							<p class="text-gray-600 dark:text-gray-300 mb-4">
								{{ caseStudy.description }}
							</p>

							<!-- Results List -->
							<ul class="space-y-2">
								<li
									v-for="(
										result, rIndex
									) in caseStudy.results"
									:key="rIndex"
									class="flex items-center text-gray-600 dark:text-gray-300"
								>
									<TrendingUp
										class="w-5 h-5 text-green-500 mr-2"
									/>
									{{ result }}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useNuxtApp } from "#app"
import { TrendingUp } from "lucide-vue-next"
import { onMounted, ref } from "vue"

// Refs
const resultsTitle = ref(null)
const resultsSubtitle = ref(null)
const metricCards = ref([])
const counterRefs = ref([])
const progressBars = ref([])
const caseStudies = ref(null)
const caseStudyCards = ref([])
const particles = ref(null)

// Data
const metrics = [
	{
		value: 40,
		suffix: "%",
		label: "Efficiency Increase",
		description: "Average improvement in workflow efficiency",
	},
	{
		value: 2.5,
		suffix: "x",
		label: "Revenue Growth",
		description: "Average revenue multiplication for clients",
	},
	{
		value: 99.9,
		suffix: "%",
		label: "Uptime",
		description: "System availability and reliability",
	},
]

const caseStudiesArray = [
	{
		title: "E-commerce Revolution",
		description:
			"How we transformed an online store into a conversion machine",
		beforeImage: "https://placehold.co/600x400",
		afterImage: "https://placehold.co/600x400",
		results: [
			"156% increase in conversion rate",
			"43% reduction in cart abandonment",
			"89% faster page load times",
		],
	},
	{
		title: "MSME ERP Software",
		description:
			"How we developed a comprehensive ERP software for MSMEs to streamline their operations",
		beforeImage: "https://placehold.co/600x400",
		afterImage: "https://placehold.co/600x400",
		results: [
			"500+ MSMEs using our software",
			"20% reduction in operational costs",
			"40% increase in productivity",
		],
	},
]

onMounted(() => {
	const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
	gsap.registerPlugin(ScrollTrigger)

	// Animate particles
	gsap.to(particles.value.children, {
		y: "random(-100, 100)",
		x: "random(-100, 100)",
		duration: "random(3, 5)",
		repeat: -1,
		yoyo: true,
		ease: "none",
		stagger: {
			amount: 2,
			from: "random",
		},
	})

	// Animate title and subtitle
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: resultsTitle.value,
			start: "top bottom-=100",
		},
	})

	tl.to(resultsTitle.value, {
		opacity: 1,
		duration: 1,
	}).to(
		resultsSubtitle.value,
		{
			opacity: 1,
			duration: 1,
		},
		"-=0.5",
	)

	// Animate metrics
	metricCards.value.forEach((card, index) => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: card,
				start: "top bottom-=50",
			},
		})

		tl.to(card, {
			opacity: 1,
			duration: 1,
		}).to(
			progressBars.value[index],
			{
				width: `${metrics[index].value}%`,
				duration: 1.5,
				ease: "power2.out",
			},
			"-=0.5",
		)

		// Counter animation
		gsap.to(counterRefs.value[index], {
			innerHTML: metrics[index].value,
			duration: 2,
			snap: { innerHTML: 1 },
			scrollTrigger: {
				trigger: card,
				start: "top bottom-=50",
			},
		})
	})

	// Animate case studies
	gsap.to(caseStudies.value, {
		opacity: 1,
		duration: 1,
		scrollTrigger: {
			trigger: caseStudies.value,
			start: "top bottom-=100",
		},
	})

	// Animate case study cards
	caseStudyCards.value.forEach((card, index) => {
		gsap.from(card, {
			x: index % 2 === 0 ? -50 : 50,
			opacity: 0,
			duration: 1,
			scrollTrigger: {
				trigger: card,
				start: "top bottom-=50",
			},
		})
	})
})
</script>
