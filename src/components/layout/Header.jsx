import { Link, NavLink } from "react-router-dom";
import {
  HeartIcon,
  HelpIcon,
  HomeIcon,
  MapPinIcon,
  ShoppingBagIcon,
  ZapIcon,
} from "../ui/icons";
import { useSelector } from "react-redux";
import useOnlineStatus from "../../hooks/useOnlineStatus";
import { BRAND_LOGO } from "../../config/swiggy";

export default function Header() {
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
          <MapPinIcon />
          <span>
            <strong>Gurugram</strong>
            <small>{onlineStatus ? "Live menus nearby" : "Offline"}</small>
          </span>
        </button>

        <nav className="cc-nav" aria-label="Primary navigation">
          <NavLink className={navClass} to="/">
            <HomeIcon />
            Home
          </NavLink>
          <NavLink className={navClass} to="/about">
            <HeartIcon />
            Story
          </NavLink>
          <NavLink className={navClass} to="/grocery">
            <ZapIcon />
            Quick
          </NavLink>
          <NavLink className={navClass} to="/contact">
            <HelpIcon />
            Help
          </NavLink>
          <NavLink className={({ isActive }) =>
            isActive ? "cc-nav-link cc-cart-nav is-active" : "cc-nav-link cc-cart-nav"
          } to="/cart">
            <ShoppingBagIcon />
            Cart - ({cartItems.length} items)
          </NavLink>
        </nav>

      </div>
    </header>
  );
}
