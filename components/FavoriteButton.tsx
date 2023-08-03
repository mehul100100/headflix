import useCurrentUser from "@/hooks/useCurrentUser";
import React, { useCallback, useMemo } from "react";
import axios from "axios";
import { AiOutlinePlus, AiOutlineCheck } from "react-icons/ai";
import useFavorites from "@/hooks/useFavorites";
const FavoriteButton = ({ movieId }: any) => {
  // const isFavorite = true;
  const { mutate: mutateFavorites } = useFavorites();
  const { user, mutate } = useCurrentUser();
  const isFavorite = useMemo(() => {
    const list = user?.favoriteIds || [];
    return list.includes(movieId);
  }, [user, movieId]);

  const toggleFavorites = useCallback(async () => {
    let response;
    if (isFavorite) {
      response = await axios.delete("/api/favorite", { data: { movieId } });
    } else {
      response = await axios.post("/api/favorite", { movieId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;
    mutate({
      ...user,
      favoriteIds: updatedFavoriteIds,
    });
    mutateFavorites();
  }, [movieId, isFavorite, user, mutate, mutateFavorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;
  return (
    <div
      onClick={toggleFavorites}
      className="cursor-pointer group/item w-8 h-8 rounded-full 
      border-2 flex justify-center items-center transition duration border-white 
      bg-transparent hover:bg-white"
    >
      <Icon className="group-hover/item:text-black transition duration text-white" />
    </div>
  );
};

export default FavoriteButton;
