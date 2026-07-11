import RestaurantItemList from "./RestaurantItemList";
import { ChevronDownIcon } from "../ui/icons";

export default function RestaurantCategory({ data, showItems, setShowIndex }) {
  const itemCount = data?.itemCards?.length || 0;

  return (
    <article className={showItems ? "menu-category is-open" : "menu-category"}>
      <button className="category-trigger" onClick={setShowIndex} type="button">
        <span>
          {data.title} ({itemCount})
        </span>
        <ChevronDownIcon />
      </button>

      {showItems && <RestaurantItemList items={data.itemCards} />}
    </article>
  );
}
