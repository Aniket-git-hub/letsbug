<template>
	<div
		class="min-h-screen bg-gray-50 dark:bg-gray-900 relative custom-scrollbar"
	>
		<!-- Custom cursor -->
		<div ref="cursor" class="cursor-follower"></div>
		<div ref="cursorDot" class="cursor-dot"></div>

		<!-- Floating Elements -->
		<div
			ref="floatingContainer"
			class="absolute inset-0 pointer-events-none overflow-hidden"
		>
			<div v-for="n in 20" :key="n" class="floating-element absolute">
				<div
					class="w-4 h-4 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20"
				></div>
			</div>
		</div>

		<!-- Hero Section -->
		<section class="relative py-20 overflow-hidden">
			<div class="absolute inset-0">
				<!-- 3D Grid Background -->
				<div ref="grid3d" class="absolute inset-0 opacity-[0.05]">
					<div class="grid-lines"></div>
				</div>
				<!-- Gradient Overlay -->
				<div
					class="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80 dark:via-gray-900/50 dark:to-gray-900/80"
				></div>
			</div>

			<div class="max-w-7xl mx-auto px-4 relative z-10">
				<div ref="heroContent" class="text-center opacity-0">
					<h1 class="text-4xl md:text-6xl font-bold mb-6">
						<span
							class="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
						>
							A Partner in Growth,
						</span>
						<span class="block text-gray-900 dark:text-white">
							Not Just a Service Provider
						</span>
					</h1>
					<p
						class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
					>
						We believe in empowering businesses to achieve more
						through digital transformation and cutting-edge
						solutions.
					</p>
				</div>
			</div>
		</section>

		<!-- Our Story Section -->
		<section class="py-20 bg-white dark:bg-gray-800">
			<div class="max-w-7xl mx-auto px-4">
				<div
					ref="storyContent"
					class="grid md:grid-cols-2 gap-12 items-center opacity-0"
				>
					<div>
						<h2
							class="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
						>
							Our Story
						</h2>
						<p class="text-lg text-gray-600 dark:text-gray-300">
							Founded with a vision to bridge the gap between
							technology and business growth, Letsbug has been
							helping organizations of all sizes establish a
							robust online presence. From humble beginnings to
							serving clients worldwide, our journey has been
							fueled by passion and innovation.
						</p>
					</div>
					<div class="relative">
						<div class="aspect-square rounded-2xl overflow-hidden">
							<!-- Replace with your image -->
							<img
								src="https://avatars.githubusercontent.com/u/101374411?v=4"
								alt="Our Journey"
								class="w-full h-full object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Core Values Section -->
		<section class="py-20">
			<div class="max-w-7xl mx-auto px-4">
				<h2
					class="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
				>
					Our Core Values
				</h2>
				<div ref="valuesGrid" class="grid md:grid-cols-3 gap-8">
					<div
						v-for="(value, index) in coreValues"
						:key="index"
						:ref="
							(el) => {
								if (el) valueCards[index] = el
							}
						"
						class="bg-white dark:bg-gray-800 rounded-xl p-8 text-center opacity-0 translate-y-8"
					>
						<div class="mb-6">
							<component
								:is="value.icon"
								class="w-12 h-12 mx-auto text-purple-600 dark:text-purple-400"
							/>
						</div>
						<h3
							class="text-xl font-bold mb-4 text-gray-900 dark:text-white"
						>
							{{ value.title }}
						</h3>
						<p class="text-gray-600 dark:text-gray-300">
							{{ value.description }}
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Team Section -->
		<section class="py-20 bg-white dark:bg-gray-800">
			<div class="max-w-7xl mx-auto px-4">
				<h2
					class="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
				>
					Meet Our Team
				</h2>
				<div ref="teamGrid" class="grid md:grid-cols-3 gap-8">
					<div
						v-for="(member, index) in teamMembers"
						:key="index"
						:ref="
							(el) => {
								if (el) teamCards[index] = el
							}
						"
						class="group relative bg-gray-50 dark:bg-gray-900 rounded-xl p-6 text-center opacity-0"
					>
						<div class="mb-6">
							<div
								class="w-32 h-32 mx-auto rounded-full overflow-hidden"
							>
								<img
									:src="member.image"
									:alt="member.name"
									class="w-full h-full object-cover"
								/>
							</div>
						</div>
						<h3
							class="text-xl font-bold mb-2 text-gray-900 dark:text-white"
						>
							{{ member.name }}
						</h3>
						<p class="text-purple-600 dark:text-purple-400 mb-4">
							{{ member.role }}
						</p>
						<p class="text-gray-600 dark:text-gray-300">
							{{ member.description }}
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- CTA Section -->
		<section class="py-20">
			<div
				ref="ctaSection"
				class="max-w-4xl mx-auto px-4 text-center opacity-0"
			>
				<h2
					class="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white"
				>
					Inspired to take your business to the next level?
				</h2>
				<button
					class="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-white rounded-xl hover:scale-105 transition-transform duration-300"
				>
					Let's Make It Happen
				</button>
			</div>
		</section>
	</div>
