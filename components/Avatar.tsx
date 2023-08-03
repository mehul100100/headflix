"use client";
import React from "react";
import Image from "next/image";
import profileImg from "@/public/images/default-red.png";

import { useRouter } from "next/navigation";
interface AvatarProps {
  name: string;
}

const Avatar = ({ name }: AvatarProps) => {
  const router = useRouter();
  return (
    <div>
      <div
        onClick={() => router.push("/")}
        className="flex flex-col items-center space-y-4 border-2 border-transparent cursor-pointer group overflow-hidden transition"
      >
        <Image
          src={profileImg}
          alt="profile page"
          className="w-40 border-2 border-gray-900 group-hover:border-white transition"
        />
        <div className="text-3xl text-gray-400 group-hover:text-white cursor-pointer transition">
          {name}
        </div>
      </div>
    </div>
  );
};

export default Avatar;
