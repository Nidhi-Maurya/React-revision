import { createElement } from "react";

export const withPromoted = (RestaurantCard) => {
  return function PromotedRestaurantCard(props) {
    return (
      <div className="promoted-card">
        <span className="promoted-label">Promoted</span>
        {createElement(RestaurantCard, props)}
      </div>
    );
  };
};
