// A card will host the a component that will be passed as a child which is login or signup form.
// It is centered on the page
// Styled with tailwindcss

import React from "react";

const Card = ({ children }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-[#ACBFB7] rounded-lg shadow-lg p-8 m-4 ">
        {children}
      </div>
    </div>
  );
};

export default Card;
