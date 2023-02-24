import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BiPlus, BiMinus } from "react-icons/bi";
import Loader from "../components/Loader";
import Breadcrumb from "../components/Breadcrumb";
import { useDispatch } from "react-redux";
import allActions from "../action";

function ShowProduct() {
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  // INclude the cart action
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const fetchSingleProduct = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
  };

  const handleQuantityIncrement = () => {
    if (quantity < 100) {
      setQuantity(parseInt(quantity) + 1);
    }
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(parseInt(quantity) - 1);
    }
  };

  const handleAddToCart = (product) => {
    dispatch(allActions.cartAction.addToCart(product));
  };

  const handleQuantityChange = (event) => {
    if (event.target.value && event.target.value < 100) {
      setQuantity(parseInt(event.target.value));
    }
  };

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  return (
    <>
      {!Object.keys(product).length && <Loader />}
      {Object.keys(product).length > 0 && (
        <div>
          <Breadcrumb title={product.title} />
          <section className="py-4">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 mb-5">
                  <a href="images/menu-2.jpg" className="image-popup">
                    <img
                      src={product.image}
                      className="img-fluid"
                      alt="Colorlib Template"
                    />
                  </a>
                </div>
                <div className="col-lg-8 product-details pl-md-5">
                  <h3>{product.title}</h3>
                  <div className="rating d-flex">
                    <p className="text-left mr-4">
                      <a href="/" className="mr-2">
                        5.0
                      </a>
                      <a href="/">
                        <span className="ion-ios-star-outline"></span>
                      </a>
                      <a href="/">
                        <span className="ion-ios-star-outline"></span>
                      </a>
                      <a href="/">
                        <span className="ion-ios-star-outline"></span>
                      </a>
                      <a href="/">
                        <span className="ion-ios-star-outline"></span>
                      </a>
                      <a href="/">
                        <span className="ion-ios-star-outline"></span>
                      </a>
                    </p>
                    <p className="text-left mr-4">
                      <a href="/" className="mr-2" style={{ color: "#000" }}>
                        100 <span style={{ color: "#bbb" }}>Rating</span>
                      </a>
                    </p>

                    <p className="text-left">
                      <a href="/" className="mr-2" style={{ color: "#000" }}>
                        500 <span style={{ color: "#bbb" }}>Sold</span>
                      </a>
                    </p>
                  </div>
                  <p className="price">
                    <span>${product.price}</span>
                  </p>
                  <p>{product.description}</p>
                  <div className="row mt-4">
                    <div className="w-100"></div>
                    <div className="input-group col-md-6 d-flex mb-3">
                      <span className="input-group-btn mr-2">
                        <button
                          type="button"
                          className="quantity-left-minus btn"
                          data-type="minus"
                          data-field=""
                          onClick={handleQuantityDecrement}
                        >
                          <BiMinus />
                        </button>
                      </span>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        className="form-control input-number"
                        min="1"
                        max="100"
                        value={quantity}
                        onChange={handleQuantityChange}
                      />
                      <span className="input-group-btn ml-2">
                        <button
                          type="button"
                          className="quantity-right-plus btn"
                          data-type="plus"
                          data-field=""
                          onClick={handleQuantityIncrement}
                        >
                          <BiPlus />
                        </button>
                      </span>
                    </div>
                    <div className="w-100"></div>
                  </div>
                  <p>
                    <button
                      type="button"
                      className="btn btn-custom py-3 px-5"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

export default ShowProduct;
