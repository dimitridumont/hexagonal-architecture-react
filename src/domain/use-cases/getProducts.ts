import {ProductsActionTypes} from "./types"
import {Product} from "../entities"
import {ProductRepository} from "../../infrastructure"
import {IGetProducts} from "../ports/primaries"

export class GetProducts implements IGetProducts {
    execute(): (dispatch: any) => Promise<void> {
        return async dispatch => {
            const {GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL} = ProductsActionTypes

            dispatch({
                type: GET_PRODUCTS_REQUEST
            })

            try {
                const productRepository = new ProductRepository()
                const products: Array<Product> = await productRepository.getProducts()

                dispatch({
                    type: GET_PRODUCTS_SUCCESS,
                    payload: products
                })
            } catch (e) {
                dispatch({
                    type: GET_PRODUCTS_FAIL,
                    e
                })
            }
        }
    }
}