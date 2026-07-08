import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingBag, FiUser } from "react-icons/fi";
import { useSelector } from "react-redux";
import { SWIGGY_LOGO } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

export default function Header() {
  const [buttonUpdate, setButtonUpdate] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  const navClass = ({ isActive }) => (isActive ? "nav-link active" : "nav-link");

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Swiggy home">
          <img src={SWIGGY_LOGO} alt="Swiggy" />
        </Link>

        <nav className="nav-links" aria-label="Primary navigation">
          <NavLink className={navClass} to="/">
            Home
          </NavLink>
          <NavLink className={navClass} to="/about">
            About
          </NavLink>
          <NavLink className={navClass} to="/contact">
            Contact
          </NavLink>
          <NavLink className={navClass} to="/grocery">
            Grocery
          </NavLink>
          <NavLink className={navClass} to="/cart">
            <FiShoppingBag aria-hidden="true" />
            Cart - ({cartItems.length} items)
          </NavLink>
        </nav>

        <div className="header-actions">
          <span className={onlineStatus ? "status-dot online" : "status-dot"}>
            {onlineStatus ? "Online" : "Offline"}
          </span>
          <button
            className="login-button"
            onClick={() =>
              setButtonUpdate((value) => (value === "Login" ? "LogOut" : "Login"))
            }
            type="button"
          >
            <FiUser aria-hidden="true" />
            {buttonUpdate}
          </button>
          {data?.loggedInUser && (
            <span className="user-pill">{data.loggedInUser}</span>
          )}
        </div>
      </div>
    </header>
  );
}
