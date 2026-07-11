import {
  ClockIcon,
  HeartIcon,
  MapPinIcon,
  ShieldIcon,
  ShoppingBagIcon,
  SunIcon,
  TruckIcon,
  ZapIcon,
} from "../components/ui/icons";
import SectionHeader from "../components/ui/SectionHeader";

const values = [
  {
    title: "Mood-first discovery",
    text: "The homepage starts from craving moments, not a plain list of shops.",
    icon: HeartIcon,
  },
  {
    title: "Resilient live data",
    text: "Restaurant and menu data is normalized by shape so API index changes do not break the UI.",
    icon: ShieldIcon,
  },
  {
    title: "Fast ordering loops",
    text: "Search, filters, menus, and cart are designed for repeated use with clear feedback.",
    icon: ZapIcon,
  },
];

const journey = [
  { title: "Pick mood", text: "Start with what you feel like eating.", icon: SunIcon },
  { title: "Compare", text: "Use rating, offers, delivery, and veg filters.", icon: ClockIcon },
  { title: "Open menu", text: "Browse live menu sections safely.", icon: ShoppingBagIcon },
  { title: "Checkout", text: "Add dishes and manage the cart.", icon: TruckIcon },
];

export default function About() {
  return (
    <main className="cc-about">
      <section className="cc-shell cc-about-hero">
        <div>
          <p className="cc-eyebrow">Our story</p>
          <h1>A food app that feels calmer to use.</h1>
          <p>
            CraveCraft keeps the useful parts of a delivery app: quick search,
            clear cards, live menus, and a cart that is easy to manage.
          </p>
        </div>
        <div className="cc-about-card">
          <MapPinIcon />
          <strong>Live restaurants in Gurugram</strong>
          <span>Built from real API data with defensive parsing.</span>
        </div>
      </section>

      <section className="cc-shell cc-section">
        <SectionHeader
          eyebrow="Product principles"
          title="Simple screens, reusable parts."
          text="Buttons, section headers, empty states, and restaurant collections are shared across the app."
        />

        <div className="cc-value-grid">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <article className="cc-value-card" key={item.title}>
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

      <section className="cc-shell cc-section">
        <SectionHeader
          eyebrow="Ordering flow"
          title="A complete path from craving to cart."
        />

        <div className="cc-journey-grid">
          {journey.map((step, index) => {
            const Icon = step.icon;
            return (
              <article className="cc-journey-card" key={step.title}>
                <small>{String(index + 1).padStart(2, "0")}</small>
                <Icon aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
