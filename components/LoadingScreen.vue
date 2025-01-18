<template>
	<div
		ref="loadingContainer"
		class="fixed inset-0 z-50 flex items-center justify-center bg-background-light dark:bg-background-dark"
	>
		<div class="text-center space-y-4">
			<div ref="loadingDots" class="flex space-x-2">
				<div
					v-for="i in 3"
					:key="i"
					class="w-4 h-4 rounded-full bg-primary-light dark:bg-primary-dark"
				></div>
			</div>
			<p
				ref="loadingText"
				class="text-text-secondary-light dark:text-text-secondary-dark"
			>
				Loading...
			</p>
		</div>
	</div>
</template>

<script setup>
import { useNuxtApp } from "#app"
import { onMounted, ref } from "vue"

const loadingContainer = ref(null)
const loadingDots = ref(null)
const loadingText = ref(null)

onMounted(() => {
	const { $gsap } = useNuxtApp()

	// Animate dots
	$gsap.to(loadingDots.value.children, {
		y: -10,
		duration: 0.5,
		stagger: 0.1,
		repeat: -1,
		yoyo: true,
		ease: "power2.inOut",
	})

	// Fade in text
	$gsap.from(loadingText.value, {
		opacity: 0,
		duration: 1,
		repeat: -1,
		yoyo: true,
		ease: "power2.inOut",
	})
})
</script>
