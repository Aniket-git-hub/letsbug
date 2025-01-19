<template>
	<section
		class="relative py-32 px-4 bg-gray-50/50 dark:bg-gray-900/50 overflow-hidden"
	>
		<!-- Animated Background -->
		<div class="absolute inset-0">
			<!-- Floating Particles -->
			<div ref="particles" class="absolute inset-0 opacity-[0.05]">
				<div
					v-for="n in 50"
					:key="n"
					class="particle absolute w-2 h-2 rounded-full bg-current"
					:style="{
						left: `${Math.random() * 100}%`,
						top: `${Math.random() * 100}%`,
					}"
				></div>
			</div>

			<!-- Gradient Overlay -->
			<div
				class="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10"
			></div>
		</div>

		<div class="max-w-7xl mx-auto relative z-10">
			<!-- Section Header -->
			<div class="text-center mb-16">
				<h2
					ref="contactTitle"
					class="text-4xl md:text-5xl font-bold mb-6 opacity-0"
				>
					<span
						class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
					>
						Let's Create
					</span>
					<span class="block text-gray-900 dark:text-white"
						>Something Amazing</span
					>
				</h2>
				<p
					ref="contactSubtitle"
					class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto opacity-0"
				>
					Ready to transform your digital presence? Let's start a
					conversation about your vision.
				</p>
			</div>

			<!-- Contact Grid -->
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<!-- Contact Form -->
				<div
					ref="contactForm"
					class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl opacity-0 translate-x-8"
				>
					<form @submit.prevent="handleSubmit" class="space-y-6">
						<div class="space-y-4">
							<div class="relative">
								<input
									type="text"
									id="name"
									v-model="formData.name"
									class="peer w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-transparent outline-none transition-all duration-300 focus:border-purple-500 dark:focus:border-purple-400"
									:class="{
										'border-red-500 dark:border-red-500':
											errors.name,
									}"
									required
								/>
								<label
									for="name"
									class="absolute left-2 -top-2.5 px-2 bg-white dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300"
								>
									Your Name
								</label>
								<span
									v-if="errors.name"
									class="text-red-500 text-sm mt-1"
									>{{ errors.name }}</span
								>
							</div>

							<div class="relative">
								<input
									type="email"
									id="email"
									v-model="formData.email"
									class="peer w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-transparent outline-none transition-all duration-300 focus:border-purple-500 dark:focus:border-purple-400"
									:class="{
										'border-red-500 dark:border-red-500':
											errors.email,
									}"
									required
								/>
								<label
									for="email"
									class="absolute left-2 -top-2.5 px-2 bg-white dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300"
								>
									Email Address
								</label>
								<span
									v-if="errors.email"
									class="text-red-500 text-sm mt-1"
									>{{ errors.email }}</span
								>
							</div>

							<div class="relative">
								<select
									id="service"
									v-model="formData.service"
									class="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-transparent outline-none transition-all duration-300 focus:border-purple-500 dark:focus:border-purple-400"
								>
									<option value="">Select a Service</option>
									<option
										v-for="service in services"
										:key="service"
										:value="service"
									>
										{{ service }}
									</option>
								</select>
							</div>

							<div class="relative">
								<textarea
									id="message"
									v-model="formData.message"
									rows="4"
									class="peer w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-transparent outline-none transition-all duration-300 focus:border-purple-500 dark:focus:border-purple-400"
									:class="{
										'border-red-500 dark:border-red-500':
											errors.message,
									}"
									required
								></textarea>
								<label
									for="message"
									class="absolute left-2 -top-2.5 px-2 bg-white dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300"
								>
									Your Message
								</label>
								<span
									v-if="errors.message"
									class="text-red-500 text-sm mt-1"
									>{{ errors.message }}</span
								>
							</div>
						</div>

						<button
							type="submit"
							class="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
							:disabled="isSubmitting"
						>
							{{ isSubmitting ? "Sending..." : "Send Message" }}
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
												notification.type === 'success'
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

				<!-- Contact Information -->
				<div
					ref="contactInfo"
					class="space-y-8 opacity-0 translate-x-8"
				>
					<div
						v-for="(info, index) in contactInfoArray"
						:key="index"
						:ref="
							(el) => {
								if (el) infoCards[index] = el
							}
						"
						class="group bg-white dark:bg-gray-800 rounded-xl p-6 transform hover:-translate-y-1 transition-all duration-300"
					>
						<div class="flex items-center space-x-4">
							<div
								class="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center"
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
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { useNuxtApp } from "#app"
import { Mail, MapPin, Phone } from "lucide-vue-next"
import { onMounted, ref } from "vue"

// Refs
const contactTitle = ref(null)
const contactSubtitle = ref(null)
const contactForm = ref(null)
const contactInfo = ref(null)
const particles = ref(null)
const infoCards = ref([])

// Form Data and UI State
const formData = ref({
	name: "",
	email: "",
	service: "",
	message: "",
})

const errors = ref({})
const isSubmitting = ref(false)
const notification = ref({ show: false, message: "", type: "success" })

// Services
const services = [
	"Web Development",
	"E-commerce Solutions",
	"Custom Systems",
	"Hosting Services",
]

// Contact Information
const contactInfoArray = [
	{
		icon: Mail,
		title: "Email Us",
		value: "singhdharmvir81@gmail.com",
	},
	{
		icon: Phone,
		title: "Call Us",
		value: "+91 7559410568",
	},
	{
		icon: MapPin,
		title: "Visit Us",
		value: "Pune, Maharashtra, India",
	},
]

const createEmailTemplate = (data) => {
	return `
Name: ${data.name}
Email: ${data.email}
Service: ${data.service || "Not selected"}
Message: ${data.message}
	`.trim()
}

// Form Submit Handler
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
				service: "",
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

onMounted(() => {
	const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()
	gsap.registerPlugin(ScrollTrigger)

	// Animate particles
	const particleElements = particles.value.children
	Array.from(particleElements).forEach((particle) => {
		gsap.to(particle, {
			x: "random(-100, 100)",
			y: "random(-100, 100)",
			duration: "random(2, 4)",
			repeat: -1,
			yoyo: true,
			ease: "none",
		})
	})

	// Animate section content
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: contactTitle.value,
			start: "top bottom-=100",
			end: "bottom center",
			toggleActions: "play none none reverse",
		},
	})

	tl.to(contactTitle.value, {
		opacity: 1,
		duration: 1,
	})
		.to(
			contactSubtitle.value,
			{
				opacity: 1,
				duration: 1,
			},
			"-=0.5",
		)
		.to(
			contactForm.value,
			{
				opacity: 1,
				x: 0,
				duration: 1,
			},
			"-=0.5",
		)
		.to(
			contactInfo.value,
			{
				opacity: 1,
				x: 0,
				duration: 1,
			},
			"-=0.5",
		)

	// Animate info cards
	infoCards.value.forEach((card, index) => {
		gsap.from(card, {
			scrollTrigger: {
				trigger: card,
				start: "top bottom-=50",
			},
			opacity: 0,
			y: 50,
			duration: 0.8,
			delay: index * 0.2,
		})
	})
})
</script>

<style scoped>
.particle {
	will-change: transform;
}
</style>
