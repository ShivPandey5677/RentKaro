import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <div className='my-7 sm:my-0 max-w-[1200px] h-full mx-auto flex flex-col-reverse sm:flex-row justify-center align-center' id='home'>

        <div className='flex-col my-auto mx-auto'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold text-purple-300'>Hi! I am Abhishek Jha</p>

          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "Webdesigner",
                1000,
                "Consultant",
                1000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-orange-100'>proficient beginner, Developing Skills</p>
          </div>
          <div className='text-5xl flex justify-start gap-16 my-7 text-purple-900'>
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillInstagram />
          </div>
          <div class="relative inline-flex group my-3">
            <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#866e84] to-[#4b1815] rounded-xl blur-ig group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a href='/' title="Download CV" role="button" class="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Download CV</a>
          </div>
        </div>

        <div className='my-auto'>
          <img className='w-[300px] sm:w-[500px] mx-auto h-auto' src={""} alt="profile pic" />
        </div>

      </div>
    </div>
  );
}

export default Hero;
