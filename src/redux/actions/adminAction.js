import { AdminTypes } from "../contants/action-types";

export const analyticProducts = () => async (dispatch) => {
    dispatch({type: AdminTypes.ANALYTIC_PRODUCTS})
}

export const updateInfoUser = (user) => async (dispatch) => {
    dispatch({type: AdminTypes.UPDATE_INFO_USER , payload:user})
}

export const deleteUser = (idUser) => async (dispatch) => {
    dispatch({type: AdminTypes.DELETE_USER , payload:idUser})
}