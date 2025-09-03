import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const ContactSection = () => {
  const sectionRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.contact-title',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Info blocks animation
      gsap.fromTo(
        '.contact-info',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );

      // ✅ fallback if already visible (desktop on load)
      if (sectionRef.current.getBoundingClientRect().top < window.innerHeight) {
        gsap.to('.contact-title, .contact-info', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          overwrite: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/s111khar', icon: '📷' },
    { name: 'Facebook', url: 'https://facebook.com/k72wedding', icon: '📘' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/k72wedding', icon: '💼' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative depth-3 section-transition"
    >
      <div className="container mx-auto lg:px-12 px-6 lg:py-32 py-20">
        <div className="text-center mb-24 space-y-8">
          <h2 className="contact-title font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight text-layer-3">
            Get In Touch
          </h2>
          <div className="floating-panel-dark max-w-3xl mx-auto p-8">
            <p className="font-[font1] lg:text-xl text-lg leading-relaxed text-gray-300">
            The first step to your perfect film is a simple hello. Reach out to us today :)
            </p>
          </div>
        </div>

        <div className="contact-grid grid lg:grid-cols-2 grid-cols-1 gap-16 lg:gap-20 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-10">
            <div className="contact-info floating-panel-dark p-8 lg:p-10 space-y-6">
              <h3 className="font-[font2] text-2xl lg:text-3xl uppercase text-[#D3FD50] text-layer-2">
                Contact Details
              </h3>
              <div className="space-y-4 font-[font1] text-lg lg:text-xl text-gray-300">
                <p className="flex items-center space-x-4">
                  <span className="micro-bounce">📧</span>
                  <span>contact@amouraworks.com</span>
                </p>
                <p className="flex items-center space-x-4">
                  <span className="micro-bounce">📍</span>
                  <span>22 ruelle du Clerc, 59126, Linselles (France)</span>
                </p>
                <p className="flex items-center space-x-4">
                  <span className="micro-bounce">🕒</span>
                  <span>M–F: 9am – 7pm (UTC+1)</span>
                </p>
              </div>
            </div>

            <div className="contact-info floating-panel-dark p-8 lg:p-10 space-y-6">
              <h3 className="font-[font2] text-2xl lg:text-3xl uppercase text-[#D3FD50] text-layer-2">
                Follow Us
              </h3>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 lg:w-14 lg:h-14 glass glass-hover glass-click rounded-full flex items-center justify-center group glow-accent"
                  >
                    <span className="text-xl lg:text-2xl micro-bounce">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-info floating-panel-dark p-8 lg:p-10">
              <h4 className="font-[font2] text-xl lg:text-2xl uppercase text-[#D3FD50] mb-6 text-layer-2">
                  Quick Response Guarantee
              </h4>
              <p className="font-[font1] text-base lg:text-lg text-gray-300 leading-relaxed text-layer-1">
                  We respond to all inquiries within 24 hours. Your project deserves our immediate attention.
              </p>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="contact-info floating-panel-dark p-10 lg:p-12">
            <h3 className="font-[font2] text-2xl lg:text-3xl uppercase text-[#D3FD50] mb-10 text-layer-2">
                Quick Inquiry
            </h3>

            <form className="space-y-8">
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full input-inset text-white placeholder-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full input-inset text-white placeholder-gray-400"
                  />
              </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full input-inset text-white placeholder-gray-400"
                />

                <input
                  type="date"
                  placeholder="Wedding Date"
                  className="w-full input-inset text-white placeholder-gray-400"
                />

                <textarea
                  placeholder="Tell us about your wedding vision..."
                  rows="4"
                  className="w-full input-inset text-white placeholder-gray-400 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full btn-pill btn-primary lg:h-14 h-12 font-[font2] text-lg lg:text-xl"
                >
                  Send Inquiry
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
