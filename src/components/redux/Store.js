import createSagaMiddleware from "@redux-saga/core";
import productRdc from "./reducer/productRdc";
import {createStore, applyMiddleware, combineReducers} from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import mySaga from "./saga/mySaga";


const sagaMiddleware = createSagaMiddleware();

const globalState = {
    productState: productRdc
};

const allRdc = combineReducers(globalState);

export default createStore(allRdc,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
    )

sagaMiddleware.run(mySaga);