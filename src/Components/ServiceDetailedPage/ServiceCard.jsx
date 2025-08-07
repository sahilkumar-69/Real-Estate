// ServiceCard.jsx
const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-[#e8edf3] p-6 rounded-lg    transition-all duration-300">
      <h3 className="text-lg font-semibold text-[#0f172a] mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default ServiceCard;
