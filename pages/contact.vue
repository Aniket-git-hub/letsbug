<template>
	<div
		class="min-h-screen bg-gray-50/50 dark:bg-gray-900/50 relative custom-scrollbar overflow-hidden"
	>
		<!-- Custom cursor -->
		<div ref="cursor" class="cursor-follower"></div>
		<div ref="cursorDot" class="cursor-dot"></div>

		<!-- Floating Elements -->
		<div
			ref="floatingContainer"
			class="absolute inset-0 pointer-events-none"
		>
			<div v-for="n in 20" :key="n" class="floating-element absolute">
				<div
					class="w-4 h-4 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-20"
				></div>
			</div>
		</div>

		<!-- 3D Grid Background -->
		<div ref="grid3d" class="absolute inset-0 opacity-[0.05]">
			<div class="grid-lines"></div>
		</div>

		<div class="max-w-7xl mx-auto px-4 py-24 relative z-10">
			<!-- Hero Section -->
			<div
				ref="heroSection"
				class="text-center mb-16 opacity-0 transform translate-y-8"
			>
				<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
					<span
						class="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 dark:from-purple-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient"
					>
						Let's Build Something
					</span>
					<span class="block text-gray-900 dark:text-white"
						>Extraordinary Together</span
					>
				</h1>
				<p
					class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
				>
					Reach out today to discuss how Letsbug can accelerate your
					digital growth. Whether it's a question, a project idea, or
					a partnership—our team is here to listen.
				</p>
			</div>

			<!-- Main Content Grid -->
			<div class="grid lg:grid-cols-2 gap-12 items-start">
				<!-- Contact Form -->
				<div
					ref="formSection"
					class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl opacity-0 transform -translate-x-8 relative group perspective"
				>
					<!-- 3D Form Container -->
					<div
						class="transform-gpu transition-transform duration-500 ease-out group-hover:scale-[1.02]"
					>
						<form @submit.prevent="handleSubmit" class="space-y-6">
							<!-- Name Input -->
							<div
								class="form-group"
								:class="{ focused: formFocus === 'name' }"
							>
								<label
									class="block text-gray-700 dark:text-gray-300 mb-2"
									>Name</label
								>
								<div class="relative">
									<User
										class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
									/>
									<input
										v-model="formData.name"
										type="text"
										class="form-input w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
										:class="{
											'border-red-500': errors.name,
										}"
										@focus="handleFocus('name')"
										@blur="handleBlur"
									/>
									<div class="input-highlight"></div>
								</div>
								<span
									v-if="errors.name"
									class="text-red-500 text-sm mt-1"
									>{{ errors.name }}</span
								>
							</div>

							<!-- Email Input -->
							<div
								class="form-group"
								:class="{ focused: formFocus === 'email' }"
							>
								<label
									class="block text-gray-700 dark:text-gray-300 mb-2"
									>Email</label
								>
								<div class="relative">
									<Mail
										class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
									/>
									<input
										v-model="formData.email"
										type="email"
										class="form-input w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
										:class="{
											'border-red-500': errors.email,
										}"
										@focus="handleFocus('email')"
										@blur="handleBlur"
									/>
									<div class="input-highlight"></div>
								</div>
								<span
									v-if="errors.email"
									class="text-red-500 text-sm mt-1"
									>{{ errors.email }}</span
								>
							</div>

							<!-- Phone Input -->
							<div
								class="form-group"
								:class="{ focused: formFocus === 'phone' }"
							>
								<label
									class="block text-gray-700 dark:text-gray-300 mb-2"
									>Phone (Optional)</label
								>
								<div class="relative">
									<Phone
										class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
									/>
									<input
										v-model="formData.phone"
										type="tel"
										class="form-input w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
										@focus="handleFocus('phone')"
										@blur="handleBlur"
									/>
									<div class="input-highlight"></div>
								</div>
							</div>

							<!-- Message Input -->
							<div
								class="form-group"
								:class="{ focused: formFocus === 'message' }"
							>
								<label
									class="block text-gray-700 dark:text-gray-300 mb-2"
									>Message</label
								>
								<div class="relative">
									<MessageSquare
										class="absolute left-4 top-4 w-5 h-5 text-gray-400"
									/>
									<textarea
										v-model="formData.message"
										rows="4"
										class="form-textarea w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
										:class="{
											'border-red-500': errors.message,
										}"
										@focus="handleFocus('message')"
										@blur="handleBlur"
									></textarea>
									<div class="input-highlight"></div>
								</div>
								<span
									v-if="errors.message"
									class="text-red-500 text-sm mt-1"
									>{{ errors.message }}</span
								>
							</div>

							<!-- Submit Button -->
							<button
								ref="submitButton"
								type="submit"
								class="submit-button w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-white rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 relative overflow-hidden group"
								:disabled="isSubmitting"
							>
								<span class="relative z-10">{{
									isSubmitting
										? "Sending..."
										: "Send Your Message"
								}}</span>
								<div
									class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
								></div>
							</button>

							<!-- Notification -->
							<Transition
								enter-active-class="transition duration-300 ease-out"
								enter-from-class="transform -translate-y-2 opacity-0"
								enter-to-class="transform translate-y-0 opacity-100"
								leave-active-class="transition duration-200 ease-in"
								leave-from-class="transform translate-y-0 opacity-100"
								leave-to-class="transform -translate-y-2 opacity-0"
							>
								<div
									v-if="notification.show"
									:class="{
										'bg-green-50 text-green-800 dark:bg-green-900/50 dark:text-green-300':
											notification.type === 'success',
										'bg-red-50 text-red-800 dark:bg-red-900/50 dark:text-red-300':
											notification.type === 'error',
									}"
									class="rounded-lg p-4 mt-6"
								>
									<div class="flex">
										<div class="flex-shrink-0">
											<CheckCircle
												v-if="
													notification.type ===
													'success'
												"
												class="h-5 w-5 text-green-400"
												aria-hidden="true"
											/>
											<XCircle
												v-else
												class="h-5 w-5 text-red-400"
												aria-hidden="true"
											/>
										</div>
										<div class="ml-3">
											<p class="text-sm font-medium">
												{{ notification.message }}
											</p>
										</div>
									</div>
								</div>
							</Transition>
						</form>
					</div>
				</div>

				<!-- Contact Information -->
				<div
					ref="infoSection"
					class="space-y-8 opacity-0 transform translate-x-8"
				>
					<!-- Contact Cards -->
					<div
						v-for="(info, index) in contactInfo"
						:key="index"
						:ref="
							(el) => {
								if (el) contactCards[index] = el
							}
						"
						class="contact-card bg-white dark:bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer"
					>
						<div class="flex items-center space-x-4">
							<div
								class="w-12 h-12 rounded-lg bg-purple-500/10 dark:bg-purple-400/10 flex items-center justify-center transform-gpu transition-transform duration-300 group-hover:rotate-12"
							>
								<component
									:is="info.icon"
									class="w-6 h-6 text-purple-600 dark:text-purple-400"
								/>
							</div>
							<div>
								<h3
									class="text-lg font-semibold text-gray-900 dark:text-white"
								>
									{{ info.title }}
								</h3>
								<p class="text-gray-600 dark:text-gray-300">
									{{ info.value }}
								</p>
							</div>
						</div>
					</div>

					<!-- Quick Response Message -->
					<div
						ref="responseMessage"
						class="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-6 opacity-0 transform translate-y-4"
					>
						<h3
							class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
						>
							Need help right now?
						</h3>
						<p class="text-gray-600 dark:text-gray-300">
							Our team responds within 24 hours!
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useNuxtApp } from "#app"
import {
	CheckCircle,
	Clock,
	Mail,
	MapPin,
	MessageSquare,
	Phone,
	User,
	XCircle,
} from "lucide-vue-next"
import { onBeforeUnmount, onMounted, ref } from "vue"

