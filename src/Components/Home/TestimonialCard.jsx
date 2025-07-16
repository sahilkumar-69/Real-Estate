import React from "react";

const TestimonialCard = () => {
  return (
    <div className="p-3 w-[300px] h-[400px] border-[1px] flex flex-col items-center justify-around border-black" >
      <div className="flex  justify-between">
        <img className="w-12 h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT58-VVT8Wch6ligqL9BVGs4hHtZ2ChZeURvA&s" alt="" />
        <div>
          <h4>name</h4>
          <p>1 year ago</p>
          <p>◤◤◤◤◤◤</p>
        </div>
      </div>
      <div className="text-2xl" >Found the perfect inverstment property!</div>
      <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis minima nemo veniam et ipsa, possimus voluptatum labore, libero commodi maxime vitae incidunt esse?</div>
    </div>
  );
};

export default TestimonialCard;
