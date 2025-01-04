import React from "react";
// import "./TornPaperEffect.css"; // Custom styles for the torn paper effect
const Hero = () => {
  return (
    <div className="flex">
      <div className="left w-1/4 uppercase">
        <div className="flex items-center justify-center min-h-screen ">
          <div className="text-center space-y-2">
            <div className="text-5xl tracking-tighter font-medium  text-red-700 opacity-90">
              <div className="mb-3 text-3xl text-left">WHERE</div>
              <div className="mb-3 text-left">ARTISTRY</div>
              <div className="mb-3 text-3xl text-left">MEETS</div>
              <div className="text-left">INNOVATION</div>
            </div>
          </div>
        </div>
      </div>
      <div className="right w-3/4">
        <video className="w-full h-auto" controls autoPlay loop muted>
          <source src="video.mp4" type="video/mp4" />
          {/* Your browser does not support the video tag. */}
        </video>
      </div>
    </div>
  );
};

export default Hero;
