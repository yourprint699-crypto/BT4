import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const ServicesSection = () => {
  const sectionRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.fromTo('.services-title',
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.services-title',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo('.service-card',
      {
        opacity: 0,
        y: 40,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 0.4
        },
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  const services = [
    {
      icon: '🎬',
      title: 'Wedding Cinematography',
      description: 'Cinematic storytelling that captures every precious moment of your special day with artistic flair.',
      features: ['4K Ultra HD', 'Drone Footage', 'Multiple Angles', 'Same-Day Highlights']
    },
    {
      icon: '📸',
      title: 'Photography',
      description: 'Professional wedding photography that preserves memories with stunning visual artistry.',
      features: ['High Resolution', 'RAW Processing', 'Quick Turnaround', 'Online Gallery']
    },
    {
      icon: '✂️',
      title: 'Post-Production',
      description: 'Expert editing and color grading to transform raw footage into cinematic masterpieces.',
      features: ['Color Grading', 'Audio Enhancement', 'Motion Graphics', 'Custom Music']
    },
    {
      icon: '🎵',
      title: 'Live Streaming',
      description: 'Share your special moments with loved ones who cannot attend in person.',
      features: ['HD Quality', 'Multiple Cameras', 'Real-time Streaming', 'Recording Included']
    }
  ]

  return (
    <section id="services" ref={sectionRef} className='min-h-screen bg-gradient-to-br from-white to-gray-50 text-black relative depth-3 section-transition'>
      <div className='container mx-auto lg:px-12 px-6 lg:py-32 py-20'>
        <div className='text-center mb-24 space-y-8'>
          <h2 className='services-title font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight text-layer-3'>
            Services
          </h2>
          <div className='floating-panel max-w-3xl mx-auto p-8'>
            <p className='font-[font1] lg:text-xl text-lg leading-relaxed text-gray-700'>
            Everything you need to relive your wedding. beautifully filmed, thoughtfully crafted, and made just for you.
            </p>
          </div>
        </div>

        <div className='services-grid grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-16'>
          {services.map((service, index) => (
            <div 
              key={index}
              className='service-card group floating-panel glass-hover glass-click p-10 lg:p-12 gpu-accelerated'
            >
              <div className='text-5xl lg:text-6xl mb-8 micro-bounce'>
                {service.icon}
              </div>
              
              <div className='space-y-6 mb-8'>
                <h3 className='font-[font2] text-2xl lg:text-3xl uppercase text-black group-hover:text-[#D3FD50] transition-colors duration-500 text-layer-2'>
                  {service.title}
                </h3>
                <p className='font-[font1] text-base lg:text-lg leading-relaxed text-gray-600 text-layer-1'>
                  {service.description}
                </p>
              </div>

              <ul className='space-y-3 mb-8'>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-center font-[font1] text-sm lg:text-base text-gray-600'>
                    <span className='w-3 h-3 bg-gradient-to-r from-[#D3FD50] to-[#b8e03e] rounded-full mr-4 micro-bounce glow-accent'></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className='w-0 group-hover:w-full h-2 bg-gradient-to-r from-[#D3FD50] to-[#b8e03e] transition-all duration-700 rounded-full glow-accent'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection