import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: [],
    layout: 4,
    product:{},
    orders:[],
    statusAddOrder: 0,
}

export const getAllProductReducer = (state = initialState, {type, payload}) =>{
    // localStorage.setItem('ordersClient', JSON.stringify(state.orders));
    switch(type){
        case ActionTypes.GET_ALL_PRODUCTS:
            return{...state , products: payload}
        case ActionTypes.ON_CHANGE_LAYOUT2:
            return{...state , layout: 2}
        case ActionTypes.ON_CHANGE_LAYOUT4:
            return{...state , layout: 4}
        case ActionTypes.GET_PRODUCT:
            return {...state , product:payload}
        case ActionTypes.ADD_ORDER:
            state.orders = JSON.parse(localStorage.getItem('ordersClient'));
            state.orders.push(payload);
            localStorage.setItem('ordersClient', JSON.stringify(state.orders));
            if(payload){
                state.statusAddOrder = true;
            }else {
                state.statusAddOrder = false;
            }
            return {...state};
        case ActionTypes.RESTART_STATUS_ORDER:
            return {...state , statusAddOrder:0}
        case ActionTypes.DELETE_PRODUCT_ORDERED:
            state.orders = JSON.parse(localStorage.getItem('ordersClient'));
            state.orders.splice(payload,1);
            localStorage.setItem('ordersClient', JSON.stringify(state.orders));
            return {...state}
        case ActionTypes.EDIT_QUANTITY:
            state.orders = JSON.parse(localStorage.getItem('ordersClient'));
            state.orders[payload.id].orderQuantity = payload.quantity;
            localStorage.setItem('ordersClient', JSON.stringify(state.orders));
            return {...state}
        default:
            return state;
    }
}
