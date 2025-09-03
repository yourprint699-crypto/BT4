import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Link } from 'react-router-dom';

const WhyUsSection = () => {
  const sectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Animate section title
    gsap.fromTo(
      '.why-us-title',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.why-us-title',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animate intro text
    gsap.fromTo(
      '.intro-text',
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: '.intro-text',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Animate benefit cards with stagger
    gsap.fromTo(
      '.benefit-card',
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power2.out',
        stagger: {
          amount: 0.4,
        },
        scrollTrigger: {
          trigger: '.benefits-grid',
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );
  });

  const benefits = [
    {
      icon: '⚡',
      title: 'Creative Spark',
      description:
        'We ignite the creative process with innovative thinking that transforms brands into memorable experiences.',
    },
    {
      icon: '🎯',
      title: 'Strategic Focus',
      description:
        'Every decision is made with long-term brand building in mind, ensuring sustainable growth and influence.',
    },
    {
      icon: '🔥',
      title: 'Authentic Friction',
      description:
        'We create the right tension that generates emotion and builds genuine connections with your audience.',
    },
    {
      icon: '💎',
      title: 'Unfiltered Honesty',
      description:
        'We tell you what needs to be said and do what needs to be done, ensuring transparent partnerships.',
    },
  ];

  return (
    <section
      id="why-us"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-black relative depth-3 section-transition"
    >
      <div className="container mx-auto lg:px-12 px-6 lg:py-32 py-20">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-8">
          <h2 className="why-us-title font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight text-layer-3">
          Get to Know the Amoura Promise
          </h2>
          <div className="floating-panel max-w-2xl mx-auto p-8">
            <p className="intro-text font-[font1] lg:text-xl text-lg leading-relaxed text-gray-700">
            Creative • Reliable • Timely
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-16 lg:max-w-6xl max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card group floating-panel glass-hover glass-click p-10 lg:p-12 gpu-accelerated"
            >
              {/* Icon */}
              <div className="text-6xl lg:text-7xl mb-8 micro-bounce">
                {benefit.icon}
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h3 className="font-[font2] text-2xl lg:text-3xl uppercase text-black group-hover:text-[#D3FD50] transition-colors duration-500 text-layer-2">
                  {benefit.title}
                </h3>
                <p className="font-[font1] text-base lg:text-lg leading-relaxed text-gray-600 text-layer-1">
                  {benefit.description}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="w-0 group-hover:w-full h-2 bg-gradient-to-r from-[#D3FD50] to-[#b8e03e] transition-all duration-700 mt-8 rounded-full glow-accent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
