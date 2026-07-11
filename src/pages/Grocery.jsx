import { ClockIcon, ShoppingBagIcon, TruckIcon } from "../components/ui/icons";

export default function Grocery() {
  return (
    <main className="page-shell cart-page">
      <div className="menu-title-row">
        <div>
          <p className="eyebrow">Coming soon</p>
          <h1>Grocery delivery</h1>
        </div>
      </div>

      <div className="restaurant-grid">
        {[
          {
            title: "Fresh staples",
            text: "Daily essentials, pantry items, and snacks.",
            icon: ShoppingBagIcon,
          },
          {
            title: "Fast slots",
            text: "A cleaner page is ready for live inventory wiring.",
            icon: ClockIcon,
          },
          {
            title: "Doorstep ready",
            text: "Built to sit beside the restaurant experience.",
            icon: TruckIcon,
          },
        ].map((card) => {
          const Icon = card.icon;
          return (
          <article className="restaurant-card" key={card.title}>
            <div className="card-content">
              <span className="rating-badge">
                <Icon aria-hidden="true" />
              </span>
              <h3>{card.title}</h3>
              <p className="muted">{card.text}</p>
            </div>
          </article>
        )})}
      </div>
    </main>
  );
}