// SEO Configuration
useHead({
	title: "Contact Letsbug - Get in Touch | Professional Web Development Agency",
	meta: [
		{
			name: "description",
			content:
				"Contact Letsbug for professional web development services. Whether you need a new website, digital transformation, or technical consultation, our team is ready to help.",
		},
		{
			name: "keywords",
			content:
				"contact Letsbug, web development contact, hire web developers, digital agency contact, Aniket Singh contact, web development consultation, website project inquiry",
		},
		{
			property: "og:title",
			content:
				"Contact Letsbug - Get in Touch | Professional Web Development Agency",
		},
		{
			property: "og:description",
			content:
				"Ready to transform your digital presence? Contact Letsbug today for professional web development services and expert consultation.",
		},
		{ property: "og:type", content: "website" },
		{ property: "og:locale", content: "en_US" },
		{ name: "twitter:card", content: "summary_large_image" },
		{
			name: "twitter:title",
			content: "Contact Letsbug - Get in Touch",
		},
		{
			name: "twitter:description",
			content:
				"Ready to transform your digital presence? Contact Letsbug today for professional web development services and expert consultation.",
		},
		{ name: "robots", content: "index, follow" },
	],
	link: [{ rel: "canonical", href: "https://letsbug.in/contact" }],
	script: [
		{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ContactPage",
				name: "Contact Letsbug",
				description: "Contact page for Letsbug web development agency",
				url: "https://letsbug.in/contact",
				mainEntity: {
					"@type": "Organization",
					name: "Letsbug",
					contactPoint: {
						"@type": "ContactPoint",
						telephone: "+1 (123) 456-7890",
						email: "hello@letsbug.com",
						contactType: "customer service",
						availableLanguage: "English",
					},
				},
			}),
		},
	],
})

