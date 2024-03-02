import React from 'react';

const Image = () => {
  return (
    <div className="py-6 max-w-[1200px] mx-auto" id="Image">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-3xl text-white">
              My <span>Projects</span>
            </h2>
            <p className="text-gray-500">
              These are my ongoing projects to get used to React and develop my skills.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
        {[1, 2, 3, 4].map((index) => (
          <a href="/" key={index} className="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
            <img
              src="https://via.placeholder.com/300" // Placeholder image URL
              alt={`Project ${index}`}
              className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Image;
