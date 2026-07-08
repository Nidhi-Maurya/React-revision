export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const ITEM_IMAGE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

export const SWIGGY_LOGO = "/swiggy-logo.svg";

export const DEFAULT_LOCATION = {
  lat: "28.4420427",
  lng: "77.02065379999999",
  label: "Gurugram",
};

export const CORS_PROXY = "https://corsproxy.io/?";

export const createRestaurantListUrl = (location = DEFAULT_LOCATION) =>
  `${CORS_PROXY}https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=${location.lat}&lng=${location.lng}&carousel=true&third_party_vendor=1`;

export const createMenuUrl = (restaurantId, location = DEFAULT_LOCATION) =>
  `${CORS_PROXY}https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${location.lat}&lng=${location.lng}&restaurantId=${restaurantId}`;

export const RESTAURANT_API = createRestaurantListUrl();
export const MENU_API = createMenuUrl("");
