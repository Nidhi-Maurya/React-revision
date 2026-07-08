import { TiArrowSortedDown } from "react-icons/ti";
import RestaurentItemList from "./RestaurentItemList";

export default function RestaurentCategory({ data, showItems, setShowIndex }) {
  const itemCount = data?.itemCards?.length || 0;

  return (
    <article className={showItems ? "menu-category is-open" : "menu-category"}>
      <button className="category-trigger" onClick={setShowIndex} type="button">
        <span>
          {data.title} ({itemCount})
        </span>
        <TiArrowSortedDown aria-hidden="true" />
      </button>

      {showItems && <RestaurentItemList items={data.itemCards} />}
    </article>
  );
}
