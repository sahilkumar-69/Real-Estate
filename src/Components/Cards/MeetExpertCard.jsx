import { MdEmail, MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const ConsultantCard = () => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden   hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="w-full">
        <img
          src="https://img.freepik.com/free-photo/working-business-project_1098-15395.jpg?semt=ais_hybrid&w=740"
          alt="Consultant"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 pb-7">
        <h2 className="text-lg font-semibold py-2 text-gray-800">
          Mariz Nessim
        </h2>
        <p className="text-sm text-gray-500">Consultant - Primary Sales</p>

        <p className="mt-2 text-sm text-gray-600">
          <span className="font-medium text-gray-800">Languages:</span>{" "}
          <span className="text-blue-600">English</span>,{" "}
          <span className="text-blue-600">Arabic</span>
        </p>

        {/* Icons */}
        <div className="mt-4 flex justify-center items-center gap-6 text-gray-600 text-lg">
          <button className="  border-r border-black w-12 " title="Email">
            <MdEmail className="hover:text-blue-600" />
          </button>
          <button className="border-r border-black w-12 " title="Call">
            <MdCall className="hover:text-blue-600" />
          </button>
          <button className="w-12 " title="WhatsApp">
            <FaWhatsapp className=" hover:text-green-600 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultantCard;
