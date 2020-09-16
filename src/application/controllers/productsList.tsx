import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import {GetProducts} from "../../domain/use-cases"
import {ProductRepository} from "../../infrastructure"
import {ProductsListView} from "../views/productsList"

export const ProductsListController = () => {
    const dispatch  = useDispatch()
    // @ts-ignore
    const {products} = useSelector(({productReducer}) => productReducer)

    useEffect(() => {
        const productRepository = new ProductRepository()
        const getProducts = new GetProducts(productRepository)
        dispatch(getProducts.execute())
    }, [])

    return <ProductsListView products={products}/>
}