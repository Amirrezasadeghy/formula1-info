import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-96 ml-10 mr-10 mt-10 rounded-tr-3xl rounded-bl-3xl bg-gray-900">
      <video
        className="absolute inset-0 w-full h-full object-cover rounded-tr-3xl rounded-bl-3xl"
        src="/assets/HeroVideo.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 bg-black opacity-50 rounded-tr-3xl rounded-bl-3xl"></div>
      <div className="relative flex-col z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold font-f1wide">BELGIUM 2024</h1>
        <h3 className='font-f1regular text-white text-sm p-3 mt-1 bg-white bg-opacity-25 rounded-full'>26 - 28 JUL</h3>
        <h6 className=' absolute right-5 bottom-5 font-f1regular text-white text-sm'>Footages belong to <a href='https://www.formula1.com/' className='underline underline-offset-4 hover:text-red-600'>Formula1</a></h6>
        <h6 className=' absolute left-5 bottom-5 font-f1regular text-white text-sm hover:text-red-600'><a href='https://www.formula1.com/' className='underline underline-offset-4'>See Race Stats</a></h6>
      </div>
    </div>
  );
};

export default Hero;