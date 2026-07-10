import { useEffect, useState } from "react";
import { getRestaurantMenu } from "../services/swiggy/api";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!resId) return undefined;

    const controller = new AbortController();

    const fetchMenu = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await getRestaurantMenu(resId, {
          signal: controller.signal,
        });
        setMenu(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Unable to load this restaurant menu.");
        }
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    fetchMenu();
    return () => controller.abort();
  }, [resId]);

  return { menu, isLoading, error };
};

export default useRestaurantMenu;
