import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import PageWrapper from '../components/common/PageWrapper'
import ContactForm from '../components/forms/ContactForm'

const Contact = () => {


  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/k72wedding', icon: '📷' },
    { name: 'Facebook', url: 'https://facebook.com/k72wedding', icon: '📘' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/k72wedding', icon: '💼' }
  ]

  return (
    <PageWrapper className='section-dark text-white'>
      <div className="cinematic-overlay"></div>
      {/* Header */}
      <div className='pt-32 pb-20 text-center'>
        <h1 className='contact-content font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight text-layer-3 text-glow'>
          Contact Us
        </h1>
        <div className='floating-panel-dark max-w-3xl mx-auto p-8 mx-6'>
          <p className='contact-content font-[font1] lg:text-xl text-lg leading-relaxed text-layer-2'>
        The first step to your perfect film is a simple hello. Reach out to us today
          </p>
        </div>
      </div>

      <div className='container mx-auto lg:px-12 px-6 pb-32'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-16 lg:gap-20 max-w-7xl mx-auto'>
          {/* Contact Form */}
          <div className='contact-content'>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className='space-y-10'>
            <div className='contact-content floating-panel-dark p-8 lg:p-10 space-y-6'>
              <h3 className='font-[font2] text-3xl lg:text-4xl uppercase text-[#D3FD50] text-layer-2 text-glow'>
                Let's Connect
              </h3>
              <div className='space-y-5 font-[font1] text-lg lg:text-xl text-layer-1'>
                <div className='flex items-center space-x-4'>
                  <span className='text-2xl micro-bounce glow-accent'>📧</span>
                  <a href="mailto:contact@amouraworks.com" className='interactive-hover'>
                    contact@amouraworks.com
                  </a>
                </div>
                <div className='flex items-center space-x-4'>
                  <span className='text-2xl micro-bounce glow-accent'>📍</span>
                  <span>22 ruelle du Clerc, 59126, Linselles (France)</span>
                </div>
                <div className='flex items-center space-x-4'>
                  <span className='text-2xl micro-bounce glow-accent'>🕒</span>
                  <span>M–F: 9am – 7pm (UTC+1)</span>
                </div>
              </div>
            </div>

            <div className='contact-content floating-panel-dark p-8 lg:p-10 space-y-6'>
              <h3 className='font-[font2] text-2xl lg:text-3xl uppercase text-[#D3FD50] text-layer-2 text-glow'>
                Follow Our Work
              </h3>
              <div className='flex space-x-6'>
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-14 h-14 lg:w-16 lg:h-16 glass glass-hover glass-click rounded-full flex items-center justify-center group glow-accent'
                  >
                    <span className='text-2xl lg:text-3xl micro-bounce glow-accent'>
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className='contact-content floating-panel-dark p-8 lg:p-10'>
              <h4 className='font-[font2] text-xl lg:text-2xl uppercase text-[#D3FD50] mb-6 text-layer-2 text-glow'>
                  Response Time
              </h4>
              <p className='font-[font1] text-base lg:text-lg text-layer-1 leading-relaxed'>
                  Nous répondons à toutes les demandes dans les 24 heures. Pour les urgences, n'hésitez pas à nous appeler directement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default Contact