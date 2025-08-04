import React from "react";
import TeamGrid from "../Components/Cards/MeetMember";
import VideoCard from "../Components/Aboutus/videoCard";
import SubscribeSection from "../Components/SubscribeSection";
import ContactForm from "../Components/Home/ContactForm";

const MeetTeam = () => {
  const teamMembers = [
    {
      name: "Feride Shimshilova",
      role: "Associate Director",
      department: "Management",
      languages: ["English", "Russian"],
      image: "/images/team/feride.jpg",
    },
    {
      name: "Omar Kabalan",
      role: "Associate Director",
      department: "Brokers",
      languages: ["English", "Arabic"],
      image: "/images/team/omar.jpg",
    },
    {
      name: "Elham Forouhar",
      role: "Associate Director",
      department: "Brokers",
      languages: ["English", "Persian"],
      image: "/images/team/elham.jpg",
    },
    {
      name: "Basit Nakati",
      role: "Associate Director",
      department: "Management",
      languages: ["English"],
      image: "/images/team/basit.jpg",
    },
    {
      name: "Ayesha Khan",
      role: "Senior Manager",
      department: "Management",
      languages: ["English", "Hindi"],
      image: "/images/team/ayesha.jpg",
    },
    {
      name: "Ravi Mehta",
      role: "Broker",
      department: "Brokers",
      languages: ["English", "Gujarati"],
      image: "/images/team/ravi.jpg",
    },
    {
      name: "Lina D’Souza",
      role: "Operations Head",
      department: "Management",
      languages: ["English", "Konkani"],
      image: "/images/team/lina.jpg",
    },
    {
      name: "Ahmed Farouq",
      role: "Real Estate Broker",
      department: "Brokers",
      languages: ["English", "Arabic"],
      image: "/images/team/ahmed.jpg",
    },
    {
      name: "Sneha Patil",
      role: "Finance Manager",
      department: "Management",
      languages: ["English", "Marathi"],
      image: "/images/team/sneha.jpg",
    },
    {
      name: "James Bennett",
      role: "Associate Broker",
      department: "Brokers",
      languages: ["English"],
      image: "/images/team/james.jpg",
    },
    {
      name: "Nisha Verma",
      role: "Legal Advisor",
      department: "Management",
      languages: ["English", "Hindi"],
      image: "/images/team/nisha.jpg",
    },
    {
      name: "Zaid Al Hashmi",
      role: "Senior Property Consultant",
      department: "Brokers",
      languages: ["English", "Arabic"],
      image: "/images/team/zaid.jpg",
    },
    {
      name: "Priya Shah",
      role: "Marketing Head",
      department: "Management",
      languages: ["English", "Gujarati"],
      image: "/images/team/priya.jpg",
    },
    {
      name: "Tom Williams",
      role: "Leasing Consultant",
      department: "Brokers",
      languages: ["English"],
      image: "/images/team/tom.jpg",
    },
    {
      name: "Kavita Singh",
      role: "HR Manager",
      department: "Management",
      languages: ["English", "Hindi"],
      image: "/images/team/kavita.jpg",
    },
    {
      name: "Mohamed Khalid",
      role: "Property Consultant",
      department: "Brokers",
      languages: ["English", "Arabic"],
      image: "/images/team/mohamed.jpg",
    },
    {
      name: "Rohit Nair",
      role: "Technical Lead",
      department: "Management",
      languages: ["English", "Malayalam"],
      image: "/images/team/rohit.jpg",
    },
    {
      name: "Sara Dahiya",
      role: "Client Relations",
      department: "Brokers",
      languages: ["English", "Hindi"],
      image: "/images/team/sara.jpg",
    },
    {
      name: "Deepak Sinha",
      role: "Strategy Consultant",
      department: "Management",
      languages: ["English", "Bengali"],
      image: "/images/team/deepak.jpg",
    },
    {
      name: "Julia Mendes",
      role: "Sales Advisor",
      department: "Brokers",
      languages: ["English", "Portuguese"],
      image: "/images/team/julia.jpg",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4 text-left"></div>

      {/* Title */}
      <h2 className="text-4xl  text-center font-bold text-blue-900 mb-4">
        Meet our expert team
      </h2>

      {/* Description */}
      <p className="text-gray-700 max-w-2xl mx-auto mb-10 text-lg">
        Each team member brings a unique skill set to Provident Dubai. We use
        those skills to provide you with the best possible Estate Agent service.
      </p>

      <TeamGrid teamMembers={teamMembers} />
      <VideoCard />
      <div className=" my-10">
      <ContactForm />
      </div>
      <SubscribeSection />
    </section>
  );
};

export default MeetTeam;
