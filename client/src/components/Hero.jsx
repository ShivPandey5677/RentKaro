import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="bg-slate-900 text-white h-screen">
      <div className='w-full h-full mx-auto my-auto flex justify-center align-center' id='home'>

        <div className='flex-col mx-auto my-5'>
          <div className="my-10">
            <h2 className='h1-semibold text-4xl font-bold mt-8'> 
              <TypeAnimation
                sequence={[
                  "Find PG",
                  1000,
                  "Find Flats",
                  1000,
                  "List Properties",
                  1000,
                  "Roommate Matching",
                  1000,
                ]}
                wrapper='span'
                speed={35}
                repeat={Infinity}
              />
            </h2>
            <h4 className='h1-semibold text-purple-300'>Find Your Perfect Accommodation</h4>
          </div>

          <div className="relative inline-flex group my-3">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#1f2326] via-[#866e84] to-[#0d0606] rounded-xl blur-ig group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a href='/' title="Download CV" role="button" className="h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">CONTINUE</a>
          </div>
        </div>

        <div className="flex-none mr-6 ml-4">
          <img className="w-[500px] h-auto mb-8 mr-8" src="/assets/pic.jpg" alt="profile pic" />
        </div>

      </div>
    </div>
  );
}

export default Hero;
