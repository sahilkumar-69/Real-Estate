import React, { useEffect } from "react";
import AwardSection from "../Components/ourAwards/AwardSection";
import AwardSlider from "../Components/ourAwards/AwardSlider";
import AwardBanner from "../Components/ourAwards/AwardBanner";
import MilestoneAwards from "../Components/ourAwards/MilestoneAwards";
import AwardCelebrationSection from "../Components/ourAwards/AwardCelebrationSection";
import ContactForm from "../Components/Home/ContactForm";

const OurAwardPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const milestone = {
    year: 2024,
    title: "A New Year, A New Milestone",
    desc: " Our dedication and excellence have been recognized once again. Here are the prestigious awards we've received this year.",
    awards: [
      {
        number: 1,
        title: "Sobha Star Awards 2024 – 2nd Place",
      },
      {
        number: 2,
        title:
          "Property Finder Awards 2024: DXB Enterprise Quality Brokerage of The Year (Secondary Team)",
      },
      {
        number: 3,
        title: "Recognized among DAMAC’s Top 20 Agencies for Q3",
      },
      {
        number: 4,
        title:
          "Golden Tree Best Property Management Company Award (Nexus Property Management)",
      },
      {
        number: 5,
        title: "Featured among Dubai’s Top 50 Brokerages by Property Time",
      },
      {
        number: 6,
        title: "DAMAC Broker Awards 2024 - 10th Place",
      },
      {
        number: 7,
        title: "Binghatti Broker Awards 2024 - 4th Place",
      },
      {
        number: 8,
        title:
          "Black Onyx Awards - Platinum Top Performing Partners Meraas and Nakheel",
      },
    ],
  };
  const milestone2 = {
    year: 2023,
    title: "Another Year of Outstanding Performances",
    desc: " Continuing our tradition of excellence, we achieved even greater heights with numerous awards celebrating our industry leadership.",
    awards: [
      {
        number: 1,
        title: "Innovation Experts Annual Ceremony 2023 Stakeholder award",
      },
      {
        number: 2,
        title:
          "Dar Global Top Performing Agency Award 2023",
      },
      {
        number: 3,
        title: "The black onyx awards 2023 by Meraas and Dubai properties",
      },
      {
        number: 4,
        title:
          "Sobha Realty-Platinum Signature Award",
      },
      {
        number: 5,
        title: "Sobha Realty- 1st place-Top performing channel partner Q2 2023",
      },
      {
        number: 6,
        title: "Sobha Realty- 1st place-outstanding performance award 2023",
      },
      {
        number: 7,
        title: "Sobha Realty- 1st place-Top performing channel partner Q1 2023",
      },
    ],
  };

  return (
    <main>
      <AwardSection />
      <AwardSlider />
      <startedSection />
      <AwardBanner />
      <MilestoneAwards {...milestone} />
      <AwardCelebrationSection image={"src/assets/meetteam/images.jpg"} />
      <MilestoneAwards {...milestone2} />
      <AwardCelebrationSection image={"src/assets/meetteam/happy.jpg"} />
      <ContactForm/>
    </main>
  );
};

export default OurAwardPage;
