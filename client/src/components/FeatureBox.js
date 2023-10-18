import React from 'react';

const FeatureBox = ({ image, title, description, linkHref, swapPositionsOnLargeScreen }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl md:flex">
      <div className={`md:shrink-0 ${swapPositionsOnLargeScreen ? 'md:order-first' : ''}`}>
        <img
          className="h-48 w-full object-cover md:h-full md:w-48"
          src={image}
          alt="Image"
        />
      </div>
      <div className={`p-8 ${swapPositionsOnLargeScreen ? '' : 'md:order-first'}`}>
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {title}
        </div>
        <a
          href={linkHref}
          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
        >
          Learn More
        </a>
        <p className="mt-2 text-slate-500">{description}</p>
      </div>
    </div>
  );
};


export default FeatureBox;
