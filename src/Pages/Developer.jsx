import DeveloperCard from "../Components/Developer/DeveloperCard";
import DeveloperHero from "../Components/Developer/DeveloperHero";
import ContactForm from "../Components/Home/ContactForm";
import { developers } from "../Data";

const Developers = () => {
  return (
    <div className="min-h-screen mt-15   bg-[#f7f7f7] py-10 px-4 md:px-16">
      {/* Hero Section */}
      <DeveloperHero />
      <div className="grid grid-cols-1 sm:grid-cols-2 my-3 md:grid-cols-3 lg:grid-cols-4  gap-6">
        {developers.map((dev) => (
          <DeveloperCard key={dev.id} {...dev} />
        ))}
      </div>
      <ContactForm />
    </div>
  );
};

export default Developers;
