import {ProductsActionTypes} from "./types"
import {Product} from "../entities"
import {IProductRepository} from "../ports/secondaries"
import {IGetProducts} from "../ports/primaries"

export class GetProducts implements IGetProducts {
    private _productRepository: IProductRepository

    constructor(productRepository: IProductRepository) {
        this._productRepository = productRepository
    }

    execute(): (dispatch: any) => Promise<void> {
        return async dispatch => {
            const {GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL} = ProductsActionTypes

            dispatch({
                type: GET_PRODUCTS_REQUEST
            })

            try {
                const products: Array<Product> = await this._productRepository.getProducts()

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