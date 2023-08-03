import React from "react";

const NavbarItem = ({ label }: { label: string }) => {
  return (
    <div className="cursor-pointer hover:text-gray-400 transition">{label}</div>
  );
};

export default NavbarItem;
