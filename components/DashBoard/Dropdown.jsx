// A dropdown to select from time periods (year, alltime, month, week, 24hrs)

import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All Time");
  const [options, setOptions] = useState([
    "All Time",
    "Year",
    "Month",
    "Week",
    "24hrs",
  ]);

  const toggle = () => setIsOpen(!isOpen);

  const handleSelect = (e) => {
    setSelected(e.target.innerText);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        <span>{selected}</span>
        <AiOutlineDown
          className={`${
            isOpen ? "transform rotate-180" : ""
          } w-5 h-5 text-gray-400`}
        />
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div className="py-1" role="none">
          {options.map((option) => (
            <a
              key={option}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={handleSelect}
            >
              {option}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
