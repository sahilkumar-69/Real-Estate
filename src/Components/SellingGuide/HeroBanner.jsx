import React from 'react';
export default function HeroBanner({ imageUrl, title }) {
  return (
    <div className="w-full h-64 md:h-96 bg-cover bg-center flex items-center justify-center"
         style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1 className="text-3xl md:text-5xl text-white font-bold bg-black bg-opacity-50 p-4 rounded">{title}</h1>
    </div>
  );
}
