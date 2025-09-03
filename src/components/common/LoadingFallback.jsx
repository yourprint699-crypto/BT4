import React from 'react'

const LoadingFallback = () => {
  return (
    <div className='min-h-screen section-dark flex items-center justify-center'>
      <div className="cinematic-overlay"></div>
      <div className='floating-panel-dark p-12 text-center space-y-8'>
        <div className='w-20 h-20 border-4 border-[#D3FD50] border-t-transparent rounded-full animate-spin mx-auto glow-accent animate-glow-pulse'></div>
        <p className='font-[font2] text-xl uppercase text-layer-2 text-glow'>Loading...</p>
      </div>
    </div>
  )
}

export default LoadingFallback