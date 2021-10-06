import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: [],
}

export const getAllProductReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.GET_ALL_PRODUCTS:
            return{...state , products: payload}
        default:
            return state;
    }
}