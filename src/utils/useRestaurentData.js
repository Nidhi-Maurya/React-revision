import { useCallback, useEffect, useMemo, useState } from "react";
import { getRestaurants } from "./api/swiggy";

const useRestaurentData = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchRestaurants = useCallback(async (signal) => {
    try {
      setIsLoading(true);
      setError("");
      const data = await getRestaurants({ signal });
      setRestaurants(data.restaurants);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message || "Unable to load restaurants right now.");
      }
    } finally {
      if (!signal?.aborted) setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchRestaurants(controller.signal);
    return () => controller.abort();
  }, [fetchRestaurants]);

  const filteredRestaurants = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    return restaurants.filter((restaurant) => {
      const info = restaurant?.info || {};
      const searchable = [info.name, ...(info.cuisines || []), info.locality]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const matchesSearch = query ? searchable.includes(query) : true;
      const matchesRating = Number(info.avgRating || 0) >= minRating;
      return matchesSearch && matchesRating;
    });
  }, [restaurants, searchText, minRating]);

  return {
    restaurants,
    filteredRestaurants,
    searchText,
    setSearchText,
    minRating,
    setMinRating,
    isLoading,
    error,
    refresh: () => fetchRestaurants(),
  };
};

export default useRestaurentData;
