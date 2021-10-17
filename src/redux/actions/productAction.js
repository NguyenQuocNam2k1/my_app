import { ActionTypes } from "../contants/action-types";
import fakestoreapi from "../../apis/fakeStoreApi";

export const getAllProduct = () => async (dispatch) => {
  const response = await fakestoreapi.get("/products");
  dispatch({ type: ActionTypes.GET_ALL_PRODUCTS, payload: response.data });
};

export const onChangeLayout2 = () => async (dispatch) => {
  dispatch({ type: ActionTypes.ON_CHANGE_LAYOUT2 });
};

export const onChangeLayout4 = () => async (dispatch) => {
  dispatch({ type: ActionTypes.ON_CHANGE_LAYOUT4 });
};

export const getProduct = (id) => async (dispatch) => {
  const response = await fakestoreapi.get(`/products/${id}`);
  dispatch({ type: ActionTypes.GET_PRODUCT, payload: response.data });
};

export const addOrder =  (product) => async(dispatch) =>{
  dispatch({type: ActionTypes.ADD_ORDER , payload:product})
}
export const restartStatusOrder =  () => async(dispatch) =>{
  dispatch({type: ActionTypes.RESTART_STATUS_ORDER})
}

// DELETE_PRODUCT_ORDERED
export const delete_product_ordered = (id) => async(dispatch) =>{
  dispatch({type: ActionTypes.DELETE_PRODUCT_ORDERED , payload: id});
}

//EDIT_QUANTITY
export const edit_quantity = (id , quantity) => async(dispatch) =>{
  dispatch({type:ActionTypes.EDIT_QUANTITY , payload : {id: id , quantity: quantity} })
}