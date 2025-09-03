import React from 'react'
import VideoCard from './VideoCard'

const VideoGrid = ({ videos, gridCols, aspectRatio }) => {
  return (
    <div className={`grid ${gridCols}`}>
      {videos.map((video, index) => (
        <VideoCard 
          key={index}
          videoId={video.videoId}
          aspectRatio={aspectRatio}
          index={index}
        />
      ))}
    </div>
  )
}

export default VideoGrid