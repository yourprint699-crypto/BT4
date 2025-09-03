import React from 'react';

const Video = () => {
  return (
    <div className="h-full w-full relative overflow-hidden">
      {/* Fallback image */}
      <img
        className="h-full w-full object-cover absolute inset-0 z-0"
        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        alt="Creative workspace background"
        loading="lazy"
      />

      {/* Main video */}
      <video
        className="h-full w-full object-cover absolute inset-0 z-10"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onError={(e) => {
          e.target.style.display = 'none'; // hide if video fails
        }}
      >
        <source
          src="/videos/bg.mp4" // ⚡ Try putting video in public/videos/bg.mp4
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
