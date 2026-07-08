import { Link } from "react-router-dom";
import { FiRefreshCcw, FiSearch, FiSliders } from "react-icons/fi";
import HeroBanner from "./HeroBanner";
import RestaurentCard from "./RestaurentCard";
import Shimmar from "./Shimmar";
import { withPromoted } from "./withPromoted";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurentData from "../utils/useRestaurentData";

export default function Body() {
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
  } = useRestaurentData();
  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = withPromoted(RestaurentCard);

  if (!onlineStatus) {
    return (
      <main className="page-shell">
        <div className="state-panel">
          <span className="state-icon">!</span>
          <h1>You are offline</h1>
          <p>Please check your internet connection and try again.</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <HeroBanner
        restaurantCount={restaurants.length}
        visibleCount={filteredRestaurants.length}
      />

      <section className="page-shell section-stack">
        <div className="toolbar-panel">
          <label className="search-field" htmlFor="restaurant-search">
            <FiSearch aria-hidden="true" />
            <input
              id="restaurant-search"
              type="search"
              placeholder="Search restaurants, cuisines, locality"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
          </label>

          <div className="filter-group" aria-label="Restaurant filters">
            <FiSliders aria-hidden="true" />
            <button
              className={minRating === 0 ? "chip is-active" : "chip"}
              onClick={() => setMinRating(0)}
              type="button"
            >
              All
            </button>
            <button
              className={minRating === 4 ? "chip is-active" : "chip"}
              onClick={() => setMinRating(4)}
              type="button"
            >
              4.0+
            </button>
            <button
              className={minRating === 4.3 ? "chip is-active" : "chip"}
              onClick={() => setMinRating(4.3)}
              type="button"
            >
              4.3+
            </button>
          </div>

          <button className="icon-button" onClick={refresh} type="button">
            <FiRefreshCcw aria-hidden="true" />
            <span>Refresh</span>
          </button>
        </div>

        {error && (
          <div className="inline-alert">
            <strong>Live data issue:</strong> {error}
          </div>
        )}

        {isLoading ? (
          <Shimmar />
        ) : filteredRestaurants.length ? (
          <div className="restaurant-grid">
            {filteredRestaurants.map((restaurant, index) => {
              const Card = restaurant?.info?.promoted
                ? RestaurantCardPromoted
                : RestaurentCard;

              return (
                <Link
                  className="restaurant-link"
                  key={restaurant.info.id}
                  style={{ animationDelay: `${Math.min(index, 8) * 55}ms` }}
                  to={`/restaurants/${restaurant.info.id}`}
                >
                  <Card resData={restaurant} />
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="state-panel compact">
            <h2>No restaurants found</h2>
            <p>Try another dish, cuisine, or rating filter.</p>
          </div>
        )}
      </section>
    </main>
  );
}
