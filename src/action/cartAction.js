const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      product: product,
    },
  };
};

const removeCartItem = (product) => {
  return {
    type: "REMOVE_CART_ITEM",
    payload: {
      product: product,
    },
  };
};

const emptyCart = () => {
  return {
    type: "EMPTY_CART",
  };
};

const cartAction = { addToCart, removeCartItem, emptyCart };
export default cartAction;
