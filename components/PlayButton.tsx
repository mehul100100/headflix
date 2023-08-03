"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { BsPlay } from "react-icons/bs";
const PlayButton = ({ movieId }: any) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/watch/${movieId}`)}
      className="cursor-pointer group/item w-8 h-8 rounded-full 
      border-2 flex justify-center items-center transition duration border-white 
      bg-transparent hover:bg-white"
    >
      <BsPlay className="group-hover/item:text-black transition duration text-white" />
    </div>
  );
};

export default PlayButton;
