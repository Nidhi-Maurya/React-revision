import { FiClock, FiMapPin, FiPackage, FiSun, FiTruck } from "react-icons/fi";
import ActionButton from "../ui/ActionButton";
import { DEFAULT_LOCATION } from "../../config/swiggy";

export default function HeroBanner({ restaurantCount = 0, visibleCount = 0 }) {
  return (
    <section className="cc-hero">
      <div className="cc-shell cc-hero-grid">
        <div className="cc-hero-copy">
          <p className="cc-eyebrow">
            <FiMapPin aria-hidden="true" /> {DEFAULT_LOCATION.label}
          </p>
          <h1>Good food, sorted by what you feel like eating.</h1>
          <p>
            Browse live restaurants, filter quickly, and add dishes from menus
            that stay stable even when the API layout changes.
          </p>
          <div className="cc-hero-actions">
            <ActionButton icon={FiSun} variant="accent">
              Browse restaurants
            </ActionButton>
            <ActionButton icon={FiClock}>Under 30 mins</ActionButton>
          </div>
        </div>

        <div className="cc-hero-visual" aria-label="Live ordering summary">
          <div className="cc-plate-wrap">
            <img
              alt="fresh salad bowl"
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=900&auto=format&fit=crop"
            />
            <span className="cc-discount-badge">20% off</span>
          </div>

          <div className="cc-floating-card cc-floating-delivery">
            <FiTruck aria-hidden="true" />
            <div>
              <strong>Fast delivery</strong>
              <span>{visibleCount || "--"} filtered options</span>
            </div>
          </div>

          <div className="cc-floating-card cc-floating-pickup">
            <FiPackage aria-hidden="true" />
            <div>
              <strong>Live menus</strong>
              <span>{restaurantCount || "--"} restaurants online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
