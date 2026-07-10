import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { withPromoted } from "./withPromoted";

const RestaurantCardPromoted = withPromoted(RestaurantCard);

export default function RestaurantCollection({
  restaurants = [],
  mode = "grid",
  compact = false,
}) {
  return (
    <div className={mode === "rail" ? "cc-restaurant-rail" : "cc-restaurant-grid"}>
      {restaurants.map((restaurant, index) => {
        const Card = restaurant?.info?.promoted
          ? RestaurantCardPromoted
          : RestaurantCard;

        return (
          <Link
            className="cc-card-link"
            key={restaurant.info.id}
            style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
            to={`/restaurants/${restaurant.info.id}`}
          >
            <Card compact={compact} resData={restaurant} />
          </Link>
        );
      })}
    </div>
  );
}
