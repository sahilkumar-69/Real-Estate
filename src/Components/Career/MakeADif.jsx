 

const MakeADifference = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase mb-3">
            Make a Difference
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-blue-900 leading-snug">
            Here at Nexus Estate, we believe that the best way to predict the
            future is to create it.
          </h2>
        </div>

        {/* Right Side */}
        <div className="text-gray-700 space-y-6">
          <p>
            The more the number of failures you have, the closer you are towards
            success. The lesser the number of failures you have the more distant
            you are towards success.
          </p>
          <p>
            At Nexus, we aren't just a team; we are a close-knit family. We work
            hard and play hard. We celebrate every team member, every milestone,
            and every achievement.
          </p>
          <p>
            Offering a friendly and fun work-environment, Nexus invests in each
            member of the team in terms of time and training sessions. If you
            are looking for the next growth period in your career, Nexus Estate
            is your calling. Will you answer?
          </p>
          <div>
            <p className="font-bold text-blue-900">Ankit Surekha & Archit Surekha</p>
            <p className="text-sm text-gray-500">CEO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeADifference;
