import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BackToHome = () => {
  const location = useLocation()
  
  // Don't show on home page
  if (location.pathname === '/') {
    return null
  }

  return (
    <div className='fixed top-6 left-6 depth-5'>
      <Link 
        to='/'
        className='group flex items-center space-x-4 glass glass-hover glass-click px-8 py-4'
      >
        <span className='text-xl micro-bounce glow-accent'>
          ←
        </span>
        <span className='font-[font2] text-sm lg:text-base uppercase text-layer-2'>
          Home
        </span>
      </Link>
    </div>
  )
}

export default BackToHome