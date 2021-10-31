import { combineReducers } from "redux";
import { getAllProductReducer } from "./productReducer";
import {accountUser} from "./account";
import {Admin} from "./admin";

const reducer = combineReducers({
    allProduct: getAllProductReducer,
    accounts : accountUser,
    admin: Admin,
});

export default reducer;