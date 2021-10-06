import { ActionTypes } from "../contants/action-types";
import fakestoreapi from "../../apis/fakeStoreApi";


export const getAllProduct = () => async (dispatch) =>{
    const response = await fakestoreapi.get("/products");
    dispatch({type: ActionTypes.GET_ALL_PRODUCTS, payload: response.data})
}