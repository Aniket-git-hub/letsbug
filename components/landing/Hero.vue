<template>
	<section
		class="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
	>
		<!-- Animated Background Elements -->
		<div class="absolute inset-0 overflow-hidden">
			<!-- Floating Particles -->
			<div
				class="absolute inset-0 opacity-[0.03]"
				ref="particlesContainer"
			>
				<div
					v-for="i in 150"
					:key="i"
					class="absolute bg-black dark:bg-white rounded-full transition-transform duration-1000"
					:class="[
						i % 3 === 0
							? 'w-1 h-1'
							: i % 3 === 1
							? 'w-2 h-2'
							: 'w-3 h-3',
						`opacity-${Math.random() > 0.5 ? '50' : '30'}`,
					]"
					:style="{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						transform: `scale(${Math.random() * 0.5 + 0.5})`,
					}"
				></div>
			</div>

			<!-- Gradient Orbs -->
			<div
				class="absolute -left-32 -top-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
				ref="orb1"
			></div>
			<div
				class="absolute -right-32 -bottom-32 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
				ref="orb2"
			></div>
			<div
				class="absolute left-1/2 top-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-2xl"
				ref="orb3"
			></div>
		</div>

		<!-- Content Container -->
		<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center space-y-8 max-w-4xl mx-auto">
				<!-- Animated Logo -->
				<div ref="logo" class="opacity-0 mb-8">
					<div class="inline-block relative">
						<span
							class="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
						>
							Letsbug
						</span>
						<span
							class="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-ping"
						></span>
					</div>
				</div>

				<!-- Main Heading with Gradient -->
				<h1
					ref="mainHeading"
					class="opacity-0 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
				>
					<span
						class="inline-block bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:from-purple-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
					>
						Transform Your Vision
					</span>
					<br />
					<span class="inline-block text-gray-900 dark:text-white">
						into Digital Reality
					</span>
				</h1>

				<!-- Subtitle with Typing Effect -->
				<p
					ref="subtitle"
					class="opacity-0 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
				>
					At Letsbug, we craft
					<span
						ref="typingText"
						class="text-purple-600 dark:text-purple-400"
					></span>
				</p>

				<!-- Supporting Text -->
				<p
					ref="supportText"
					class="opacity-0 text-base md:text-lg text-gray-500 dark:text-gray-400"
				>
					From eCommerce to management systems, we partner with you to
					build custom digital solutions tailored to your needs.
				</p>

				<!-- CTA Buttons -->
				<div
					ref="ctaButtons"
					class="opacity-0 flex flex-col sm:flex-row gap-4 justify-center"
				>
					<!-- Primary CTA -->
					<button
						class="group relative px-8 py-4 bg-purple-600 dark:bg-purple-500 text-white rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 overflow-hidden"
					>
						<span class="relative z-10">Let's Build Together</span>
						<div
							class="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						></div>
						<!-- Sparkles Effect -->
						<div class="absolute inset-0 pointer-events-none">
							<div
								class="absolute inset-0 animate-sparkle-1"
							></div>
							<div
								class="absolute inset-0 animate-sparkle-2"
							></div>
						</div>
					</button>

					<!-- Secondary CTA -->
					<button
						class="group px-8 py-4 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-xl transition-all duration-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
					>
						<span
							class="group-hover:translate-x-1 transition-transform duration-300 inline-block"
						>
							Learn More
							<span
								class="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
								>→</span
							>
						</span>
					</button>
				</div>

				<!-- Tech Stack Icons -->
				<div
					ref="techStack"
					class="opacity-0 flex justify-center gap-6 mt-12"
				>
					<div
						v-for="i in 5"
						:key="i"
						class="w-12 h-12 rounded-lg bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
						:class="{
							'hover:rotate-12': i % 2 === 0,
							'hover:-rotate-12': i % 2 !== 0,
						}"
					>
						<div
							class="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded"
						></div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useNuxtApp } from "#app"
import { onMounted, ref } from "vue"

// Refs for animations
const logo = ref(null)
const particlesContainer = ref(null)
const orb1 = ref(null)
const orb2 = ref(null)
const orb3 = ref(null)
const mainHeading = ref(null)
const subtitle = ref(null)
const typingText = ref(null)
const supportText = ref(null)
const ctaButtons = ref(null)
const techStack = ref(null)

