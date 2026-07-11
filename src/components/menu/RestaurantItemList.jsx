import { useDispatch } from "react-redux";
import { ITEM_IMAGE_URL } from "../../config/swiggy";
import { formatPrice } from "../../services/swiggy/normalizers";
import { addItem } from "../../store/cartSlice";
import { PlusIcon } from "../ui/icons";

export default function RestaurantItemList({ items = [] }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="item-list">
      {items.map((item, index) => {
        const info = item?.card?.info || item?.info || {};
        const imageUrl = info.imageId ? ITEM_IMAGE_URL + info.imageId : "";

        return (
          <article className="menu-item" key={info.id || `${info.name}-${index}`}>
            <div className="item-copy">
              <h3>{info.name || "Menu item"}</h3>
              <p className="price-line">{formatPrice(info)}</p>
              {info.description && <p className="muted">{info.description}</p>}
              {info.offerTags?.[0]?.title && (
                <span className="mini-offer">
                  {info.offerTags[0].title} {info.offerTags[0].subTitle}
                </span>
              )}
            </div>

            <div className="item-media">
              {imageUrl ? (
                <img src={imageUrl} alt={info.name || "Dish"} loading="lazy" />
              ) : (
                <div className="dish-fallback">Dish</div>
              )}
              <button
                className="add-button"
                onClick={() => handleAddItem(item)}
                type="button"
              >
                <PlusIcon />
                Add
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
}
