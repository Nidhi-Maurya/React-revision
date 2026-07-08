import { FiMapPin, FiStar, FiTruck } from "react-icons/fi";
import { DEFAULT_LOCATION } from "../utils/constant";

export default function HeroBanner({ restaurantCount = 0, visibleCount = 0 }) {
  return (
    <section className="hero-banner">
      <div className="hero-content">
        <p className="eyebrow">
          <FiMapPin aria-hidden="true" /> Live near {DEFAULT_LOCATION.label}
        </p>
        <h1>Food delivery that feels fast, fresh, and easy.</h1>
        <p className="hero-copy">
          Browse real Swiggy restaurant data with resilient parsing, smooth
          filters, and a responsive menu experience.
        </p>
        <div className="hero-stats" aria-label="Restaurant summary">
          <span>
            <FiTruck aria-hidden="true" />
            {restaurantCount || "--"} restaurants
          </span>
          <span>
            <FiStar aria-hidden="true" />
            {visibleCount || "--"} matching now
          </span>
        </div>
      </div>
    </section>
  );
}
