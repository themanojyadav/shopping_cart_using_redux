const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      product: product,
    },
  };
};

const cartAction = { addToCart };
export default cartAction;
