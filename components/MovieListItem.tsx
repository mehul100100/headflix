"use client";
import Image from "next/image";
import React, { useState } from "react";
import { isEmpty } from "lodash";
import { BsPlay } from "react-icons/bs";

import FavoriteButton from "./FavoriteButton";
import PlayButton from "./PlayButton";
const MovieListItem = ({ movies }: { movies: any }) => {
  if (isEmpty(movies)) {
    return null;
  }

  return (
    <div className="flex flex-row w-full space-x-4 overflow-x-auto overflow-y-hidden no-scrollbar">
      {movies.map((movie: any) => (
        <div
          key={movie.id}
          className="min-w-[200px] lg:max-w-[250px] relative cursor-pointer z-20 hover:scale-125 transition"
        >
          <img
            src={movie.thumbnailUrl}
            alt="thumbnail"
            className="rounded-lg w-full h-full object-cover"
          />

          <div className="opacity-0 flex flex-col absolute bottom-[10%] left-[15%] space-y-2 hover:opacity-100 transition">
            <div className="flex flex-row space-x-2">
              <PlayButton movieId={movie?.id} />
              <FavoriteButton movieId={movie?.id} />
            </div>
            <div className="text-white text-[12px] lg:text-lg font-bold">
              {movie.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieListItem;
