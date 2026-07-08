import {
  FiBriefcase,
  FiClock,
  FiMapPin,
  FiShield,
  FiShoppingBag,
  FiStar,
  FiTruck,
  FiUsers,
} from "react-icons/fi";
import { SWIGGY_LOGO } from "../utils/constant";

const impactStats = [
  { value: "500+", label: "Cities served" },
  { value: "2L+", label: "Restaurant partners" },
  { value: "Fast", label: "Live menu discovery" },
];

const principles = [
  {
    title: "Customer first",
    text: "Every screen is built around quick decisions, readable menus, and fewer taps.",
    icon: FiUsers,
  },
  {
    title: "Reliable data",
    text: "Swiggy responses are normalized by shape, not hard coded indexes.",
    icon: FiShield,
  },
  {
    title: "Fast delivery feel",
    text: "Light animations and responsive layouts keep the product feeling alive.",
    icon: FiTruck,
  },
];

const journey = [
  { title: "Choose", text: "Search restaurants and cuisines instantly.", icon: FiShoppingBag },
  { title: "Compare", text: "Scan ratings, price, locality, and offers.", icon: FiStar },
  { title: "Order", text: "Add dishes from live menu sections.", icon: FiClock },
  { title: "Track", text: "Keep the interface ready for delivery updates.", icon: FiMapPin },
];

export default function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <img className="about-logo" src={SWIGGY_LOGO} alt="Swiggy" />
          <p className="eyebrow">About the experience</p>
          <h1>Changing the way India discovers food.</h1>
          <p>
            A Swiggy-inspired food ordering interface focused on speed, trust,
            real restaurant data, and a clean responsive journey from discovery
            to cart.
          </p>
        </div>

        <div className="about-delivery-card">
          <span className="delivery-pin">
            <FiTruck aria-hidden="true" />
          </span>
          <h2>Food, groceries, and daily convenience in one smooth flow.</h2>
          <div className="route-line">
            <span />
            <span />
            <span />
          </div>
          <p>Built with resilient API parsing so UI keeps working even when payload order changes.</p>
        </div>
      </section>

      <section className="about-stats">
        {impactStats.map((stat) => (
          <article key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </section>

      <section className="page-shell about-section">
        <div className="section-heading">
          <p className="eyebrow">What matters</p>
          <h2>Designed like a serious delivery product.</h2>
        </div>

        <div className="about-grid">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <article className="about-card" key={item.title}>
                <span>
                  <Icon aria-hidden="true" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-shell about-section">
        <div className="section-heading">
          <p className="eyebrow">Journey</p>
          <h2>From craving to cart, without friction.</h2>
        </div>

        <div className="journey-grid">
          {journey.map((step, index) => {
            const Icon = step.icon;
            return (
              <article className="journey-step" key={step.title}>
                <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                <Icon aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-shell about-cta">
        <FiBriefcase aria-hidden="true" />
        <div>
          <h2>Built as a production-style React food app.</h2>
          <p>
            Real-time Swiggy data, defensive normalizers, responsive UI, cart
            flow, and polished interactions are now part of the project base.
          </p>
        </div>
      </section>
    </main>
  );
}
