import axios from "axios";
import { store } from "../redux";
import { productType } from "../redux/products/types";

export const getCategory = async () => {
  store.dispatch({ type: productType.GET_PRODUCT_CATEGORY_LOADING });

  let _res = {};
  try {
    _res = await axios({
      method: "get",
      url: `https://fakestoreapi.com/products/categories`,
    });
  } catch (error) {
    console.warn(error);
  } finally {
    if (_res.hasError) {
      store.dispatch({ type: productType.GET_PRODUCT_CATEGORY_FAILURE });
    } else {
      store.dispatch({
        type: productType.GET_PRODUCT_CATEGORY_SUCCESS,
        payload: _res.data,
      });
    }
  }
};

export const getProduct = async (category) => {
  store.dispatch({ type: productType.GET_PRODUCTS_LOADING });

  let _res = {};
  let url = "https://fakestoreapi.com/products";

  if (category !== "All Category") {
    url = url + `/category/${category}`;
  }

  try {
    _res = await axios({
      method: "get",
      url: url,
    });
  } catch (error) {
    console.warn(error);
  } finally {
    if (_res.hasError) {
      store.dispatch({ type: productType.GET_PRODUCTS_FAILURE });
    } else {
      store.dispatch({
        type: productType.GET_PRODUCTS_SUCCESS,
        payload: _res.data,
      });
    }
  }
};
