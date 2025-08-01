import { MdEmail, MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const ConsultantCard = ({ data }) => {
  if (!data) return null;

  const {
    name = "Unknown",
    image = "",
    position = "Not specified",
    language = [],
    email = "",
    phoneNumber = ""
  } = data;

  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-[300px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 pb-7">
        <h2 className="text-lg font-semibold py-2 text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">{position}</p>

        {/* Language */}
        {language.length > 0 && (
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-medium text-gray-800">Languages:</span>
            {language.map((lang, idx) => (
              <span key={idx} className="text-blue-600">
                {" "}
                {lang}
              </span>
            ))}
          </p>
        )}

        {/* Icons */}
        <div className="mt-4 flex justify-center items-center gap-6 text-gray-600 text-lg">
          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="border-r border-black w-12 flex justify-center"
            title="Email"
          >
            <MdEmail className="hover:text-blue-600" />
          </a>

          {/* Call */}
          <a
            href={`tel:${phoneNumber}`}
            className="border-r border-black w-12 flex justify-center"
            title="Call"
          >
            <MdCall className="hover:text-blue-600" />
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 flex justify-center"
            title="WhatsApp"
          >
            <FaWhatsapp className="hover:text-green-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ConsultantCard;

// import { MdEmail, MdCall } from "react-icons/md";
// import { FaWhatsapp } from "react-icons/fa";

// const ConsultantCard = ({ data }) => {
//   return (
//     <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden   hover:shadow-lg transition-all duration-300">
//       {/* Image */}
//       <div className="w-full ">
//         <img
//           src={data.img}
//           alt={data.img}
//           className="w-full h-[300px] object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-4 pb-7">
//         <h2 className="text-lg font-semibold py-2 text-gray-800">
//           {data.name}
//         </h2>
//         <p className="text-sm text-gray-500">{data.position} </p>

//         <p className="mt-2 text-sm text-gray-600">
//           <span className="font-medium text-gray-800">Languages:</span>
//           {data.languages.map((lang, idx) => (
//             <span key={idx} className="text-blue-600">
//               {" "}
//               {lang}{" "}
//             </span>
//           ))}
//         </p>

//         {/* Icons */}
//         <div className="mt-4 flex justify-center items-center gap-6 text-gray-600 text-lg">
//           <button className="  border-r   border-black w-12 " title="Email">
//             <MdEmail className="  hover:text-blue-600" />
//           </button>
//           <button className="border-r border-black w-12 " title="Call">
//             <MdCall className="hover:text-blue-600" />
//           </button>
//           <button className="w-12 " title="WhatsApp">
//             <FaWhatsapp className=" hover:text-green-600 " />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConsultantCard;
