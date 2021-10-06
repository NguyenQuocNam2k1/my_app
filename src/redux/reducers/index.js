import { combineReducers } from "redux";
import { getAllProductReducer } from "./productReducer";

const reducer = combineReducers({
    allProduct: getAllProductReducer,
});

export default reducer;