import { productType } from "./types";

const productReducer = (state = {}, action) => {
  switch (action.type) {
    case productType.GET_PRODUCT_CATEGORY_FAILURE:
      return {
        ...state,
        categoryLoading: false,
        category: [],
      };

    case productType.GET_PRODUCT_CATEGORY_LOADING:
      return {
        ...state,
        categoryLoading: true,
        category: [],
      };

    case productType.GET_PRODUCT_CATEGORY_SUCCESS:
      return {
        ...state,
        categoryLoading: false,
        category: ["All Category", ...action.payload],
      };

    case productType.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        productLoading: false,
        products: [],
      };

    case productType.GET_PRODUCTS_LOADING:
      return {
        ...state,
        productLoading: true,
        products: [],
      };

    case productType.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        productLoading: false,
        products: action.payload,
      };

    case productType.SET_PRODUCT_BY_ID:
      return {
        ...state,
        productById: action.payload,
      };

    case productType.ITEM_COUNT:
      return {
        ...state,
        cartcount: action.payload,
      };
    default:
      return state;
  }
};
export default productReducer;
