
import  {useEffect} from "react";

import TeamGrid from "../Components/Cards/MeetMember";
import VideoCard from "../Components/Aboutus/videoCard";
import SubscribeSection from "../Components/SubscribeSection";
import ContactForm from "../Components/Home/ContactForm";

const MeetTeam = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
 const teamMembers = [
   {
     name: "Feride Shimshilova",
     role: "Associate Director",
     department: "Management",
     languages: ["English", "Russian"],
     image: "public/assets/meetteam/men.jpg",
   },
   {
     name: "Omar Kabalan",
     role: "Associate Director",
     department: "Brokers",
     languages: ["English", "Arabic"],
     image: "public/assets/meetteam/men1.jpg",
   },
   {
     name: "Elham Forouhar",
     role: "Associate Director",
     department: "Brokers",
     languages: ["English", "Persian"],
     image: "public/assets/meetteam/men2.jpg",
   },
   {
     name: "Basit Nakati",
     role: "Associate Director",
     department: "Management",
     languages: ["English"],
     image: "public/assets/meetteam/men3.jpg",
   },
   {
     name: "Ayesha Khan",
     role: "Senior Manager",
     department: "Management",
     languages: ["English", "Hindi"],
     image: "public/assets/meetteam/hello.jpg",
   },
   {
     name: "Ravi Mehta",
     role: "Broker",
     department: "Brokers",
     languages: ["English", "Gujarati"],
     image: "public/assets/meetteam/men4.jpg",
   },
   {
     name: "Lina D’Souza",
     role: "Operations Head",
     department: "Management",
     languages: ["English", "Konkani"],
     image: "public/assets/meetteam/hello1.jpg",
   },
   {
     name: "Ahmed Farouq",
     role: "Real Estate Broker",
     department: "Brokers",
     languages: ["English", "Arabic"],
     image: "public/assets/meetteam/men5.jpg",
   },
   {
     name: "Sneha Patil",
     role: "Finance Manager",
     department: "Management",
     languages: ["English", "Marathi"],
     image: "public/assets/meetteam/hello2.jpg",
   },
   {
     name: "James Bennett",
     role: "Associate Broker",
     department: "Brokers",
     languages: ["English"],
     image: "public/assets/meetteam/men6.jpg",
   },
   {
     name: "Nisha Verma",
     role: "Legal Advisor",
     department: "Management",
     languages: ["English", "Hindi"],
     image: "public/assets/meetteam/hello3.jpg",
   },
   {
     name: "Zaid Al Hashmi",
     role: "Senior Property Consultant",
     department: "Brokers",
     languages: ["English", "Arabic"],
     image: "public/assets/meetteam/men7.jpg",
   },
   {
     name: "Priya Shah",
     role: "Marketing Head",
     department: "Management",
     languages: ["English", "Gujarati"],
     image: "public/assets/meetteam/hello4.jpg",
   },
   {
     name: "Tom Williams",
     role: "Leasing Consultant",
     department: "Brokers",
     languages: ["English"],
     image: "public/assets/meetteam/men8.jpg",
   },
   {
     name: "Kavita Singh",
     role: "HR Manager",
     department: "Management",
     languages: ["English", "Hindi"],
     image: "public/assets/meetteam/hello5.jpg",
   },
   {
     name: "Mohamed Khalid",
     role: "Property Consultant",
     department: "Brokers",
     languages: ["English", "Arabic"],
     image: "public/assets/meetteam/men9.jpg",
   },
   {
     name: "Rohit Nair",
     role: "Technical Lead",
     department: "Management",
     languages: ["English", "Malayalam"],
     image: "public/assets/meetteam/men10.jpg",
   },
   {
     name: "Sara Dahiya",
     role: "Client Relations",
     department: "Brokers",
     languages: ["English", "Hindi"],
     image: "public/assets/meetteam/hello6.jpg",
   },
   {
     name: "Deepak Sinha",
     role: "Strategy Consultant",
     department: "Management",
     languages: ["English", "Bengali"],
     image: "public/assets/meetteam/men7.jpg",
   },
   {
     name: "Julia Mendes",
     role: "Sales Advisor",
     department: "Brokers",
     languages: ["English", "Portuguese"],
     image: "public/assets/meetteam/men9.jpg",
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
 
        Each team member brings a unique skill set to Nexus India. We use those
        skills to provide you with the best possible Estate Agent service.
 
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
