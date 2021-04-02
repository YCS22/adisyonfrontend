import { combineReducers } from 'redux';
import { getProduct } from './productReducer';


export default combineReducers({

    getProduct: getProduct

});