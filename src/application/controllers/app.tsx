import React from "react"
import thunk from "redux-thunk"
import {createLogger} from "redux-logger"
import {applyMiddleware, createStore} from "redux"
import {Provider} from "react-redux"

import {reducer} from "../reducers"
import AppView from "../views/app"

export const AppController = () => {
    const middleware = [thunk]

    if (process.env.NODE_ENV !== 'production') {
        // @ts-ignore
        middleware.push(createLogger())
    }

    const store = createStore(reducer, applyMiddleware(...middleware))

    return (
        <Provider store={store}>
            <AppView/>
        </Provider>
    )
}