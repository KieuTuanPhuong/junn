"use client"

import { useEffect, type RefObject } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

/**
 * Fades + slides up every descendant with a `data-reveal` attribute
 * inside `containerRef` as it scrolls into view.
 */
export function useScrollReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    if (!container) return

    const targets = Array.from(
      container.querySelectorAll<HTMLElement>("[data-reveal]"),
    )
    if (!targets.length) return

    gsap.set(targets, { opacity: 0, y: 48 })

    const batches = ScrollTrigger.batch(targets, {
      start: "top 85%",
      once: true,
      onEnter: (batchTargets) =>
        gsap.to(batchTargets, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
          overwrite: true,
        }),
    })

    return () => batches.forEach((batch) => batch.kill())
  }, [containerRef])
}
