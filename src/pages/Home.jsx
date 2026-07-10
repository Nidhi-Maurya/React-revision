import { useMemo, useState } from "react";
import {
  FiClock,
  FiCoffee,
  FiFilter,
  FiRefreshCcw,
  FiSearch,
  FiSliders,
  FiStar,
  FiSun,
  FiZap,
} from "react-icons/fi";
import HeroBanner from "../components/home/HeroBanner";
import RestaurantCollection from "../components/restaurants/RestaurantCollection";
import Shimmer from "../components/ui/Shimmer";
import ActionButton from "../components/ui/ActionButton";
import EmptyState from "../components/ui/EmptyState";
import SectionHeader from "../components/ui/SectionHeader";
import useOnlineStatus from "../hooks/useOnlineStatus";
import useRestaurantData from "../hooks/useRestaurantData";

const cravingMoods = [
  {
    name: "Fire Bowl",
    query: "Biryani",
    text: "Rice, spice, and a proper meal.",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d51a?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Slice Club",
    query: "Pizza",
    text: "For sharing, or absolutely not.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Crunch Rush",
    query: "Burger",
    text: "Fast, filling, no ceremony.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Sweet Pause",
    query: "Cake",
    text: "When dessert is the plan.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop",
  },
];

const quickFilters = [
  { label: "Fastest", value: "delivery", icon: FiClock },
  { label: "Top Rated", value: "rating", icon: FiStar },
  { label: "4.0+", value: "rating-4", icon: FiSun },
  { label: "Pure Veg", value: "veg", icon: FiCoffee },
  { label: "Offers", value: "offers", icon: FiZap },
];

export default function Body() {
  const [sortBy, setSortBy] = useState("relevance");
  const [onlyOffers, setOnlyOffers] = useState(false);
  const [pureVeg, setPureVeg] = useState(false);
  const {
    restaurants,
    filteredRestaurants,
    searchText,
    setSearchText,
    minRating,
    setMinRating,
    isLoading,
    error,
    refresh,
  } = useRestaurantData();
  const onlineStatus = useOnlineStatus();

  const visibleRestaurants = useMemo(() => {
    const nextList = filteredRestaurants
      .filter((restaurant) => {
        const info = restaurant?.info || {};
        const hasOffer = Boolean(
          info.aggregatedDiscountInfoV3?.header ||
            info.aggregatedDiscountInfoV3?.subHeader,
        );
        const isVeg = info.veg === true;
        return (!onlyOffers || hasOffer) && (!pureVeg || isVeg);
      })
      .slice();

    if (sortBy === "rating") {
      nextList.sort(
        (a, b) => Number(b?.info?.avgRating || 0) - Number(a?.info?.avgRating || 0),
      );
    }

    if (sortBy === "delivery") {
      nextList.sort(
        (a, b) =>
          Number(a?.info?.sla?.deliveryTime || 999) -
          Number(b?.info?.sla?.deliveryTime || 999),
      );
    }

    return nextList;
  }, [filteredRestaurants, onlyOffers, pureVeg, sortBy]);

  const spotlightRestaurants = useMemo(
    () =>
      restaurants
        .slice()
        .sort(
          (a, b) =>
            Number(b?.info?.avgRating || 0) - Number(a?.info?.avgRating || 0),
        )
        .slice(0, 8),
    [restaurants],
  );

  const handleFilter = (value) => {
    if (value === "delivery") {
      setSortBy((current) => (current === "delivery" ? "relevance" : "delivery"));
      return;
    }

    if (value === "rating") {
      setSortBy((current) => (current === "rating" ? "relevance" : "rating"));
      return;
    }

    if (value === "rating-4") {
      setMinRating(minRating === 4 ? 0 : 4);
      return;
    }

    if (value === "veg") {
      setPureVeg((current) => !current);
      return;
    }

    if (value === "offers") {
      setOnlyOffers((current) => !current);
    }
  };

  const isFilterActive = (value) =>
    (value === "delivery" && sortBy === "delivery") ||
    (value === "rating" && sortBy === "rating") ||
    (value === "rating-4" && minRating === 4) ||
    (value === "veg" && pureVeg) ||
    (value === "offers" && onlyOffers);

  if (!onlineStatus) {
    return (
      <main className="cc-shell">
        <EmptyState
          title="You are offline"
          text="Please check your internet connection and try again."
        />
      </main>
    );
  }

  return (
    <main className="cc-home">
      <HeroBanner
        restaurantCount={restaurants.length}
        visibleCount={visibleRestaurants.length}
      />

      <section className="cc-shell cc-section">
        <SectionHeader
          eyebrow="Start here"
          title="What are you in the mood for?"
          text="Pick one to pre-fill search with a useful craving."
        />

        <div className="cc-mood-shelf">
          {cravingMoods.map((mood) => (
            <button
              className="cc-mood-card"
              key={mood.name}
              onClick={() => setSearchText(mood.query)}
              type="button"
            >
              <img src={mood.image} alt={mood.name} loading="lazy" />
              <span>{mood.name}</span>
              <p>{mood.text}</p>
            </button>
          ))}
        </div>
      </section>

      {isLoading ? (
        <section className="cc-shell cc-section">
          <Shimmer />
        </section>
      ) : (
        <>
          <section className="cc-shell cc-section">
            <SectionHeader
              eyebrow="Chef's radar"
              title="Restaurants people usually compare first."
              text="A short list based on rating from the live restaurant feed."
            />
            <RestaurantCollection
              compact
              mode="rail"
              restaurants={spotlightRestaurants}
            />
          </section>

          <section className="cc-shell cc-section">
            <SectionHeader
              action={
                <ActionButton icon={FiRefreshCcw} onClick={refresh}>
                  Refresh
                </ActionButton>
              }
              eyebrow="Restaurants"
              title="All delivery options nearby"
              text={`${visibleRestaurants.length} restaurants match your current filters.`}
            />

            <div className="cc-search-panel">
              <label className="cc-search-field" htmlFor="restaurant-search">
                <FiSearch aria-hidden="true" />
                <input
                  id="restaurant-search"
                  type="search"
                  placeholder="Search restaurants, cuisines, locality"
                  value={searchText}
                  onChange={(event) => setSearchText(event.target.value)}
                />
              </label>

              <div className="cc-filter-row">
                <ActionButton icon={FiFilter}>Filters</ActionButton>
                {quickFilters.map((filter) => (
                  <ActionButton
                    icon={filter.icon}
                    isActive={isFilterActive(filter.value)}
                    key={filter.value}
                    onClick={() => handleFilter(filter.value)}
                  >
                    {filter.label}
                  </ActionButton>
                ))}
                <ActionButton
                  icon={FiSliders}
                  isActive={
                    sortBy !== "relevance" || minRating > 0 || onlyOffers || pureVeg
                  }
                  onClick={() => {
                    setSortBy("relevance");
                    setMinRating(0);
                    setOnlyOffers(false);
                    setPureVeg(false);
                  }}
                >
                  Reset
                </ActionButton>
              </div>
            </div>

            {error && (
              <div className="cc-alert">
                <strong>Live data issue:</strong> {error}
              </div>
            )}

            {visibleRestaurants.length ? (
              <RestaurantCollection restaurants={visibleRestaurants} />
            ) : (
              <EmptyState
                compact
                title="No restaurants found"
                text="Try another craving, cuisine, or filter."
              />
            )}
          </section>
        </>
      )}
    </main>
  );
}
