import React from "react";

export default function RelatedProperties({ properties }) {
  return (
    <div className="py-12 max-w-6xl mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Featured Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((p, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow overflow-hidden">
            <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-gray-600">{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