</template>

<script setup>
import { useNuxtApp } from "#app"
import { Lightbulb, MessageSquare, Users } from "lucide-vue-next"
import { onBeforeUnmount, onMounted, ref } from "vue"

// Cursor refs
const cursor = ref(null)
const cursorDot = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)

// Existing refs
const heroContent = ref(null)
const storyContent = ref(null)
const valueCards = ref([])
const teamCards = ref([])
const ctaSection = ref(null)

// Data
const coreValues = [
	{
		icon: Users,
		title: "Partnership",
		description: "We grow together, ensuring your success is our success.",
	},
	{
		icon: Lightbulb,
		title: "Innovation",
		description: "Cutting-edge solutions for modern business challenges.",
	},
	{
		icon: MessageSquare,
		title: "Transparency",
		description: "Open communication and clarity at every step.",
	},
]

const teamMembers = [
	{
		name: "Aniket Singh",
		role: "Founder",
		description:
			"Half a decade of industry experience in digital solutions.",
		image: "https://avatars.githubusercontent.com/u/101374411?v=4",
	},
	{
		name: "Swastik Lanjeware",
		role: "Senior Developer",
		description: "Expert in creating scalable web applications.",
		image: "https://avatars.githubusercontent.com/u/101374411?v=4",
	},
	{
		name: "Tanisha Singh",
		role: "CTO",
		description: "Leading technical innovation and strategic development.",
		image: "https://avatars.githubusercontent.com/u/101374411?v=4",
	},
]

// Mouse position for gravity effect
const mousePos = ref({ x: 0, y: 0 })
const floatingElements = ref([])
const grid3d = ref(null)

// Mouse follower effect with fixed GSAP reference
const initMouseFollower = (gsap) => {
	const updateCursor = (e) => {
		mouseX.value = e.clientX
		mouseY.value = e.clientY
		mousePos.value = { x: e.clientX, y: e.clientY }

		gsap.to(cursor.value, {
			x: mouseX.value,
			y: mouseY.value,
			duration: 0.2,
		})

		gsap.to(cursorDot.value, {
			x: mouseX.value,
			y: mouseY.value,
			duration: 0.1,
		})
	}

	window.addEventListener("mousemove", updateCursor)
	return () => window.removeEventListener("mousemove", updateCursor)
}

// Gravity physics for floating elements
const initGravityEffect = (gsap) => {
	const elements = document.querySelectorAll(".floating-element")
	floatingElements.value = Array.from(elements)

	floatingElements.value.forEach((el, i) => {
		const x = Math.random() * window.innerWidth
		const y = Math.random() * window.innerHeight

		gsap.set(el, {
			x,
			y,
			scale: Math.random() * 0.5 + 0.5,
		})

		animateElement(el, gsap)
	})
}

const animateElement = (el, gsap) => {
	const duration = Math.random() * 3 + 2
	const xDistance = (Math.random() - 0.5) * 100
	const yDistance = (Math.random() - 0.5) * 100

	gsap.to(el, {
		x: `+=${xDistance}`,
		y: `+=${yDistance}`,
		duration,
		ease: "power1.inOut",
		onComplete: () => animateElement(el, gsap),
	})
}

// 3D Grid Animation
const init3DGrid = (gsap) => {
	if (!grid3d.value) return

	gsap.to(grid3d.value, {
		rotationX: 360,
		rotationY: 360,
		duration: 30,
		repeat: -1,
		ease: "none",
	})
}

// Enhanced hover effects
const initHoverEffects = (gsap) => {
	const interactiveElements = document.querySelectorAll(
		"button, a, input, textarea, .team-card",
	)

	interactiveElements.forEach((element) => {
		element.addEventListener("mouseenter", () => {
			gsap.to(cursor.value, {
				scale: 1.5,
				duration: 0.3,
				backgroundColor: "rgba(79, 70, 229, 0.1)",
				borderColor: "#4f46e5",
			})

			// 3D tilt effect for cards
			if (element.classList.contains("team-card")) {
				gsap.to(element, {
					rotationY:
						((mousePos.value.x - window.innerWidth / 2) /
							window.innerWidth) *
						20,
					rotationX:
						((mousePos.value.y - window.innerHeight / 2) /
							window.innerHeight) *
						20,
					duration: 0.3,
				})
			}
		})

		element.addEventListener("mouseleave", () => {
			gsap.to(cursor.value, {
				scale: 1,
				duration: 0.3,
				backgroundColor: "transparent",
				borderColor: "#4f46e5",
			})

			if (element.classList.contains("team-card")) {
				gsap.to(element, {
					rotationY: 0,
					rotationX: 0,
					duration: 0.3,
				})
			}
		})
	})
}

