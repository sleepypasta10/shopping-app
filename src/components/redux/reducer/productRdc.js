const initialState = {
    product: [],
    cart: [],
    loading: false
}

const productRdc = (state = initialState, { type, payload }) => {

    switch (type) {
        case "PRODUCT_LOADING":
            return {
                ...state,
                loading: true
            };
        case "GET_PRODUCT":
            return {
                ...state,
                loading: false,
                product: payload
            }
        case "ADD_TO_CART":
            const items = state.cart.find((item) => item.productId === payload.productId);
            if (items) {
                items.quantity += payload.quantity
            } else {
                state.cart.push(payload);
            }   
        case "REMOVE_ITEM":
            return {
                ...state,
                cart: state.cart.filter(item => item.productId !== payload)
            }
        case "INCREMENT":
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if(item.productId === payload.productId){
                        item.quantity += payload.increment
                    }
                    return item;
                })
            };

        case "DECREMENT":
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if(item.productId === payload.productId){
                        if(item.quantity > 1)
                        item.quantity -= payload.decrement
                    }
                    return item;
                })
            };

        default:
            return state;
    }
}

export default productRdc;