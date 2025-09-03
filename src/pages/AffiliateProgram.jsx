import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/common/PageWrapper'

const AffiliateProgram = () => {
  const benefits = [
    {
      icon: '💰',
      title: '15% Lifetime Commission',
      description: 'Earn 15% commission on every client you refer, for the lifetime of their relationship with us.'
    },
    {
      icon: '🎯',
      title: 'High Conversion Rate',
      description: 'Our premium services and proven track record ensure high conversion rates for your referrals.'
    },
    {
      icon: '📊',
      title: 'Real-Time Tracking',
      description: 'Monitor your referrals and earnings with our comprehensive affiliate dashboard.'
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: 'Get personalized support from our affiliate team to maximize your earning potential.'
    }
  ]

  const requirements = [
    'Active social media presence or professional network',
    'Alignment with our brand values and quality standards',
    'Commitment to promoting our services authentically',
    'Minimum of 1 referral every 6 months to maintain active status'
  ]

  const faqItems = [
    {
      question: 'How do I get paid?',
      answer: 'Commissions are paid monthly via bank transfer or PayPal, with a minimum payout threshold of €100.'
    },
    {
      question: 'When do I receive my commission?',
      answer: 'Commissions are paid 30 days after the client\'s final payment to ensure completed transactions.'
    },
    {
      question: 'Can I refer international clients?',
      answer: 'Yes! We work with clients worldwide and provide remote consultation and planning services.'
    },
    {
      question: 'Is there a limit to how much I can earn?',
      answer: 'No limits! The more qualified referrals you bring, the more you earn. Top affiliates earn €5,000+ monthly.'
    }
  ]

  return (
    <PageWrapper className='section-dark text-white'>
      <div className="cinematic-overlay"></div>
      <div className='container mx-auto section-padding'>
        <div className='max-width-wide'>
          {/* Header */}
          <div className='text-center component-margin space-y-4 sm:space-y-6 lg:space-y-8'>
            <h1 className='font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow'>
              Affiliate Program
            </h1>
            <div className='floating-panel-dark max-width-content'>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-2'>
              Rejoignez notre programme d'affiliation et gagnez des commissions en recommandant nos services de vidéographie de mariage premium.
              </p>
            </div>
          </div>

          {/* Commission Highlight */}
          <div className='text-center component-margin'>
            <div className='floating-panel-dark bg-gradient-to-br from-[#D3FD50] to-[#b8e03e] inline-block glow-accent glass-hover animate-glow-pulse'>
              <h2 className='font-[font2] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase text-black mb-4 sm:mb-6 text-layer-2'>
                15% Lifetime
              </h2>
              <p className='font-[font1] text-lg sm:text-xl lg:text-2xl text-black text-layer-1'>
                Commission Rate
              </p>
            </div>
          </div>

          {/* Program Overview */}
          <section className='component-margin'>
            <h2 className='font-[font2] heading-responsive-lg uppercase text-layer-2 mb-8 sm:mb-10 lg:mb-12 text-center text-glow'>
              Program Overview
            </h2>
            <div className='floating-panel-dark'>
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1 text-center max-width-text'>
                Our affiliate program is designed for wedding professionals, influencers, and anyone with connections in the wedding industry. 
                Earn substantial commissions by referring couples to our premium wedding videography services.
              </p>
            </div>
          </section>

          {/* Benefits Grid */}
          <section className='component-margin'>
            <h2 className='font-[font2] heading-responsive-lg uppercase text-layer-2 mb-10 sm:mb-12 lg:mb-16 text-center text-glow'>
              Program Benefits
            </h2>
            <div className='responsive-grid-2'>
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className='group floating-panel-dark glass-hover glass-click gpu-accelerated'
                >
                  <div className='text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8 micro-bounce glow-accent'>
                    {benefit.icon}
                  </div>
                  
                  <div className='space-y-4 sm:space-y-6'>
                    <h3 className='font-[font2] heading-responsive-md uppercase text-layer-2'>
                      {benefit.title}
                    </h3>
                    <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                      {benefit.description}
                    </p>
                  </div>

                  <div className='w-full accent-line mt-6 sm:mt-8 rounded-full glow-accent'></div>
                </div>
              ))}
            </div>
          </section>

          {/* Requirements */}
          <section className='component-margin'>
            <h2 className='font-[font2] heading-responsive-lg uppercase text-layer-2 mb-6 sm:mb-8 text-center text-glow'>
              Eligibility Requirements
            </h2>
            <div className='glass rounded-xl sm:rounded-2xl responsive-padding-lg'>
              <ul className='space-y-3 sm:space-y-4'>
                {requirements.map((requirement, index) => (
                  <li key={index} className='flex items-start space-x-3 sm:space-x-4'>
                    <span className='w-5 h-5 sm:w-6 sm:h-6 bg-[#D3FD50] rounded-full flex items-center justify-center flex-shrink-0 mt-1 glow-accent'>
                      <span className='text-black text-xs sm:text-sm font-bold'>{index + 1}</span>
                    </span>
                    <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                      {requirement}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Sign-up Process */}
          <section className='component-margin'>
            <h2 className='font-[font2] heading-responsive-lg uppercase text-layer-2 mb-6 sm:mb-8 text-center text-glow'>
              How to Join
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
              {[
                { step: '01', title: 'Apply', desc: 'Submit your application with your background and referral strategy' },
                { step: '02', title: 'Review', desc: 'Our team reviews your application within 48 hours' },
                { step: '03', title: 'Approval', desc: 'Receive your unique affiliate link and marketing materials' },
                { step: '04', title: 'Earn', desc: 'Start referring clients and earning 15% lifetime commissions' }
              ].map((item, index) => (
                <div key={index} className='text-center space-y-3 sm:space-y-4'>
                  <div className='w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#D3FD50] rounded-full flex items-center justify-center mx-auto glow-accent micro-bounce'>
                    <span className='font-[font2] text-base sm:text-lg lg:text-xl text-black'>{item.step}</span>
                  </div>
                  <h3 className='font-[font2] text-lg sm:text-xl uppercase text-layer-2'>{item.title}</h3>
                  <p className='font-[font1] text-sm sm:text-base leading-relaxed text-layer-1'>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className='component-margin'>
            <h2 className='font-[font2] heading-responsive-lg uppercase text-layer-2 mb-6 sm:mb-8 text-center text-glow'>
              Frequently Asked Questions
            </h2>
            <div className='space-y-4 sm:space-y-6'>
              {faqItems.map((faq, index) => (
                <div key={index} className='glass rounded-lg sm:rounded-xl responsive-padding-md'>
                  <h3 className='font-[font2] text-lg sm:text-xl lg:text-2xl uppercase text-[#D3FD50] mb-3 sm:mb-4 text-glow'>
                    {faq.question}
                  </h3>
                  <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* AmouraWorks Branding */}
          <section className='component-margin'>
            <div className='floating-panel-dark rounded-xl sm:rounded-2xl text-center'>
              <h3 className='font-[font2] heading-responsive-lg uppercase text-[#D3FD50] mb-4 sm:mb-6 text-glow'>
                Powered by AmouraWorks
              </h3>
              <p className='font-[font1] text-responsive text-layer-2 leading-relaxed mb-6 sm:mb-8 max-width-text'>
                Notre programme d'affiliation est géré par AmouraWorks, garantissant des paiements fiables, un suivi transparent et un support professionnel.
              </p>
              <div className='inline-flex items-center space-x-3 sm:space-x-4'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 bg-[#D3FD50] rounded-full flex items-center justify-center glow-accent micro-bounce'>
                  <span className='font-[font2] text-black text-lg sm:text-xl'>A</span>
                </div>
                <span className='font-[font2] text-xl sm:text-2xl lg:text-3xl text-layer-2 uppercase'>
                  AmouraWorks
                </span>
              </div>
            </div>
          </section>

          {/* Contact for Affiliates */}
          <section className='component-margin'>
            <h2 className='font-[font2] heading-responsive-lg uppercase text-layer-2 mb-6 sm:mb-8 text-center text-glow'>
              Affiliate Support
            </h2>
            <div className='glass rounded-lg sm:rounded-xl responsive-padding-md text-center'>
              <p className='font-[font1] text-responsive text-layer-1 mb-3 sm:mb-4'>
                Questions about the affiliate program? Our dedicated team is here to help.
              </p>
              <div className='space-y-1 sm:space-y-2'>
                <p className='font-[font1] text-responsive text-layer-1 break-all sm:break-normal'>
                  <strong>Email:</strong> affiliates@amouraworks.com
                </p>
                <p className='font-[font1] text-responsive text-layer-1'>
                  <strong>Response Time:</strong> Within 24 hours
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className='text-center'>
            <Link 
              to='/contact'
              className='btn-pill btn-primary h-12 sm:h-14 lg:h-16 px-8 sm:px-12 lg:px-16 inline-flex items-center justify-center group'
            >
              <span className='font-[font2] text-base sm:text-lg lg:text-xl'>
                Apply Now
              </span>
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default AffiliateProgram