import useSWR from "swr";

import fetcher from "@/libs/fetcher";

const useRandomMovie = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/random", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useRandomMovie;
