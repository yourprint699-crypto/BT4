import React, { useRef, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Header = () => {
  const headerRef = useRef(null)
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll state for subtle background changes
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useGSAP(() => {
    // Smooth header entrance animation
    gsap.fromTo(headerRef.current,
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.8
      }
    )

    // Animate navigation items with stagger
    gsap.fromTo('.nav-item-animate',
      {
        opacity: 0,
        y: -10
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        delay: 1.2
      }
    )
  }, [])

  const navigationItems = [
    { name: 'Portfolio', href: '/projects' },
    { name: 'Pricing', href: '#services' },
    { name: 'Contact Us', href: '/contact' }
  ]

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <header 
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'backdrop-blur-md bg-black/20' : 'bg-transparent'
      }`}
     style={{ zIndex: 1000 }}
    >
      {/* Subtle gradient fade for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto lg:px-12 px-6 py-6 lg:py-8">
        <nav className="flex items-center justify-between relative z-10">
          {/* Logo Area */}
          <div className="nav-item-animate flex-shrink-0">
            <Link 
              to="/"
              className="flex items-center space-x-3 group"
            >
              {/* Placeholder logo area - easily replaceable */}
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-[#D3FD50] to-[#b8e03e] rounded-full flex items-center justify-center glow-accent micro-bounce">
                <span className="font-[font2] text-black text-xl lg:text-2xl">K</span>
              </div>
              <span className="font-[font2] text-xl lg:text-2xl text-white uppercase tracking-wide">
                K72
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-12">
            {navigationItems.map((item, index) => (
              <div key={index} className="nav-item-animate">
                {item.href.startsWith('#') ? (
                  <button
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="nav-link font-[font2] text-base lg:text-lg text-white uppercase tracking-wide relative group"
                  >
                    {item.name}
                    <span className="nav-underline absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="nav-link font-[font2] text-base lg:text-lg text-white uppercase tracking-wide relative group"
                  >
                    {item.name}
                    <span className="nav-underline absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full" />
                  </Link>
                )}
              </div>
            ))}

            {/* Become an Affiliate Button */}
            <div className="nav-item-animate">
              <Link
                to="/affiliate-program"
                className="affiliate-btn font-[font2] text-base lg:text-lg text-white uppercase tracking-wide px-6 py-3 border border-gray-400 rounded-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-white/10 active:scale-95"
              >
                Become an Affiliate
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle (for smaller screens) */}
          <div className="lg:hidden nav-item-animate">
            <button className="w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group">
              <span className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:w-8" />
              <span className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:w-8" />
              <span className="w-6 h-0.5 bg-white transition-all duration-300 group-hover:w-8" />
            </button>
          </div>
        </nav>

        {/* Mobile Navigation (stacked vertically) */}
        <div className="lg:hidden mt-6 space-y-4">
          {navigationItems.map((item, index) => (
            <div key={index} className="text-center">
              {item.href.startsWith('#') ? (
                <button
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="nav-link font-[font2] text-lg text-white uppercase tracking-wide relative group block w-full py-2"
                >
                  {item.name}
                  <span className="nav-underline absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
                </button>
              ) : (
                <Link
                  to={item.href}
                  className="nav-link font-[font2] text-lg text-white uppercase tracking-wide relative group block w-full py-2"
                >
                  {item.name}
                  <span className="nav-underline absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0" />
                </Link>
              )}
            </div>
          ))}
          
          <div className="text-center pt-4">
            <Link
              to="/affiliate-program"
              className="affiliate-btn font-[font2] text-lg text-white uppercase tracking-wide px-6 py-3 border border-gray-400 rounded-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-white/10 active:scale-95 inline-block"
            >
              Become an Affiliate
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header