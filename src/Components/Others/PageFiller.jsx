export default function ProjectPage() {
  return (
    <section className="bg-gray-50 min-h-screen px-4 py-10">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Project Title</h1>
          <p className="text-gray-500 mt-2 text-lg max-w-2xl mx-auto">
            A quick summary about the project, its purpose, and value proposition.
          </p>
        </header>

        {/* Featured Video/Image */}
        <div className="w-full aspect-video overflow-hidden rounded-xl shadow-lg">
          <video
            className="w-full h-full object-cover"
            src="/public/assets/hero_bg.mp4"
            controls
            poster="/public/assets/swiper.jpg"
          />
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              This project is focused on delivering a responsive and engaging user experience. 
              It was built using React and Tailwind CSS, and it includes media handling, dynamic content, and animations.
              The goal was to create a scalable and performant web interface for a wide audience.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Key Technologies</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>React (Hooks, Context)</li>
              <li>Tailwind CSS for utility-first styling</li>
              <li>Framer Motion for animations</li>
              <li>Responsive video/image layouts</li>
            </ul>
          </div>
        </div>

        {/* Image Gallery */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Gallery</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["/media/pic1.jpg", "/media/pic2.jpg", "/media/pic3.jpg", "/media/pic4.jpg"].map((src, i) => (
              <img
                key={i}
                src={"/public/assets/swiper.jpg"}
                alt={`Gallery ${i + 1}`}
                className="rounded-lg object-cover w-full h-60 shadow"
              />
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center pt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Want to know more?</h3>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
}
