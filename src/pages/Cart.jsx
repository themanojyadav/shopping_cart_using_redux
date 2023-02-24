import React from "react";
import { BiFace, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import allActions from "../action";
import Breadcrumb from "../components/Breadcrumb";

function Cart() {
  const cartProducts = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartProducts.map((product) => {
      totalPrice += parseInt(product.price * product.quantity);
      return;
    });
    return totalPrice;
  };

  const handleRemoveCartItem = (product) => {
    console.log(product);
    dispatch(allActions.cartAction.removeCartItem(product));
  };

  const handleEmptyCart = () => {
    dispatch(allActions.cartAction.emptyCart());
  };

  return (
    <div>
      <Breadcrumb title="Cart" />
      {cartProducts.length < 1 && (
        <div className="py-4 container">
          <div className="card card-body shadow text-center">
            <h1>
              <BiFace />
            </h1>
            <h2 className="font-weight-bold mb-0">Oops!!!</h2>
            <h3 className="font-weight-bold mb-0">
              No products are available in your cart
            </h3>
            <h3 className="font-weight-bold mb-4">
              Do some shopping and come back again
            </h3>
            <div className="text-center mb-4">
              <Link to="/" className="btn btn-custom d-inline-block w-25">
                Go to shop
              </Link>
            </div>
          </div>
        </div>
      )}
      {cartProducts.length > 0 && (
        <div className="">
          <section className="cart_section py-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="cart-list">
                    <table className="table">
                      <thead className="thead-primary">
                        <tr className="text-center">
                          <th>&nbsp;</th>
                          <th>Image</th>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartProducts.map((product, index) => {
                          return (
                            <tr className="text-center" key={index + 1}>
                              <td className="product-remove">
                                <button
                                  type="button"
                                  onClick={() => handleRemoveCartItem(product)}
                                >
                                  <BiTrash />
                                </button>
                              </td>

                              <td className="image-prod" width="100">
                                <img
                                  src={product.image}
                                  alt=""
                                  className="w-100 img-thumbnail"
                                />
                              </td>

                              <td className="product-name">
                                <h3>{product.name}</h3>
                              </td>

                              <td className="price">${product.price}</td>

                              <td className="quantity">{product.quantity}</td>

                              <td className="total">
                                ${product.price * product.quantity}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 text-right">
                    <button
                      className="btn btn-dark"
                      onClick={handleEmptyCart}
                      type="button"
                    >
                      Empty Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="row justify-content-center">
            <div className="col col-lg-5 col-md-6 mt-5 cart-wrap">
              <div className="cart-total mb-3">
                <h3>Cart Totals</h3>
                <p className="d-flex">
                  <span>Subtotal</span>
                  <span>${calculateTotalPrice()}</span>
                </p>
                <p className="d-flex">
                  <span>Delivery</span>
                  <span>$0.00</span>
                </p>
                <hr />
                <p className="d-flex total-price">
                  <span>Total</span>
                  <span>${calculateTotalPrice()}</span>
                </p>
              </div>
              <p className="text-center">
                <button
                  type="button"
                  className="btn btn-primary py-3 px-4"
                  onClick={() =>
                    alert(
                      "This functionality does not included in this project."
                    )
                  }
                >
                  Proceed to Checkout
                </button>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
