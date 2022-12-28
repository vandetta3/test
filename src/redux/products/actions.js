import { store } from "../index";
import { productType } from "./types";

export const setProductById = (item) => {
  store.dispatch({ type: productType.SET_PRODUCT_BY_ID, payload: item });
};

export const addToCart = (items) => {
  store.dispatch({ type: productType.ITEM_COUNT, payload: items });
};
