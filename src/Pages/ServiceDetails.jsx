import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`https://realestatebackend-2-v5e5.onrender.com/api/All-Services/${id}`);
        const data = await res.json();
        setService(data); // depends on API structure
      } catch (err) {
        setError("Failed to load service.");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!service) return <p className="text-center">No service found.</p>;

  return (
    <div className="px-6 md:px-20 py-10 bg-[#f9f9f9] min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <img src={service.image} alt={service.title} className="w-full max-h-[400px] object-cover rounded" />
      <p className="mt-4 text-gray-700 leading-relaxed">{service.description}</p>
    </div>
  );
};

export default ServiceDetails;