// Cursor refs
const cursor = ref(null)
const cursorDot = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)

// Form Data and UI State
const formData = ref({
	name: "",
	email: "",
	phone: "",
	message: "",
})

const errors = ref({})
const formFocus = ref(null)
const isSubmitting = ref(false)
const notification = ref({ show: false, message: "", type: "success" })

// Animation refs
const heroSection = ref(null)
const formSection = ref(null)
const infoSection = ref(null)
const submitButton = ref(null)
const grid3d = ref(null)
const contactCards = ref([])
const responseMessage = ref(null)
const floatingElements = ref([])

// Mouse position for effects
const mousePos = ref({ x: 0, y: 0 })

// Contact information
const contactInfo = [
	{
		icon: Mail,
		title: "Email",
		value: "hello@letsbug.com",
	},
	{
		icon: Phone,
		title: "Phone",
		value: "+1 (123) 456-7890",
	},
	{
		icon: MapPin,
		title: "Location",
		value: "Serving clients globally",
	},
	{
		icon: Clock,
		title: "Business Hours",
		value: "Mon-Fri: 9AM - 6PM EST",
	},
]

// Mouse follower effect
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

	floatingElements.value.forEach((el) => {
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

// Form interaction handlers
const handleFocus = (field) => {
	formFocus.value = field
}

const handleBlur = () => {
	formFocus.value = null
}

const createEmailTemplate = (data) => {
	return `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Message: ${data.message}
	`.trim()
}

const handleSubmit = async () => {
	errors.value = {}
	notification.value.show = false
	if (!formData.value.name) errors.value.name = "Name is required"
	if (!formData.value.email) errors.value.email = "Email is required"
	if (!formData.value.message) errors.value.message = "Message is required"

	if (Object.keys(errors.value).length === 0) {
		isSubmitting.value = true
		try {
			const template = createEmailTemplate(formData.value)
			const response = await fetch(
				"https://emailer-esi7.onrender.com/send-email",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						to: "singhdharmvir81@gmail.com",
						subject: "New feedback from " + formData.value.name,
						text: template,
					}),
				},
			)

			if (!response.ok) {
				throw new Error("Failed to send email")
			}

			// Reset form and show success message
			formData.value = {
				name: "",
				email: "",
				phone: "",
				message: "",
			}
			notification.value = {
				show: true,
				message:
					"Your message has been sent successfully! We will get back to you soon.",
				type: "success",
			}
		} catch (error) {
			console.error("Error sending email:", error)
			notification.value = {
				show: true,
				message: "Failed to send message. Please try again.",
				type: "error",
			}
		} finally {
			isSubmitting.value = false
		}
	}
}

