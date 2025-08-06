export default function HeroSection({ img, title, desc }) {
  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="relative z-10 max-w-6xl w-full px-4 md:px-6 text-white">
        {/* Breadcrumb */}

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-3xl">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8 max-w-xl">{desc}</p>
      </div>
    </div>
  );
}
