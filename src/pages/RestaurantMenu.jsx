import { useState } from "react";
import { useParams } from "react-router-dom";
import { ClockIcon, HeartIcon, RefreshIcon, StarIcon } from "../components/ui/icons";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import Shimmer from "../components/ui/Shimmer";
import RestaurantCategory from "../components/menu/RestaurantCategory";

export default function RestroMenu() {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  const { menu, isLoading, error } = useRestaurantMenu(resId);
  const restaurant = menu?.restaurant || {};
  const categories = menu?.categories || [];

  if (isLoading) {
    return (
      <main className="page-shell section-stack">
        <Shimmer />
      </main>
    );
  }

  if (error) {
    return (
      <main className="page-shell">
        <div className="state-panel">
          <RefreshIcon />
          <h1>Menu could not load</h1>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="menu-page">
      <section className="menu-hero">
        <div>
          <p className="eyebrow">Live menu</p>
          <h1>{restaurant.name || "Restaurant menu"}</h1>
          <p className="hero-copy">
            {(restaurant.cuisines || []).join(", ") || "Freshly prepared food"}
          </p>
        </div>
        <div className="menu-summary">
          <span>
            <StarIcon />
            {restaurant.avgRatingString || restaurant.avgRating || "New"} (
            {restaurant.totalRatingsString || "ratings"})
          </span>
          <span>
            <ClockIcon />
            {restaurant.sla?.slaString ||
              `${restaurant.sla?.deliveryTime || "--"} mins`}
          </span>
          <span>
            <HeartIcon />
            {restaurant.costForTwoMessage || "Great value"}
          </span>
        </div>
      </section>

      <section className="page-shell menu-content">
        {restaurant.aggregatedDiscountInfo?.shortDescriptionList?.[0]?.meta && (
          <div className="inline-alert offer">
            {restaurant.aggregatedDiscountInfo.shortDescriptionList[0].meta}
          </div>
        )}

        <div className="menu-title-row">
          <div>
            <p className="eyebrow">Menu</p>
            <h2>{menu?.itemCount || 0} dishes across {categories.length} sections</h2>
          </div>
          <span className={restaurant.availability?.opened ? "open-pill" : "open-pill closed"}>
            {restaurant.availability?.opened === false ? "Closed" : "Open now"}
          </span>
        </div>

        {categories.length ? (
          <div className="accordion-list">
            {categories.map((category, index) => (
              <RestaurantCategory
                data={category}
                key={`${category.title}-${index}`}
                showItems={index === showIndex}
                setShowIndex={() =>
                  setShowIndex((current) => (current === index ? -1 : index))
                }
              />
            ))}
          </div>
        ) : (
          <div className="state-panel compact">
            <h2>No menu sections found</h2>
            <p>Swiggy changed the response shape or this menu is unavailable.</p>
          </div>
        )}
      </section>
    </main>
  );
}
