const TYPE = {
  itemCategory: "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
  nestedItemCategory:
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
};

const asArray = (value) => (Array.isArray(value) ? value : []);

const walk = (node, visitor) => {
  if (!node || typeof node !== "object") return undefined;

  const result = visitor(node);
  if (result !== undefined) return result;

  if (Array.isArray(node)) {
    for (const item of node) {
      const found = walk(item, visitor);
      if (found !== undefined) return found;
    }
    return undefined;
  }

  for (const value of Object.values(node)) {
    const found = walk(value, visitor);
    if (found !== undefined) return found;
  }

  return undefined;
};

const collect = (node, predicate, results = []) => {
  if (!node || typeof node !== "object") return results;

  if (predicate(node)) results.push(node);

  if (Array.isArray(node)) {
    node.forEach((item) => collect(item, predicate, results));
    return results;
  }

  Object.values(node).forEach((value) => collect(value, predicate, results));
  return results;
};

export const formatPrice = (item = {}) => {
  const rawPrice = item.price ?? item.defaultPrice ?? item.finalPrice;
  if (!rawPrice) return item.priceString || "Price unavailable";
  return `Rs. ${(rawPrice / 100).toFixed(rawPrice % 100 === 0 ? 0 : 2)}`;
};

export const normalizeRestaurantList = (payload) => {
  const restaurants = walk(payload?.data?.cards, (node) => {
    const list = node?.gridElements?.infoWithStyle?.restaurants;
    return Array.isArray(list) && list.length ? list : undefined;
  });

  return {
    restaurants: asArray(restaurants).filter((restaurant) => restaurant?.info?.id),
    raw: payload,
  };
};

export const normalizeRestaurantMenu = (payload) => {
  const cards = payload?.data?.cards;
  const restaurant =
    walk(cards, (node) => {
      const info = node?.card?.card?.info ?? node?.info;
      if (info?.id || info?.name) return info;
      return undefined;
    }) || {};

  const regularCards =
    walk(cards, (node) => node?.groupedCard?.cardGroupMap?.REGULAR?.cards) || [];

  const categoryCards = collect(regularCards, (node) => {
    const card = node?.card?.card;
    return card?.["@type"] === TYPE.itemCategory && Array.isArray(card.itemCards);
  });

  const nestedCategoryCards = collect(regularCards, (node) => {
    const card = node?.card?.card;
    return card?.["@type"] === TYPE.nestedItemCategory && Array.isArray(card.categories);
  });

  const flatCategories = categoryCards.map((node) => node.card.card);
  const nestedCategories = nestedCategoryCards.flatMap((node) =>
    asArray(node.card.card.categories),
  );

  const categories = [...flatCategories, ...nestedCategories]
    .filter((category) => asArray(category?.itemCards).length)
    .map((category) => ({
      title: category.title || "Recommended",
      itemCards: asArray(category.itemCards),
    }));

  return {
    restaurant,
    categories,
    itemCount: categories.reduce(
      (total, category) => total + category.itemCards.length,
      0,
    ),
    raw: payload?.data,
  };
};
