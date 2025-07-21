const benefits = [
  {
    id: "01",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReOES2_3L6wZITDQ6mXRsKSYwFSLoFpY0oxw&s", // Replace with your local image path or URL
    title: "Over 12 Lac properties",
    description: "10,000+ properties are added every day",
  },
  {
    id: "02",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/047/309/930/small/verified-badge-profile-icon-png.png",
    title: "Verification by nexus team",
    description: "Photos / Videos and other details are verified on location",
  },
  {
    id: "03",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpYbW-Sx7_ZlFPF_OK3lROmtA96OikpDrZow&s",
    title: "Large user base",
    description:
      "High active user count and user engagement to find and close deals",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-12 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
          Benefits of nexus
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Why choose nexus?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="flex shadow-sm rounded-md flex-col items-center text-center p-6"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 hover:rotate-360 hover:scale-75  transition ease-in-out duration-1000   h-16 object-contain mb-4"
              />
              <h3 className="text-blue-600 font-semibold text-sm">
                {item.id}. <span className="text-gray-900">{item.title}</span>
              </h3>
              <p className="text-gray-500 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
