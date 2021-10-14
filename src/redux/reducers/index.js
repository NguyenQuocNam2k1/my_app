import { combineReducers } from "redux";
import { getAllProductReducer } from "./productReducer";
import {accountUser} from "./account";

const reducer = combineReducers({
    allProduct: getAllProductReducer,
    accounts : accountUser
});

export default reducer;