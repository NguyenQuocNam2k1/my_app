import { AdminTypes } from "../contants/action-types";

const initialState = {
    analyticProducts:[],
    productCart:""
}

export const Admin = (state = initialState, {type, payload}) =>{
    // localStorage.setItem('totalBill', JSON.stringify(0));
    let getAllUser = JSON.parse(localStorage.getItem("usersAccount"));
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
        case AdminTypes.UPDATE_INFO_USER:
            let userEdit = getAllUser[payload.id - 1];
            if(JSON.stringify(userEdit) !== JSON.stringify(payload)){
                getAllUser[payload.id - 1] = payload;
                localStorage.setItem("usersAccount" , JSON.stringify(getAllUser));
            }
            return {...state}
        case AdminTypes.DELETE_USER:
            // console.log(payload)
            getAllUser.splice(payload-1 , 1);
            getAllUser.forEach((user, index) =>{
                user.id = index+1;
            })
            localStorage.setItem("usersAccount" , JSON.stringify(getAllUser));
            return {...state}
        default:
            return state;
    }
}