import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const ProcessSection = () => {
  const sectionRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.fromTo('.process-title',
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
          trigger: '.process-title',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )

    gsap.fromTo('.process-step',
      {
        opacity: 0,
        x: -50
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 0.6
        },
        scrollTrigger: {
          trigger: '.process-timeline',
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    )
  })

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your vision, preferences, and wedding details to understand your unique story.',
      duration: '1-2 hours'
    },
    {
      step: '02',
      title: 'Planning & Preparation',
      description: 'We create a detailed shooting plan, scout locations, and coordinate with your wedding planner.',
      duration: '2-3 weeks'
    },
    {
      step: '03',
      title: 'Wedding Day Coverage',
      description: 'Our team captures every moment with professional equipment and artistic expertise.',
      duration: '8-12 hours'
    },
    {
      step: '04',
      title: 'Post-Production Magic',
      description: 'Expert editing, color grading, and audio enhancement to create your cinematic masterpiece.',
      duration: '4-6 weeks'
    },
    {
      step: '05',
      title: 'Final Delivery',
      description: 'Receive your complete wedding film package with highlights reel and full ceremony footage.',
      duration: 'Digital delivery'
    }
  ]

  return (
    <section id="process" ref={sectionRef} className='min-h-screen section-dark text-white relative depth-3 section-transition'>
      <div className="cinematic-overlay"></div>
      <div className='container mx-auto lg:px-12 px-6 lg:py-32 py-20'>
        <div className='text-center mb-24 space-y-8'>
          <h2 className='process-title font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight text-layer-3 text-glow'>
            Our Process
          </h2>
          <div className='floating-panel-dark max-w-3xl mx-auto p-8'>
            <p className='font-[font1] lg:text-xl text-lg leading-relaxed text-layer-2'>
            Un processus éprouvé qui garantit des résultats exceptionnels à chaque étape de votre projet.
            </p>
          </div>
        </div>

        <div className='process-timeline max-w-5xl mx-auto space-y-8'>
          {processSteps.map((step, index) => (
            <div 
              key={index}
              className='process-step group relative'
            >
              <div className='floating-panel-dark glass-hover p-8 lg:p-10 flex items-start space-x-8'>
                {/* Step Number */}
                <div className='flex-shrink-0'>
                  <div className='w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#D3FD50] to-[#b8e03e] rounded-full flex items-center justify-center micro-bounce glow-accent animate-glow-pulse'>
                    <span className='font-[font2] text-xl lg:text-2xl text-black'>
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Step Content */}
                <div className='flex-1 space-y-4'>
                  <div className='flex justify-between items-start mb-6'>
                    <h3 className='font-[font2] text-xl lg:text-2xl uppercase text-layer-2'>
                      {step.title}
                    </h3>
                    <span className='font-[font1] text-sm lg:text-base text-layer-1 glass px-4 py-2 rounded-full micro-bounce'>
                      {step.duration}
                    </span>
                  </div>
                  <p className='font-[font1] text-base lg:text-lg leading-relaxed text-layer-1'>
                    {step.description}
                  </p>
                </div>
              </div>
              
              {/* Progress line */}
              {index < processSteps.length - 1 && (
                <div className='absolute left-8 lg:left-10 -bottom-4 w-1 h-8 bg-gradient-to-b from-[#D3FD50] to-transparent rounded-full glow-accent accent-line-vertical'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection