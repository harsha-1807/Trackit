// pages/about.tsx

// NuxtDevelopmentComponent.tsx

import React from 'react';

const NuxtDevelopmentComponent: React.FC = () => {
  return (
    <div className="py-16 bg-white " style={{marginTop:"20vh"}}>  
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:w-5/12 lg:w-5/12">
              <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="" />
            </div>
            <div className="md:w-7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl" style={{color:"#905de8"}}>Track It development is carried out by passionate developers</h2>
              <p className="mt-6 text-gray-600">Welcome to our Track It website, where you can explore a wide array of products! With our innovative platform, you'll have the ability to effortlessly monitor the highs, lows, and averages of product prices. Stay informed and make informed purchasing decisions with our comprehensive pricing data at your fingertips. Happy shopping!</p>
              <p className="mt-4 text-gray-600"> At our Track It website, we're dedicated to providing exceptional shopping experiences. Explore our curated selection and enjoy transparent pricing insights. Welcome to your go-to destination for quality products!</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default NuxtDevelopmentComponent;
