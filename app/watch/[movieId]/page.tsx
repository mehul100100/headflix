"use client";
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const MoviePage = ({ params }: { params: { movieId: string } }) => {
  const router = useRouter();
  const { movieId } = params;
  const { data } = useMovie(movieId as string);
  return (
    <div>
      <div className="h-screen w-screen bg-black">
        <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
          <AiOutlineArrowLeft
            onClick={() => router.push("/")}
            size={30}
            className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition"
          />
          <p className="text-white text-1xl md:text-3xl font-bold">
            <span className="font-light">Watching:</span> {data?.title}
          </p>
        </nav>
        <video
          className="h-full w-full"
          autoPlay
          controls
          src={data?.videoUrl}
        ></video>
      </div>
    </div>
  );
};

export default MoviePage;
