import { TiArrowSortedDown } from "react-icons/ti";
import RestaurantItemList from "./RestaurantItemList";

export default function RestaurantCategory({ data, showItems, setShowIndex }) {
  const itemCount = data?.itemCards?.length || 0;

  return (
    <article className={showItems ? "menu-category is-open" : "menu-category"}>
      <button className="category-trigger" onClick={setShowIndex} type="button">
        <span>
          {data.title} ({itemCount})
        </span>
        <TiArrowSortedDown aria-hidden="true" />
      </button>

      {showItems && <RestaurantItemList items={data.itemCards} />}
    </article>
  );
}
