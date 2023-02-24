import { combineReducers, createStore } from "redux";

const cartReducer = (inititalState = [], action) => {
  if (action.type === "ADD_TO_CART") {
    let product = action.payload.product;
    let item = inititalState.find((item) => item.id === product.id);

    if (item) {
      item.quantity = item.quantity + 1;
      return inititalState;
    }

    return [
      ...inititalState,
      {
        id: product.id,
        image: product.image,
        name: product.title,
        quantity: 1,
        price: product.price,
      },
    ];
  }

  if (action.type === "REMOVE_CART_ITEM") {
    let product = action.payload.product;
    console.log(product);
    let newState = inititalState.filter((item) => {
      return item.id !== product.id;
    });
    return newState;
  }

  if (action.type === "EMPTY_CART") {
    return [];
  }

  return inititalState;
};

const rootReducer = combineReducers({ cartReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
