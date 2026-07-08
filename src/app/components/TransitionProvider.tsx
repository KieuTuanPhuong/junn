"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const TransitionContext = createContext<{
  navigateWithTransition: (url: string) => void
} | null>(null)

export const useTransition = () => {
  const context = useContext(TransitionContext)
  if (!context) throw new Error("Must be used within TransitionProvider")
  return context
}

export const TransitionProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const router = useRouter()
  const pathname = usePathname()
  // Start with true to trigger reveal animation on initial load
  const [isTransitioning, setIsTransitioning] = useState(true)
  const [destination, setDestination] = useState<string | null>(null)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  const navigateWithTransition = (url: string) => {
    if (url === pathname) return
    setDestination(url)
    setIsTransitioning(true)
  }

  useEffect(() => {
    // Reveal the new page once pathname changes (or on initial mount)
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setIsInitialLoad(false)
      }, 50) // slight delay ensures DOM is ready
      return () => clearTimeout(timer)
    }
  }, [pathname, isTransitioning])

  return (
    <TransitionContext.Provider value={{ navigateWithTransition }}>
      {children}

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            variants={{
              initial: { top: isInitialLoad ? "0%" : "100%" },
              animate: { top: "0%" },
              exit: { top: "-100%" },
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onAnimationComplete={(variant) => {
              if (variant === "animate" && destination) {
                router.push(destination)
                setDestination(null)
              }
            }}
            className="bg-neutral-10"
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              height: "100vh",
              zIndex: 9999,
            }}
          />
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  )
}
