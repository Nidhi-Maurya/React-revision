import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiHeart,
  FiHelpCircle,
  FiHome,
  FiMapPin,
  FiShoppingBag,
  FiUser,
  FiZap,
} from "react-icons/fi";
import { useSelector } from "react-redux";
import ActionButton from "../ui/ActionButton";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import { BRAND_LOGO } from "../../config/swiggy";

export default function Header() {
  const [buttonUpdate, setButtonUpdate] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  const navClass = ({ isActive }) =>
    isActive ? "cc-nav-link is-active" : "cc-nav-link";

  return (
    <header className="cc-header">
      <div className="cc-shell cc-header-inner">
        <Link className="cc-brand" to="/" aria-label="CraveCraft home">
          <img src={BRAND_LOGO} alt="CraveCraft" />
        </Link>

        <button className="cc-location" type="button">
          <FiMapPin aria-hidden="true" />
          <span>
            <strong>Gurugram</strong>
            <small>{onlineStatus ? "Live menus nearby" : "Offline"}</small>
          </span>
        </button>

        <nav className="cc-nav" aria-label="Primary navigation">
          <NavLink className={navClass} to="/">
            <FiHome aria-hidden="true" />
            Home
          </NavLink>
          <NavLink className={navClass} to="/about">
            <FiHeart aria-hidden="true" />
            Story
          </NavLink>
          <NavLink className={navClass} to="/grocery">
            <FiZap aria-hidden="true" />
            Quick
          </NavLink>
          <NavLink className={navClass} to="/contact">
            <FiHelpCircle aria-hidden="true" />
            Help
          </NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? "cc-nav-link cc-cart-nav is-active" : "cc-nav-link cc-cart-nav"
          } to="/cart">
            <FiShoppingBag aria-hidden="true" />
            Cart - ({cartItems.length} items)
          </NavLink>
        </nav>

        <div className="cc-header-actions">
          <ActionButton
            icon={FiUser}
            onClick={() =>
              setButtonUpdate((value) => (value === "Login" ? "LogOut" : "Login"))
            }
            variant="dark"
          >
            {buttonUpdate}
          </ActionButton>
        </div>
      </div>
    </header>
  );
}
