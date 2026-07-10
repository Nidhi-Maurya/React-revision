import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice";
import RestaurantItemList from "../components/menu/RestaurantItemList";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <main className="page-shell cart-page">
      <div className="menu-title-row">
        <div>
          <p className="eyebrow">Checkout</p>
          <h1>Cart Details</h1>
        </div>
        <button
          className="danger-button"
          disabled={!cartItems.length}
          onClick={() => dispatch(clearCart())}
          type="button"
        >
          <FiTrash2 aria-hidden="true" />
          Clear Cart
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="state-panel compact">
          <h2>Your cart is empty.</h2>
          <p>Add a few dishes from a restaurant menu to see them here.</p>
        </div>
      ) : (
        <div className="cart-list">
          <RestaurantItemList items={cartItems} />
        </div>
      )}
    </main>
  );
}
