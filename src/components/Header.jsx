import React from "react";
import { BiBuilding } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cartProducts = useSelector((state) => state.cartReducer);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light sticky-top bg-white"
      id="ftco-navbar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <BiBuilding /> Shoppers
        </Link>

        <div className="navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item cta cta-colored">
              <Link to="/cart" className="nav-link">
                <span className="icon-shopping_cart badge badge-danger">
                  {cartProducts.length}
                </span>{" "}
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
