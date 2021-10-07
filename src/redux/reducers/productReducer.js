import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: [],
    layout: 4
}

export const getAllProductReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.GET_ALL_PRODUCTS:
            return{...state , products: payload}
        case ActionTypes.ON_CHANGE_LAYOUT2:
            return{...state , layout: 2}
        case ActionTypes.ON_CHANGE_LAYOUT4:
            return{...state , layout: 4}
        default:
            return state;
    }
}