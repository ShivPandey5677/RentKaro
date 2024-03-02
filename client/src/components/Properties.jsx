import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Properties = () => {
  const boxVariant = {
    visible: { x: 0, scale: 1 },
    hidden: { x: '100vw', scale: 0.5 }
  };
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <div className="h-screen bg-[#535C91] text-white">
      <div className="container mx-auto flex items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.5, type: 'spring', stiffness: 80 }}
          className="flex flex-col items-center"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-4xl font-bold mb-4 gradient-textpsych"
          >
            Find More than just a room; find companionship,<br></br>
            compatibility, and a home away from home <br></br>
            with RentKaro's seamless roommate matching
          </motion.h1>
          <motion.p
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-xl mb-8"
          ><br></br>
            RentKaro, where dreams take flight, finding your perfect PG in just a byte!
          </motion.p>
          <div className="flex flex-row">
            <Link to="/psychiatrist">
              <button className="font-sans text-lg rounded-md uppercase text-white cursor-pointer border-3 border-blue-500 p-2 px-4 relative select-none shadow-1 shadow-2 shadow-3 shadow-4 shadow-5 transition-transform duration-200 ease-in-out transform hover:translate-x-1 hover:translate-y-1 bg-[#0c131d] hover:bg-[#223d62] mr-4">
                Find Properties
              </button>
            </Link>
            <Link to="/psychiatrist">
              <button className="font-sans text-lg rounded-md uppercase text-white cursor-pointer border-3 border-blue-500 p-2 px-4 relative select-none shadow-1 shadow-2 shadow-3 shadow-4 shadow-5 transition-transform duration-200 ease-in-out transform hover:translate-x-1 hover:translate-y-1 bg-[#0c131d] hover:bg-[#223d62]">
                List Properties
              </button>
            </Link>
          </div>
        </motion.div>
        <div ref={ref} className="flex justify-center h-[80%]">
          <motion.img initial="hidden" animate={controls} variants={boxVariant} src="/assets/images/new1.jpg" alt="Animated image" className="rounded-lg mb-8 m-8 w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Properties;
