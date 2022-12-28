import { combineReducers } from "redux";
import Products from "./products/reducer"
const rootReducer = combineReducers({
	Products,
});

export default rootReducer;
