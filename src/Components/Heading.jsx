import React from "react";

const Heading = ({ headingLines }) => {
  return (
    <div>
      <h1 className="text-4xl font-serif font-semibold " >{headingLines}</h1>
    </div>
  );
};

export default Heading;
