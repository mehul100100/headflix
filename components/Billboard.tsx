"use client";
import useRandomMovie from "@/hooks/useRandomMovie";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
const Billboard = () => {
  const { data, isLoading } = useRandomMovie();
  const router = useRouter();

  return (
    <div>
      <div className="relative flex flex-col h-[42.86vw] min-h-[45vh] max-h-[80vh]">
        {!isLoading && (
          <>
            <video
              autoPlay
              muted
              loop
              poster={data?.randomMovie?.thumbnailUrl}
              src={data?.randomMovie?.videoUrl}
              className="w-full h-full object-cover brightness-30"
            />

            <div className="absolute top-[30%] ml-8">
              <p className="text-white font-bold text-4xl">
                {data?.randomMovie?.title}
              </p>
              <p className="text-md text-white mt-4 max-w-[80%] lg:max-w-[50%]">
                {data?.randomMovie?.description}
              </p>
              <div className="flex flex-row space-x-2">
                <button
                  onClick={() => router.push(`/watch/${data?.randomMovie?.id}`)}
                  className="text-white bg-[#DC2727] space-x-2 flex flex-row items-center mt-4 px-8 py-2 rounded-lg hover:bg-opacity-80 transition"
                >
                  <BsPlayFill size={20} />
                  <div>Play</div>
                </button>
                <button className="text-white bg-white bg-opacity-30 space-x-2 flex flex-row items-center mt-4 border-white px-4 py-2 rounded-lg hover:bg-opacity-20 transition">
                  <AiOutlineInfoCircle size={20} />
                  <div>More Info</div>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Billboard;
