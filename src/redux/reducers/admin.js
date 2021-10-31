import { AdminTypes } from "../contants/action-types";

const initialState = {
    analyticProducts:[],
    productCart:""
}

export const Admin = (state = initialState, {type, payload}) =>{
    // localStorage.setItem('totalBill', JSON.stringify(0));
    switch(type){
        case AdminTypes.ANALYTIC_PRODUCTS:
            state.productCart = JSON.parse(localStorage.getItem('ordersClient'));
            state.analyticProducts = JSON.parse(localStorage.getItem("AnalyticProduct"));
            state.productCart.forEach((value) =>{
                state.analyticProducts.push(value);
            })
            let TotalBill = JSON.parse(localStorage.getItem("totalBill")) + 1;
            localStorage.setItem("AnalyticProduct" , JSON.stringify(state.analyticProducts));
            localStorage.setItem("totalBill" , JSON.stringify(TotalBill));
            return{...state}
        default:
            return state;
    }
}