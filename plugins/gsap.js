import { defineNuxtPlugin } from '#app'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        // Only register GSAP plugins on client-side
        gsap.registerPlugin(ScrollTrigger)
    }

    // Provide gsap instance
    nuxtApp.provide('gsap', gsap)
})
