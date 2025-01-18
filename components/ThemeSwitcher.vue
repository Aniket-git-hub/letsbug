<template>
	<button
		@click="toggleTheme"
		class="relative group flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
		:class="{
			'shadow-purple-500/10': !isDark,
			'shadow-blue-500/10': isDark,
		}"
	>
		<!-- Sun/Moon Icon Container -->
		<div class="relative w-8 h-8">
			<!-- Sun Icon -->
			<div
				class="absolute inset-0 flex items-center justify-center transition-transform duration-500"
				:class="isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'"
			>
				<div class="relative">
					<!-- Sun Core -->
					<div class="w-5 h-5 bg-amber-400 rounded-full"></div>
					<!-- Sun Rays -->
					<div
						v-for="i in 8"
						:key="i"
						class="absolute w-1.5 h-1.5 bg-amber-400 rounded-full transform origin-center transition-all duration-300 group-hover:scale-150"
						:style="{
							left: `${4 * Math.cos((i * Math.PI) / 4)}px`,
							top: `${4 * Math.sin((i * Math.PI) / 4)}px`,
							transform: `translate(${
								10 * Math.cos((i * Math.PI) / 4)
							}px, ${10 * Math.sin((i * Math.PI) / 4)}px)`,
						}"
					></div>
				</div>
			</div>

			<!-- Moon Icon -->
			<div
				class="absolute inset-0 flex items-center justify-center transition-transform duration-500"
				:class="isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'"
			>
				<div class="relative w-5 h-5">
					<div
						class="absolute inset-0 bg-blue-200 rounded-full"
					></div>
					<div
						class="absolute inset-0 bg-gray-800 rounded-full transform translate-x-1"
					></div>
				</div>
			</div>
		</div>

		<!-- Text -->
		<span
			class="relative text-sm font-medium min-w-[5rem] text-gray-700 dark:text-gray-200"
			:class="{ 'translate-x-0 opacity-100': true }"
		>
			<span
				class="absolute inset-0 flex items-center justify-start transition-all duration-500"
				:class="
					isDark
						? 'opacity-0 translate-y-2'
						: 'opacity-100 translate-y-0'
				"
			>
				Light Mode
			</span>
			<span
				class="absolute inset-0 flex items-center justify-start transition-all duration-500"
				:class="
					isDark
						? 'opacity-100 translate-y-0'
						: 'opacity-0 -translate-y-2'
				"
			>
				Dark Mode
			</span>
		</span>

		<!-- Background Transition -->
		<div
			class="absolute inset-0 rounded-xl transition-colors duration-300"
			:class="{ 'bg-purple-500/5': !isDark, 'bg-blue-500/5': isDark }"
		></div>

		<!-- Hover Effect -->
		<div
			class="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
		></div>
	</button>
</template>

<script setup>
import { onMounted, ref } from "vue"

const isDark = ref(false)

onMounted(() => {
	// Check initial theme
	isDark.value =
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)

	// Apply initial theme
	document.documentElement.classList.toggle("dark", isDark.value)
})

function toggleTheme() {
	// Toggle theme state
	isDark.value = !isDark.value

	// Update localStorage
	localStorage.theme = isDark.value ? "dark" : "light"

	// Update document class
	document.documentElement.classList.toggle("dark", isDark.value)
}
</script>
