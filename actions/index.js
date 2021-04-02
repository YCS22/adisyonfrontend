import axios from 'axios';





export const postProduct = (product) => async dispatch => {

    const config = {
        headers: {

            'Content-Type': 'application/json',

        },
    }

    const { data } = await axios.post(`/products`, product, config)

    dispatch({ type: 'POST_PRODUCT', payload: data })

}
