import { AdminTypes } from "../contants/action-types";

export const analyticProducts = () => async (dispatch) => {
    dispatch({type: AdminTypes.ANALYTIC_PRODUCTS})
}