// Initialize animations
onMounted(() => {
	const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
	gsap.registerPlugin(ScrollTrigger)

	// Initialize cursor and effects
	const cleanupMouseFollower = initMouseFollower(gsap)
	initGravityEffect(gsap)

	// Hero section animation
	gsap.to(heroSection.value, {
		opacity: 1,
		y: 0,
		duration: 1.2,
		ease: "power3.out",
	})

	// Form section animation
	gsap.to(formSection.value, {
		opacity: 1,
		x: 0,
		duration: 1,
		delay: 0.3,
		ease: "power3.out",
	})

	// Contact cards animation
	contactCards.value.forEach((card, index) => {
		gsap.to(card, {
			opacity: 1,
			x: 0,
			duration: 0.8,
			delay: 0.5 + index * 0.2,
			ease: "power3.out",
		})

		// Add hover animation
		card.addEventListener("mouseenter", () => {
			gsap.to(card, {
				scale: 1.05,
				y: -5,
				duration: 0.3,
				ease: "power2.out",
			})
		})

		card.addEventListener("mouseleave", () => {
			gsap.to(card, {
				scale: 1,
				y: 0,
				duration: 0.3,
				ease: "power2.out",
			})
		})
	})

	// Response message animation
	gsap.to(responseMessage.value, {
		opacity: 1,
		y: 0,
		duration: 0.8,
		delay: 1,
		ease: "power3.out",
	})

	// 3D Grid animation
	gsap.to(grid3d.value, {
		rotationX: 360,
		duration: 60,
		repeat: -1,
		ease: "none",
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
	z-index: 99999;
	mix-blend-mode: difference;
	will-change: transform;
	backdrop-filter: invert(1);
}

.cursor-dot {
	width: 8px;
	height: 8px;
	background: #4f46e5;
	border-radius: 50%;
	position: fixed;
	pointer-events: none;
	z-index: 99999;
	mix-blend-mode: difference;
	will-change: transform;
}

/* Hide default cursor */
* {
	cursor: none;
}

/* Form styles */
.form-group {
	position: relative;
	transition: all 0.3s ease;
}

.form-group.focused .input-highlight {
	width: 100%;
	opacity: 1;
}

.input-highlight {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 0;
	height: 2px;
	background: linear-gradient(to right, #4f46e5, #818cf8);
	opacity: 0;
	transition: all 0.3s ease;
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

/* Contact card styles */
.contact-card {
	transform-style: preserve-3d;
	perspective: 1000px;
}

/* Gradient animation */
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.animate-gradient {
	background-size: 200% auto;
	animation: gradient 4s linear infinite;
}

/* Submit button animation */
.submit-button::before {
	content: "";
	position: absolute;
	top: 0;
	left: -100%;
	width: 100%;
	height: 100%;
	background: linear-gradient(
		to right,
		transparent,
		rgba(255, 255, 255, 0.2),
		transparent
	);
	transition: 0.5s;
}

.submit-button:hover::before {
	left: 100%;
}

/* Responsive design */
@media (max-width: 768px) {
	.cursor-follower,
	.cursor-dot {
		display: none;
	}
	* {
		cursor: auto;
	}
	.floating-element,
	.grid-lines {
		display: none;
	}
}
</style>
