import axios from "axios";
import {base_url} from "../../Constrant";
import {GALLERY_ERROR, GALLERY_SUCCESS, GALLERY_LOADING} from "./GalleryType";

export const getGallery = ()=> async dispatch =>{
    try {
        dispatch({
            type:GALLERY_LOADING
        })
        const response =  await axios.get(`${base_url}/gallery/`)
        dispatch({
            type:GALLERY_SUCCESS,
            payload:response.data
        })
    }catch (e) {
        dispatch({
            type:GALLERY_ERROR
        })
    }
}