"use client";
import React from "react";
import profileImg from "@/public/images/default-red.png";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { AiOutlineBell } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { signOut } from "next-auth/react";
import NavbarItem from "./NavbarItem";
import DropDown from "./DropDown";

const Navbar = () => {
  const NAVITEMS = [
    {
      id: 1,
      label: "Home",
    },
    {
      id: 2,
      label: "TV Series",
    },
    {
      id: 3,
      label: "Movies",
    },
    {
      id: 4,
      label: "New & Popular",
    },
    {
      id: 5,
      label: "My List",
    },
  ];

  return (
    <div>
      <div className="w-full flex flex-row item-center justify-between py-4 px-8">
        <div className="flex flex-row items-center space-x-4">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={150}
            height={20}
            className="cursor-pointer"
          />

          <div className="hidden flex-row items-center space-x-4 text-white lg:flex">
            {NAVITEMS.map((item) => (
              <NavbarItem label={item.label} key={item.id} />
            ))}
          </div>
        </div>
        <div className="block lg:hidden">
          <DropDown data={NAVITEMS} />
        </div>

        <div className="flex flex-row items-center space-x-4 text-white">
          <FiSearch
            size={20}
            className="hover:text-gray-400 cursor-pointer hidden lg:block"
          />
          <AiOutlineBell
            size={20}
            className="hover:text-gray-400 cursor-pointer hidden lg:block"
          />
          <div className="flex-row items-center cursor-pointer hidden lg:flex">
            <Image
              src={profileImg}
              alt="profile page"
              className="w-10 rounded-lg"
            />
            {/* <BiChevronDown size={30} /> */}
          </div>
          <button
            onClick={() => signOut()}
            className="border-2 border-white px-4 py-2 bg-transparent rounded-lg hover:bg-white hover:text-black transition"
          >
            Signout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
