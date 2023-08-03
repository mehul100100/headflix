import React from "react";
import { AiOutlineDown } from "react-icons/ai";
const DropDown = ({ data }: { data: any }) => {
  return (
    <div>
      <div className="group relative z-50">
        <button className="bg-black text-white py-2 px-6 rounded inline-flex items-center group">
          <span className="mr-1">Menu</span>
          <svg
            className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>

        {/* menu list */}
        <ul className="rounded absolute hidden bg-black text-white pt-1 group-hover:block w-56">
          {data.map((item: any) => (
            <li
              key={item.id}
              className="bg-black hover:text-gray-400 py-4 px-4 cursor-pointer"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