onMounted(() => {
	const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
	gsap.registerPlugin(ScrollTrigger)

	// Initialize all animations
	const cleanupMouseFollower = initMouseFollower(gsap)
	initGravityEffect(gsap)
	init3DGrid(gsap)
	initHoverEffects(gsap)

	// Hero Animation with enhanced effects
	gsap.to(heroContent.value, {
		opacity: 1,
		y: 0,
		duration: 1.2,
		ease: "power3.out",
		scrollTrigger: {
			trigger: heroContent.value,
			start: "top center",
		},
	})

	// Story Section Animation with parallax
	gsap.to(storyContent.value, {
		opacity: 1,
		y: 0,
		duration: 1,
		scrollTrigger: {
			trigger: storyContent.value,
			start: "top bottom-=100",
			scrub: 1,
		},
	})

	// Value Cards Animation with stagger
	valueCards.value.forEach((card, index) => {
		gsap.to(card, {
			opacity: 1,
			y: 0,
			duration: 0.8,
			delay: index * 0.2,
			ease: "back.out(1.7)",
			scrollTrigger: {
				trigger: card,
				start: "top bottom-=100",
				toggleActions: "play none none reverse",
			},
		})
	})

	// Team Cards Animation with hover effect
	teamCards.value.forEach((card, index) => {
		// Initial animation
		gsap.to(card, {
			opacity: 1,
			scale: 1,
			duration: 0.8,
			delay: index * 0.2,
			ease: "power3.out",
			scrollTrigger: {
				trigger: card,
				start: "top bottom-=100",
				toggleActions: "play none none reverse",
			},
		})

		// Hover animation
		card.addEventListener("mouseenter", () => {
			gsap.to(card, {
				y: -10,
				scale: 1.05,
				duration: 0.3,
				ease: "power2.out",
			})
		})

		card.addEventListener("mouseleave", () => {
			gsap.to(card, {
				y: 0,
				scale: 1,
				duration: 0.3,
				ease: "power2.out",
			})
		})
	})

	// CTA Animation with pulse effect
	gsap.to(ctaSection.value, {
		opacity: 1,
		duration: 1,
		scrollTrigger: {
			trigger: ctaSection.value,
			start: "top bottom-=100",
		},
		onComplete: () => {
			// Add subtle pulse animation to CTA button
			const ctaButton = ctaSection.value.querySelector("button")
			gsap.to(ctaButton, {
				scale: 1.05,
				duration: 1.5,
				repeat: -1,
				yoyo: true,
				ease: "power1.inOut",
			})
		},
	})

	// Cleanup
	onBeforeUnmount(() => {
		cleanupMouseFollower()
	})
})
</script>

<style scoped>
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

/* Enhanced hover effects */
.group {
	transition: all 0.3s ease;
}

.group:hover {
	transform: translateY(-5px);
}

/* Card hover effects */
.team-card {
	transition: all 0.3s ease;
}

.team-card:hover {
	transform: translateY(-10px) scale(1.02);
	box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
		0 8px 10px -6px rgb(0 0 0 / 0.1);
}

/* 3D Grid styles */
.grid-lines {
	background: linear-gradient(
				90deg,
				rgba(79, 70, 229, 0.1) 1px,
				transparent 1px
			)
			0 0 / 50px 50px,
		linear-gradient(rgba(79, 70, 229, 0.1) 1px, transparent 1px) 0 0 / 50px
			50px;
	transform: perspective(1000px) rotateX(60deg);
	transform-style: preserve-3d;
	height: 100%;
}

/* Floating elements */
.floating-element {
	will-change: transform;
	transform-style: preserve-3d;
	backface-visibility: hidden;
}

/* Team card 3D effect */
.team-card {
	transform-style: preserve-3d;
	perspective: 1000px;
}

.team-card > * {
	transform-style: preserve-3d;
}

/* Enhanced cursor styles */
.cursor-follower {
	backdrop-filter: invert(1);
	mix-blend-mode: difference;
	will-change: transform;
	z-index: 99999;
}

.cursor-dot {
	will-change: transform;
	z-index: 99999;
}

/* Responsive design */
@media (max-width: 768px) {
	.floating-element {
		display: none;
	}
	.grid-lines {
		display: none;
	}
}
</style>
