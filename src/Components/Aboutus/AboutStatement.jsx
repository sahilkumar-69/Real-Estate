import React from "react";

const AboutStatement = () => {
  return (
    <section className="w-full px-6 md:px-20 py-16 bg-white text-[#0D2344]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h4 className="uppercase text-sm text-gray-400 font-semibold mb-3">
            A word from our CEO
          </h4>
          <p className="text-2xl md:text-3xl leading-relaxed font-semibold text-[#0D2344]">
            We are a passionate and dynamic real estate agency in India,
            committed to connecting people with their ideal properties. With a
            deep understanding of the market and a client-first approach, we aim
            to redefine excellence in real estate.
          </p>

          <div className="mt-12">
            <h3 className="font-bold text-xl text-[#0D2344] mb-4">
              Our Goals:
            </h3>
            <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
              <li>
                <strong>Empowering Clients:</strong> To provide tailored
                guidance that helps investors and families make informed
                decisions and achieve their real estate aspirations.
              </li>
              <li>
                <strong>Enhancing Experiences:</strong> To deliver a
                hassle-free, efficient, and enjoyable real estate journey for
                all stakeholders.
              </li>
              <li>
                <strong>Fostering Diversity:</strong> To leverage our
                multicultural team to connect with clients worldwide and provide
                unique, localized insights.
              </li>
              <li>
                <strong>Innovating Solutions:</strong> To integrate advanced
                technology and market expertise into every service we offer,
                ensuring cutting-edge solutions.
              </li>
              <li>
                <strong>Building Trust:</strong> To maintain the highest
                standards of professionalism and integrity in all our
                interactions.
              </li>
            </ul>
          </div>
        </div>

        <div className="text-gray-700 space-y-6 text-base leading-relaxed">
          <div>
            <h3 className="font-bold text-lg text-[#0D2344] mb-2">
              Driving Excellence in India Real Estate
            </h3>
            <p>
              At the crux of our business is our relentless dedication to
              providing hassle-free, tailored real estate advice and consultancy
              for investors and families alike, helping them find their perfect
              property. Whether it’s a dream home or a smart investment, we are
              here to make the process seamless and rewarding.
            </p>
          </div>
          <p>
            Established in 2008, Nexus Real Estate is a leading real estate
            agency in India with a strong focus on transparency, honesty, and
            professionalism. Over the years, we have expanded our services to
            not only help you buy or lease a property but also manage your
            assets, secure financing options, and even find the perfect holiday
            home.
          </p>
          <p>
            We take immense pride in our diverse and dynamic team. Representing
            over 22 nationalities and speaking more than 45 languages, our team
            is equipped to address property-related questions and deliver
            personalized solutions to a global clientele.
          </p>

          <div>
            <h3 className="font-bold text-xl text-[#0D2344] mb-4">
              Our Commitment:
            </h3>
            <p>
              We believe in not just meeting expectations but exceeding them.
              With a proven track record and a comprehensive portfolio of
              services, we aim to redefine the real estate experience in India.
              Our mission is to make property ownership and investment
              accessible, transparent, and rewarding for everyone we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStatement;
