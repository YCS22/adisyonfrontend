


export const getProduct = (state = { product: [] }, action) => {

    switch (action.type) {
        case 'POST_PRODUCT':
            return { product: action.payload }

        default:
            return state;
    }
}
