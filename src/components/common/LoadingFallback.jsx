import React from 'react'

const LoadingFallback = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center'>
      <div className='floating-panel p-12 text-center space-y-8'>
        <div className='w-20 h-20 border-4 border-[#D3FD50] border-t-transparent rounded-full animate-spin mx-auto glow-accent'></div>
        <p className='font-[font2] text-xl uppercase text-gray-600 text-layer-1'>Loading...</p>
      </div>
    </div>
  )
}

export default LoadingFallback