"use client";
import useMovieList from "@/hooks/useMovieList";
import React from "react";
import MovieListItem from "./MovieListItem";

const MovieList = () => {
  const { data = [], isLoading } = useMovieList();

  return (
    <div>
      <div className="flex flex-col mx-8 my-8 space-y-4">
        <div className="text-2xl font-bold text-white">Trending Now</div>
        <div className="flex flex-row w-full">
          {!isLoading && <MovieListItem movies={data?.movies} />}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
