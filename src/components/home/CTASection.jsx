import React, { useRef, useLayoutEffect, useMemo } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

const CTASection = () => {
  const sectionRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  // Memoize animation configuration for better performance
  const animationConfig = useMemo(() => ({
    from: { opacity: 0, y: 40, visibility: 'hidden' },
    to: {
      opacity: 1,
      y: 0,
      visibility: 'visible',
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.2,
    },
    scrollTrigger: {
      trigger: sectionRef.current,
      start: 'top 85%',
      toggleActions: 'play none none none',
    }
  }), [])

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.cta-fade')
      if (!elements.length) return

      gsap.fromTo(elements, animationConfig.from, {
        ...animationConfig.to,
        scrollTrigger: {
          ...animationConfig.scrollTrigger,
          trigger: sectionRef.current,
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [animationConfig])

  // Optimized refresh handling with debouncing
  useLayoutEffect(() => {
    let refreshTimeout

    const debouncedRefresh = () => {
      clearTimeout(refreshTimeout)
      refreshTimeout = setTimeout(() => {
        requestAnimationFrame(() => {
          ScrollTrigger.refresh()
        })
      }, 100)
    }

    const handleLoad = () => debouncedRefresh()
    const handleResize = () => debouncedRefresh()

    window.addEventListener('load', handleLoad, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    // Initial refresh
    debouncedRefresh()

    return () => {
      window.removeEventListener('load', handleLoad)
      window.removeEventListener('resize', handleResize)
      clearTimeout(refreshTimeout)
    }
  }, [])

  // Memoized stats data for performance
  const statsData = useMemo(() => [
    { value: '24h', label: 'Response Time' },
    { value: '100%', label: 'Satisfaction Rate' },
    { value: 'Free', label: 'Initial Consultation' }
  ], [])

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="min-h-screen bg-black text-white relative z-30 flex items-center"
      role="region"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto lg:px-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 
            id="cta-heading"
            className="cta-fade font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight"
          >
            Ready to Create Magic?
          </h2>

          <p className="cta-fade font-[font1] lg:text-2xl text-xl leading-relaxed text-gray-300 mb-12 lg:max-w-3xl max-w-xl mx-auto">
            Transformons votre jour spécial en un chef-d'œuvre cinématographique qui raconte votre histoire unique.
          </p>

          <div className="cta-fade space-y-6 lg:space-y-0 lg:space-x-6 lg:flex lg:justify-center lg:items-center">
            <Link
              to="/contact"
              className="lg:border-3 border-2 hover:border-[#D3FD50] hover:bg-[#D3FD50] hover:text-black lg:h-20 h-16 flex items-center justify-center px-12 lg:px-16 border-white rounded-full uppercase transition-all duration-300 cursor-pointer group inline-flex focus:outline-none focus:ring-4 focus:ring-[#D3FD50]/50"
              aria-label="Get started with our wedding videography services"
            >
              <span className="font-[font2] text-xl lg:text-2xl group-hover:scale-105 transition-transform duration-300">
                Get Started Today
              </span>
            </Link>

            <Link
              to="/projects"
              className="lg:border-3 border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white lg:h-20 h-16 flex items-center justify-center px-12 lg:px-16 rounded-full uppercase transition-all duration-300 cursor-pointer group inline-flex focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="View our wedding videography portfolio"
            >
              <span className="font-[font2] text-xl lg:text-2xl group-hover:scale-105 transition-transform duration-300">
                View Our Work
              </span>
            </Link>
          </div>

          <div className="cta-fade mt-16 grid lg:grid-cols-3 grid-cols-1 gap-8 text-center">
            {statsData.map((stat, index) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-3xl lg:text-4xl font-[font2] text-[#D3FD50]">
                  {stat.value}
                </div>
                <div className="font-[font1] text-sm lg:text-base text-gray-400 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection