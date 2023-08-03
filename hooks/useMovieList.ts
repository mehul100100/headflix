import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useMovieList = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/movies", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useMovieList;
