import { FiClock, FiMapPin, FiStar } from "react-icons/fi";
import { CDN_URL } from "../utils/constant";

export default function RestaurentCard({ resData }) {
  const {
    name = "Restaurant",
    avgRating,
    cuisines = [],
    costForTwo,
    cloudinaryImageId,
    sla,
    locality,
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
    <article className="restaurant-card">
      <div className="card-image-wrap">
        {imageUrl ? (
          <img src={imageUrl} alt={name} loading="lazy" />
        ) : (
          <div className="image-fallback">{name.slice(0, 1)}</div>
        )}
        {offerText && <span className="offer-badge">{offerText}</span>}
      </div>

      <div className="card-content">
        <div className="card-title-row">
          <h3>{name}</h3>
          <span className="rating-badge">
            <FiStar aria-hidden="true" /> {avgRating || "New"}
          </span>
        </div>

        <p className="muted clamp-2">{cuisines.join(", ") || "Fresh meals"}</p>

        <div className="meta-row">
          <span>
            <FiClock aria-hidden="true" />
            {sla?.slaString || `${sla?.deliveryTime || "--"} mins`}
          </span>
          <span>{costForTwo || "Best price"}</span>
        </div>

        {locality && (
          <p className="location-line">
            <FiMapPin aria-hidden="true" />
            {locality}
          </p>
        )}
      </div>
    </article>
  );
}
