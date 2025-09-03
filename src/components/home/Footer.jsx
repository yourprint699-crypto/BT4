import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

const Footer = () => {
  const footerRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    // Animate footer content
    gsap.fromTo('.footer-content',
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 0.3
        },
        scrollTrigger: {
          trigger: '.footer-content',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  const quickLinks = [
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Affiliates', href: '#affiliates' }
  ]

  return (
    <footer ref={footerRef} className='bg-gradient-to-br from-black to-gray-900 text-white relative depth-3'>
      <div className='container mx-auto lg:px-12 px-6 lg:py-24 py-16'>
        {/* Main CTA Section */}
        <div className='text-center mb-20 footer-content'>
          <div className='floating-panel-dark p-12 lg:p-16 space-y-8'>
            <h2 className='font-[font2] lg:text-[6vw] text-5xl uppercase mb-8 leading-tight text-layer-3'>
            Let's Talk About Your Project
            </h2>
            <div className='inline-flex items-center'>
              <button className='btn-pill btn-primary lg:h-16 h-12 px-8 lg:px-12 group'>
                <span className='font-[font2] text-lg lg:text-xl'>
                Inquire Now
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Information Grid */}
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 lg:gap-12 mb-16'>
          {/* Quick Links */}
          <div className='footer-content floating-panel-dark p-6 lg:p-8 space-y-6'>
            <h3 className='font-[font2] text-xl lg:text-2xl uppercase text-[#D3FD50] mb-6 text-layer-2'>
              Quick Links
            </h3>
            <ul className='space-y-4'>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('portfolio')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className='font-[font1] text-base lg:text-lg text-gray-300 hover:text-[#D3FD50] transition-colors duration-500 hover:underline text-left micro-bounce'
                >
                  Our Portfolio0
                </button>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className='font-[font1] text-base lg:text-lg text-gray-300 hover:text-[#D3FD50] transition-colors duration-500 hover:underline micro-bounce'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy"
                  className='font-[font1] text-base lg:text-lg text-gray-300 hover:text-[#D3FD50] transition-colors duration-500 hover:underline micro-bounce'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service"
                  className='font-[font1] text-base lg:text-lg text-gray-300 hover:text-[#D3FD50] transition-colors duration-500 hover:underline micro-bounce'
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  to="/affiliate-program"
                  className='font-[font1] text-base lg:text-lg text-gray-300 hover:text-[#D3FD50] transition-colors duration-500 hover:underline micro-bounce'
                >
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Address */}
          <div className='footer-content floating-panel-dark p-6 lg:p-8 space-y-6'>
            <h3 className='font-[font2] text-xl lg:text-2xl uppercase text-[#D3FD50] mb-6 text-layer-2'>
              Address
            </h3>
            <div className='font-[font1] text-base lg:text-lg text-gray-300 leading-relaxed space-y-2'>
              <p>22 ruelle du Clerc</p>
              <p>59126, Linselles</p>
              <p>(France)</p>
            </div>
          </div>

          {/* Hours of Operation */}
          <div className='footer-content floating-panel-dark p-6 lg:p-8 space-y-6'>
            <h3 className='font-[font2] text-xl lg:text-2xl uppercase text-[#D3FD50] mb-6 text-layer-2'>
              Hours
            </h3>
            <div className='font-[font1] text-base lg:text-lg text-gray-300 space-y-3'>
              <p>M–F: 9am – 7pm (UTC+1)</p>
              <p>Saturday & Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className='footer-content floating-panel-dark p-6 lg:p-8 space-y-6'>
            <h3 className='font-[font2] text-xl lg:text-2xl uppercase text-[#D3FD50] mb-6 text-layer-2'>
              Contact
            </h3>
            <div className='font-[font1] text-base lg:text-lg text-gray-300'>
              <a 
                href="mailto:contact@amouraworks.com"
                target="_blank"
                rel="noopener noreferrer"
                className='hover:text-[#D3FD50] transition-colors duration-500 hover:underline micro-bounce'
              >
                contact@amouraworks.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border Line */}
        <div className='floating-panel-dark p-6 text-center'>
          <div className='text-center'>
            <p className='font-[font1] text-sm lg:text-base text-gray-400'>
              © 2025 Amoura Works. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer