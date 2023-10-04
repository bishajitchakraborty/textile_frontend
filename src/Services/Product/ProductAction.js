import axios from "axios";
import {base_url} from "../../Constrant";
import {PRODUCT_LOADING, PRODUCT_ERROR, PRODUCT_SUCCESS} from "./ProductType";

export const getProduct = ()=> async dispatch =>{
    try {
        dispatch({
            type:PRODUCT_LOADING
        })
        const response =  await axios.get(`${base_url}/product/`)
        dispatch({
            type:PRODUCT_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:PRODUCT_ERROR
        })
    }
}