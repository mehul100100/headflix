"use client";
import useMovieList from "@/hooks/useMovieList";
import React from "react";
import MovieListItem from "./MovieListItem";
import useFavoriteList from "@/hooks/useFavorites";

const FavoriteList = () => {
  // const data = useFavoriteList();
  const { data = [], isLoading } = useFavoriteList();
  // console.log(data);

  return (
    <div>
      <div className="flex flex-col mx-8 my-8 space-y-4">
        <div className="text-2xl font-bold text-white">My List</div>
        <div className="flex flex-row">
          {!isLoading && <MovieListItem movies={data?.favoriteMovies} />}
        </div>
      </div>
    </div>
  );
};

export default FavoriteList;
