
const Professional = () => {
  return (
    <div className=" p-12 bg-[#d0eaf5] flex items-center justify-around ">
      <div className="w-1/3 rounded-xl overflow-hidden object-cover ">
        <img
          src="src\assets\pexels-weirdfish-2640604.jpg"
          alt=""
        />
      </div>
      <div className="w-1/2" >
        <h2 className="text-4xl font-semibold">
          Help you to reach to your dream house{" "}
        </h2>
        <p className="my-4" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          excepturi, corrupti perspiciatis aliquam impedit nesciunt aspernatur
          doloribus aperiam unde voluptas quidem, rem numquam modi beatae
          veritatis itaque, aut quod incidunt placeat magni cum. Reiciendis rem
          reprehenderit quo, a omnis voluptatem sunt aliquam! Vel nulla veniam
          aliquid cupiditate ut minima volup 
        </p>
        <button className="p-3 bg-amber-600 text-white rounded-md " >Learn More</button>
      </div>
    </div>
  );
};

export default Professional;
