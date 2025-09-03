import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const AboutSection = () => {
  const sectionRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.fromTo('.about-title',
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
          trigger: '.about-title',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo('.about-content',
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
          trigger: '.about-grid',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  return (
    <section id="about" ref={sectionRef} className='min-h-screen bg-gradient-to-br from-white to-gray-50 text-black relative depth-3 section-transition'>
      <div className='container mx-auto lg:px-12 px-6 lg:py-32 py-20'>
        <div className='text-center mb-24 space-y-8'>
          <h2 className='about-title font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight text-layer-3'>
            About Us
          </h2>
        </div>

        <div className='about-grid max-w-7xl mx-auto'>
          <div className='floating-panel p-12 lg:p-16 mb-16'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-16 items-center'>
            {/* Story Content */}
              <div className='about-content space-y-8'>
                <h3 className='font-[font2] text-3xl lg:text-4xl uppercase text-[#D3FD50] mb-6 text-layer-2'>
                Our Story
                </h3>
                <p className='font-[font1] text-lg lg:text-xl leading-relaxed text-gray-700 text-layer-1'>
                For 7 years, we’ve dedicated ourselves to transforming weddings into cinematic stories. With equal parts craft and heart, we create films that feel as real as the moments themselve, memories designed to last a lifetime.
                </p>
                <div className='floating-quote'>
                  <p className='font-[font1] text-lg lg:text-xl leading-relaxed text-gray-700 italic'>
              "Our approach is simple,  to be present, to listen, and to see your day as you live it. With equal parts skill and sensitivity, we create films that feel real, timeless, and true to you."
                  </p>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className='about-content'>
                <div className='aspect-square rounded-3xl overflow-hidden glass-hover gpu-accelerated'>
                <img 
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                  alt="K72 team at work"
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
                />
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-12 lg:gap-16'>
            <div className='about-content text-center space-y-4'>
              <div className='floating-panel glass-hover p-8 lg:p-10 space-y-6'>
                <div className='text-4xl lg:text-5xl mb-4 micro-bounce'>🎯</div>
                <h4 className='font-[font2] text-xl lg:text-2xl uppercase text-black text-layer-2'>
                Vision
                </h4>
                <p className='font-[font1] text-base lg:text-lg leading-relaxed text-gray-600 text-layer-1'>
              We want every wedding film to feel like a piece of your story.  real, timeless, and full of love.
                </p>
              </div>
            </div>

            <div className='about-content text-center space-y-4'>
              <div className='floating-panel glass-hover p-8 lg:p-10 space-y-6'>
                <div className='text-4xl lg:text-5xl mb-4 micro-bounce'>💎</div>
                <h4 className='font-[font2] text-xl lg:text-2xl uppercase text-black text-layer-2'>
                Mission
                </h4>
                <p className='font-[font1] text-base lg:text-lg leading-relaxed text-gray-600 text-layer-1'>
              Our goal is simple: to give you memories that feel alive, not staged. Films that make you feel the day all over again.
                </p>
              </div>
            </div>

            <div className='about-content text-center space-y-4'>
              <div className='floating-panel glass-hover p-8 lg:p-10 space-y-6'>
                <div className='text-4xl lg:text-5xl mb-4 micro-bounce'>⚡</div>
                <h4 className='font-[font2] text-xl lg:text-2xl uppercase text-black text-layer-2'>
                Values
                </h4>
                <p className='font-[font1] text-base lg:text-lg leading-relaxed text-gray-600 text-layer-1'>
              We stay true to what’s real. We create with heart and imagination. And we give our very best, every single time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection