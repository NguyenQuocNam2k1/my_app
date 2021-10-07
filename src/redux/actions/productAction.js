import { ActionTypes } from "../contants/action-types";
import fakestoreapi from "../../apis/fakeStoreApi";


export const getAllProduct = () => async (dispatch) =>{
    const response = await fakestoreapi.get("/products");
    dispatch({type: ActionTypes.GET_ALL_PRODUCTS, payload: response.data})
}

export const onChangeLayout2 = () => async(dispatch) =>{
    dispatch({type: ActionTypes.ON_CHANGE_LAYOUT2});
}
export const onChangeLayout4 = () => async(dispatch) =>{
    dispatch({type: ActionTypes.ON_CHANGE_LAYOUT4});
}