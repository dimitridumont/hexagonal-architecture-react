import React from "react"
import {ProductsListController} from "../../controllers"

const Container = () => (
    <div className="app">
        <h1 className={"app-title"}>Liste de course</h1>
        <div className={"app-container"}>
            <ProductsListController/>
        </div>
    </div>
)

export default Container