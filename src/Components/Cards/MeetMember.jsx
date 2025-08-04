// const TeamGrid = ({teamMembers}) => {
//   return (
//     <section className="py-12 px-4 max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//         {teamMembers.map((member, index) => (
//           <div key={index} className="text-center">
//             <img
//               src={ "https://images.pexels.com/photos/32360758/pexels-photo-32360758.jpeg" }
//               alt={member.name}
//               className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
//             />
//             <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
//             <p className="text-gray-700">{member.role}</p>
//             <p className="mt-2 text-sm text-gray-600">
//               <span className="font-semibold">Languages:</span>{" "}
//               {member.languages.join(", ")}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TeamGrid;

import { useState } from "react";

const TeamGrid = ({ teamMembers }) => {
  const [selectedDept, setSelectedDept] = useState("Management");

  const filteredTeam = teamMembers.filter(
    (member) => member.department === selectedDept
  );

  return (
    <section className="pb-10 px-4 max-w-7xl mx-auto">
      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-10">
        {["Management", "Brokers"].map((dept) => (
          <button
            key={dept}
            onClick={() => setSelectedDept(dept)}
            className={`px-6 py-2 rounded border font-semibold ${
              selectedDept === dept
                ? "border-blue-900 text-blue-900"
                : "border-gray-300 text-gray-600"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {filteredTeam.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={
                "https://images.pexels.com/photos/32360758/pexels-photo-32360758.jpeg"
              }
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
            <p className="text-gray-700">{member.role}</p>
            <p className="mt-2 text-sm text-gray-600">
              <span className="font-semibold">Languages:</span>{" "}
              {member.languages.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamGrid;
