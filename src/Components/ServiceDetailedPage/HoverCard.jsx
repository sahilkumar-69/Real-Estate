export const Card = ({ bg, title, description }) => {
  return (
    <div className="group w-full h-100 lg:h-80 lg:w-64 [perspective:1000px]">
      <div  className="relative  h-full w-full rounded-2xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 flex flex-col items-center justify-end rounded-2xl bg-white p-4 [backface-visibility:hidden]">
          <div className="absolute inset-0">
            <img
              src={bg}
              alt={title}
              className="absolute inset-0 h-full w-full rounded-2xl object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900 to-transparent"></div>
          </div>
          <h3 className="relative z-10 text-xl font-bold text-white text-center mb-4">
            {title}
          </h3>
        </div>

        <div className="absolute inset-0 rounded-2xl bg-transparent  p-6 text-black [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <p className="text-sm leading-relaxed">{description}</p>
          <div className="absolute bottom-6 left-6 text-xs text-blue-900 font-bold ">
            Nexus Real Estate
          </div>
        </div>
      </div>
    </div>
  );
};
