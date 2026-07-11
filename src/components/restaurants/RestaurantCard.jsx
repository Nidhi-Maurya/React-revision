import { CDN_URL } from "../../config/swiggy";
import { ClockIcon, MapPinIcon, StarIcon } from "../ui/icons";

export default function RestaurantCard({ resData, compact = false }) {
  const {
    name = "Restaurant",
    avgRating,
    cuisines = [],
    costForTwo,
    cloudinaryImageId,
    sla,
    locality,
    areaName,
    aggregatedDiscountInfoV3,
  } = resData?.info || {};

  const imageUrl = cloudinaryImageId ? CDN_URL + cloudinaryImageId : "";
  const offerText = [
    aggregatedDiscountInfoV3?.header,
    aggregatedDiscountInfoV3?.subHeader,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={compact ? "cc-food-card is-compact" : "cc-food-card"}>
      <div className="cc-food-media">
        {imageUrl ? (
          <img src={imageUrl} alt={name} loading="lazy" />
        ) : (
          <div className="cc-food-fallback">{name.slice(0, 1)}</div>
        )}
        {offerText && <span className="cc-offer-ribbon">{offerText}</span>}
      </div>

      <div className="cc-food-body">
        <div className="cc-food-title-row">
          <h3>{name}</h3>
          <span className="cc-rating">
            <StarIcon />
            {avgRating || "New"}
          </span>
        </div>

        <p className="cc-food-meta">
          <ClockIcon />
          {sla?.slaString || `${sla?.deliveryTime || "--"} mins`}
          {costForTwo && <span>{costForTwo}</span>}
        </p>

        <p className="cc-muted cc-one-line">{cuisines.join(", ") || "Fresh meals"}</p>
        <p className="cc-location-line cc-one-line">
          <MapPinIcon />
          {areaName || locality || "Near you"}
        </p>
      </div>
    </article>
  );
}
