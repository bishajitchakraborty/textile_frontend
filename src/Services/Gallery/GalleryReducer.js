import {GALLERY_ERROR, GALLERY_SUCCESS, GALLERY_LOADING} from "./GalleryType";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const GalleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GALLERY_LOADING:
            return {
                ...state,
                loading: true,
            }
        case GALLERY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case GALLERY_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Gallery"
            }
        default:
            return state;
    }
}

export default GalleryReducer;