import { useParams } from "react-router-dom";
import { properties } from "../data/properties";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));

  if (!property) {
    return <div className="p-6 text-red-500">Property not found.</div>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">{property.title}</h1>
      <p className="text-lg text-gray-600">{property.location}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {property.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Image ${idx}`}
              className="rounded shadow-md"
            />
          ))}
        </div>

        <div className="space-y-3 text-lg">
          <p><strong>Price:</strong> {property.price}</p>
          <p><strong>Beds:</strong> {property.beds}</p>
          <p><strong>Baths:</strong> {property.baths}</p>
          <p><strong>Area:</strong> {property.area} sq.ft</p>
          <p><strong>Status:</strong> {property.status}</p>
          <p><strong>Type:</strong> {property.type}</p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mt-8 mb-2">Property Description</h2>
        <p className="text-gray-700 text-lg">{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyDetails;
