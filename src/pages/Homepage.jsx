import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import allActions from "../action";

function Homepage() {
  const [products, setProducts] = useState([]);
  const cartProducts = useSelector((store) => store.cartReducer);
  const dispatch = useDispatch();

  console.log(cartProducts);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  const handleAddToCart = (product) => {
    dispatch(allActions.cartAction.addToCart(product));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <section className="ftco-section ftco-no-pb ftco-no-pt bg-info shadow mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5 wrap-about pb-md-5 ">
              <div className="heading-section-bold mb-4 mt-md-5">
                <div className="ml-md-0 text-center">
                  <h2 className="mb-0 text-white font-weight-bold">
                    Project Information
                  </h2>
                </div>
              </div>
              <div className="pb-md-5">
                <p className="text-center text-white">
                  This project is built on react js and redux. We did not added
                  localstorage or sessionStorage feature in this project. Hence
                  the cart state is not persistent on page refresh. If you want
                  to achieve state persistence, then include the sessionStorage
                  or localStorage in your project. <br /> Also the project is
                  not mobile responsive so far.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section py-3 bg-light">
        <div className="container">
          <div className="row justify-content-center mb-3 pb-3">
            <div className="col-md-12 heading-section text-center">
              <h4 className="mb-0 font-weight-bold">Our Products</h4>
              <p className="mb-1">
                This is the list of our some products. Give it a try.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {products.length > 0 &&
              products.map((product, index) => {
                return (
                  <div
                    className="col-sm-6 col-xs-12 col-md-6 col-lg-3"
                    key={index + 1}
                  >
                    <div className="product">
                      <div className="product_image_col">
                        <Link to="/" className="img-prod">
                          <img
                            className="img-fluid product-image"
                            src={product.image}
                            alt="Colorlib Template"
                          />
                          <div className="overlay"></div>
                        </Link>
                      </div>
                      <div className="text py-3 px-3">
                        <h3>
                          <Link to="/">Floral Jackquard Pullover</Link>
                        </h3>
                        <div className="d-flex">
                          <div className="pricing">
                            <p className="price">
                              <span className="mr-2 price-dc">$120.00</span>
                              <span className="price-sale">$80.00</span>
                            </p>
                          </div>
                          <div className="rating">
                            <p className="text-right">
                              <Link to="/">
                                <span className="ion-ios-star-outline"></span>
                              </Link>
                              <Link to="/">
                                <span className="ion-ios-star-outline"></span>
                              </Link>
                              <Link to="/">
                                <span className="ion-ios-star-outline"></span>
                              </Link>
                              <Link to="/">
                                <span className="ion-ios-star-outline"></span>
                              </Link>
                              <Link to="/">
                                <span className="ion-ios-star-outline"></span>
                              </Link>
                            </p>
                          </div>
                        </div>
                        <p className="bottom-area d-flex px-3">
                          <button
                            type="button"
                            className="add-to-cart text-center py-2 mr-1 flex-fill"
                            onClick={() => handleAddToCart(product)}
                          >
                            <span>
                              Add to cart <i className="ion-ios-add ml-1"></i>
                            </span>
                          </button>
                          <Link
                            to={`/product/show?id=${product.id}`}
                            className="buy-now text-center py-2 flex-fill"
                          >
                            Buy now
                            <span>
                              <i className="ion-ios-cart ml-1"></i>
                            </span>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
