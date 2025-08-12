import React from "react";
import { Link } from "react-router-dom";

const TeamCultureSection = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-16 lg:px-18">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="  /assets/CareerImages/Team2.jpeg"
            alt="Nexus team"
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <p className="uppercase text-sm font-semibold text-gray-500 mb-2">
            Cultures & Values
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001c45] mb-6 leading-snug">
            At Nexus, we aren’t just a team, we are a close–knit family.
          </h2>
          <p className="text-gray-700 mb-4">
            We work hard and play hard. We celebrate every team member, every
            milestone, and every achievement. Offering a friendly and fun
            work-environment, Nexus invests in each member of the team in terms
            of time and training sessions.
          </p>
          <p className="text-gray-700 mb-8">
            If you are looking for the next growth period in your career, Nexus
            Estate is your calling. Will you answer?
          </p>

          <Link to="/meet-the-team">
            <button className="bg-orange-600 hover:bg-orange-700 transition-colors text-white px-6 py-3 rounded-lg font-semibold">
              Meet Our Team →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamCultureSection;
