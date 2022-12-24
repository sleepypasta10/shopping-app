import {takeLatest, put, call} from 'redux-saga/effects';


const getProductFromAPI = async () => {
    let res = await fetch('https://api.npoint.io/beef3d4f5c122e5a014a')
    let data = await res.json();
    return {
        statusCode: res.status,
        data: data
    }
}

function* getData() {
    yield put ({
        type: "PRODUCT_LOADING"
    })

    let api = yield call(getProductFromAPI);
    if(api.statusCode === 200) {
        yield put({
            type: "GET_PRODUCT",
            payload: api.data
        })
    } else {
        yield put({
            type: "PRODUCT_LOADING"
        })
    }

  
}

function* mySaga() {
    yield takeLatest("GET", getData)
}

export default mySaga;