import { defineNuxtPlugin } from '#app'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
    // Register GSAP plugins if needed
    gsap.registerPlugin(ScrollTrigger)

    // Make GSAP available globally
    nuxtApp.provide('gsap', gsap)
})