// Typing effect text options
const typingTexts = [
	"websites that convert",
	"apps that scale",
	"experiences that delight",
	"solutions that matter",
]

onMounted(() => {
	if (process.client) {
		const { $gsap: gsap } = useNuxtApp()

		// Initialize typing effect
		let currentTextIndex = 0
		const typeText = async () => {
			const text = typingTexts[currentTextIndex]
			const chars = text.split("")

			// Clear previous text
			typingText.value.textContent = ""

			// Type each character
			for (const char of chars) {
				await new Promise((resolve) => setTimeout(resolve, 100))
				typingText.value.textContent += char
			}

			// Wait before erasing
			await new Promise((resolve) => setTimeout(resolve, 2000))

			// Erase text
			while (typingText.value.textContent.length > 0) {
				await new Promise((resolve) => setTimeout(resolve, 50))
				typingText.value.textContent =
					typingText.value.textContent.slice(0, -1)
			}

			// Move to next text
			currentTextIndex = (currentTextIndex + 1) % typingTexts.length
			typeText()
		}

		// Initial animations timeline
		const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

		// Animate logo and content
		tl.to(logo.value, {
			opacity: 1,
			y: 0,
			duration: 1,
		})
			.to(mainHeading.value, {
				opacity: 1,
				y: 0,
				duration: 1,
				clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
			})
			.to(
				subtitle.value,
				{
					opacity: 1,
					y: 0,
					duration: 1,
				},
				"-=0.5",
			)
			.to(
				supportText.value,
				{
					opacity: 1,
					y: 0,
					duration: 1,
				},
				"-=0.5",
			)
			.to(
				ctaButtons.value,
				{
					opacity: 1,
					y: 0,
					duration: 1,
				},
				"-=0.5",
			)
			.to(
				techStack.value,
				{
					opacity: 1,
					y: 0,
					duration: 1,
				},
				"-=0.3",
			)

		// Start typing effect
		typeText()

		// Animate background orbs
		gsap.to([orb1.value, orb2.value, orb3.value], {
			duration: 20,
			rotation: 360,
			repeat: -1,
			ease: "none",
			stagger: 2,
		})

		// Animate particles
		const particles = particlesContainer.value.children
		gsap.to(particles, {
			y: "random(-20, 20)",
			x: "random(-20, 20)",
			duration: "random(2, 4)",
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
			stagger: {
				amount: 2,
				from: "random",
			},
		})

		// Enhanced mouse parallax effect
		document.addEventListener("mousemove", (e) => {
			const { clientX, clientY } = e
			const { innerWidth, innerHeight } = window
			const x = (clientX / innerWidth - 0.5) * 20
			const y = (clientY / innerHeight - 0.5) * 20

			gsap.to([orb1.value, orb2.value], {
				x: x * 2,
				y: y * 2,
				duration: 1,
				ease: "power2.out",
			})

			gsap.to(orb3.value, {
				x: -x,
				y: -y,
				duration: 1.5,
				ease: "power2.out",
			})

			gsap.to(particlesContainer.value, {
				x: x * 0.5,
				y: y * 0.5,
				duration: 1,
				ease: "power2.out",
			})
		})
	}
})
</script>

<style>
@keyframes sparkle-1 {
	0%,
	100% {
		transform: scale(0);
		opacity: 0;
	}
	50% {
		transform: scale(1);
		opacity: 0.5;
	}
}

@keyframes sparkle-2 {
	0%,
	100% {
		transform: scale(1);
		opacity: 0.5;
	}
	50% {
		transform: scale(0);
		opacity: 0;
	}
}

.animate-sparkle-1 {
	animation: sparkle-1 2s infinite;
	background: radial-gradient(
		circle,
		rgba(255, 255, 255, 0.8) 0%,
		rgba(255, 255, 255, 0) 70%
	);
}

.animate-sparkle-2 {
	animation: sparkle-2 2s infinite;
	animation-delay: 1s;
	background: radial-gradient(
		circle,
		rgba(255, 255, 255, 0.8) 0%,
		rgba(255, 255, 255, 0) 70%
	);
}
</style>
