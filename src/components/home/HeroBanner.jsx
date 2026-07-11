import ActionButton from "../ui/ActionButton";
import { ClockIcon, MapPinIcon, SunIcon } from "../ui/icons";
import { DEFAULT_LOCATION } from "../../config/swiggy";

export default function HeroBanner({ restaurantCount = 0, visibleCount = 0 }) {
  return (
    <section className="cc-hero">
      <div className="cc-shell cc-hero-grid">
        <div className="cc-hero-copy">
          <p className="cc-eyebrow">
            <MapPinIcon /> {DEFAULT_LOCATION.label}
          </p>
          <h1>Order from restaurants around you.</h1>
          <p>
            Search restaurants, compare delivery time, and add dishes from live
            menus without losing your place.
          </p>
          <div className="cc-hero-actions">
            <ActionButton icon={SunIcon} variant="accent">
              Browse restaurants
            </ActionButton>
            <ActionButton icon={ClockIcon}>Under 30 mins</ActionButton>
          </div>
        </div>

        <div className="cc-hero-photo-card" aria-label="Live ordering summary">
          <img
            alt="fresh meal bowl"
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=900&auto=format&fit=crop"
          />
          <div className="cc-hero-stats">
            <span>
              <strong>{restaurantCount || "--"}</strong>
              restaurants
            </span>
            <span>
              <strong>{visibleCount || "--"}</strong>
              matching
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
