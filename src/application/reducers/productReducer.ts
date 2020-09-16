import {ProductsActionTypes} from "../../domain/use-cases/types"

// @ts-ignore
const initialState = {
    products: [],
}

export const productReducer = (state = initialState, action: { type: any, payload?: any }) => {
    const {GET_PRODUCTS_SUCCESS} = ProductsActionTypes

    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

