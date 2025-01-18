<template>
	<div
		ref="errorContainer"
		class="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 overflow-hidden"
	>
		<!-- Background Animation -->
		<div class="absolute inset-0">
			<!-- Grid Pattern -->
			<div class="absolute inset-0 opacity-[0.03]" ref="gridPattern">
				<div
					v-for="i in 100"
					:key="i"
					class="absolute bg-black dark:bg-white rounded-full transition-transform duration-1000"
					:class="[i % 3 === 0 ? 'w-1 h-1' : 'w-2 h-2']"
					:style="{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
						transform: `scale(${Math.random() * 0.5 + 0.5})`,
					}"
				></div>
			</div>

			<!-- Gradient Orbs -->
			<div
				class="absolute -left-32 -top-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
				ref="orb1"
			></div>
			<div
				class="absolute -right-32 -bottom-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
				ref="orb2"
			></div>
		</div>

		<!-- Content Container -->
		<div class="relative z-10 max-w-md mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center space-y-8">
				<!-- Glitch Effect Container -->
				<div class="relative mb-8" ref="glitchContainer">
					<!-- Error Code -->
					<h1
						ref="errorTitle"
						class="text-8xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent opacity-0"
					>
						{{ error?.statusCode || "404" }}
						<!-- Glitch Layers -->
						<span
							class="absolute inset-0 text-purple-600 dark:text-purple-400 opacity-0 glitch-layer-1"
						>
							{{ error?.statusCode || "404" }}
						</span>
						<span
							class="absolute inset-0 text-blue-600 dark:text-blue-400 opacity-0 glitch-layer-2"
						>
							{{ error?.statusCode || "404" }}
						</span>
					</h1>
				</div>

				<!-- Error Message -->
				<p
					ref="errorMessage"
					class="text-xl text-gray-600 dark:text-gray-300 opacity-0"
				>
					{{ error?.message || "Page not found" }}
				</p>

				<!-- Action Button -->
				<div ref="errorButton" class="opacity-0">
					<button
						@click="handleError"
						class="group relative px-8 py-4 bg-purple-600 dark:bg-purple-500 text-white rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 overflow-hidden"
					>
						<!-- Button Background -->
						<div
							class="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						></div>

						<!-- Button Content -->
						<span
							class="relative z-10 flex items-center justify-center gap-2"
						>
							<span>Return Home</span>
							<svg
								class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 7l5 5m0 0l-5 5m5-5H6"
								/>
							</svg>
						</span>

						<!-- Sparkle Effects -->
						<div class="absolute inset-0 pointer-events-none">
							<div
								class="absolute inset-0 animate-sparkle-1"
							></div>
							<div
								class="absolute inset-0 animate-sparkle-2"
							></div>
						</div>
					</button>
				</div>

				<!-- Decorative Elements -->
				<div
					ref="decorativeLines"
					class="absolute left-1/2 transform -translate-x-1/2 w-full max-w-sm opacity-0"
				>
					<div
						class="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
					></div>
					<div
						class="h-px mt-2 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
					></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useNuxtApp } from "#app"
import { onMounted, ref } from "vue"

const props = defineProps({
	error: Object,
})

// Refs
const errorContainer = ref(null)
const errorTitle = ref(null)
const errorMessage = ref(null)
const errorButton = ref(null)
const glitchContainer = ref(null)
const decorativeLines = ref(null)
const orb1 = ref(null)
const orb2 = ref(null)
const gridPattern = ref(null)

// Navigation handler
const handleError = () => {
	clearError()
	navigateTo("/")
}

onMounted(() => {
	if (process.client) {
		const { $gsap: gsap } = useNuxtApp()

		// Create glitch effect timeline
		const glitchTL = gsap.timeline({
			repeat: -1,
			repeatDelay: 4,
		})

		glitchTL
			.to(".glitch-layer-1", {
				opacity: 0.5,
				duration: 0.1,
				x: -5,
				y: 2,
			})
			.to(".glitch-layer-2", {
				opacity: 0.5,
				duration: 0.1,
				x: 5,
				y: -2,
			})
			.to(".glitch-layer-1, .glitch-layer-2", {
				opacity: 0,
				duration: 0.1,
				x: 0,
				y: 0,
			})

		// Initial animations timeline
		const mainTL = gsap.timeline({
			defaults: { ease: "power3.out" },
		})

		// Fade in container
		mainTL.from(errorContainer.value, {
			opacity: 0,
			duration: 1,
		})

		// Animate content
		mainTL
			.to(errorTitle.value, {
				opacity: 1,
				y: 0,
				duration: 0.8,
				ease: "back.out(1.7)",
			})
			.to(
				errorMessage.value,
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "back.out(1.7)",
				},
				"-=0.4",
			)
			.to(
				errorButton.value,
				{
					opacity: 1,
					y: 0,
					duration: 0.8,
					ease: "back.out(1.7)",
				},
				"-=0.4",
			)
			.to(
				decorativeLines.value,
				{
					opacity: 1,
					duration: 1,
				},
				"-=0.4",
			)

		// Animate background elements
		gsap.to([orb1.value, orb2.value], {
			rotation: 360,
			duration: 20,
			repeat: -1,
			ease: "none",
		})

		// Animate grid pattern
		const particles = gridPattern.value.children
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

		// Add mouse parallax effect
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

			gsap.to(gridPattern.value, {
				x: x * 0.5,
				y: y * 0.5,
				duration: 1,
				ease: "power2.out",
			})
		})
	}
})
</script>

<style scoped>
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
