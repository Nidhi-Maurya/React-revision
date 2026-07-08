import { createMenuUrl, createRestaurantListUrl } from "../constant";
import {
  normalizeRestaurantList,
  normalizeRestaurantMenu,
} from "../normalizers/swiggy";

const fetchJson = async (url, signal) => {
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Swiggy request failed with ${response.status}`);
  }

  return response.json();
};

export const getRestaurants = async ({ signal } = {}) => {
  const json = await fetchJson(createRestaurantListUrl(), signal);
  return normalizeRestaurantList(json);
};

export const getRestaurantMenu = async (restaurantId, { signal } = {}) => {
  const json = await fetchJson(createMenuUrl(restaurantId), signal);
  return normalizeRestaurantMenu(json);
};
