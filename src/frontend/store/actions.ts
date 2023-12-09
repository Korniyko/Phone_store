import { Product, Variation } from "../../types";
export const SET_COLOR = 'SET_COLOR';
export const SET_SELECTED_ITEM = 'SET_SET_SELECTED_ITEM';
export const ADD_NEW_COLOR = 'ADD_NEW_COLOR';
export const SET_PRODUCTS_PHONE = 'SET_PRODUCTS_PHONE';
export const ADD_TO_ABOUT_PHONE = 'ADD_TO_ABOUT_PHONE';
export const SET_PHONE_TO_BASKET = 'SET_PHONE_TO_BASKET';
export const SET_COUNT_PHONE = 'SET_COUNT_PHONE';


export const setColor = (object: Product[]) => {
    return {
        type: SET_COLOR,
        object
    };
}
export const setSelectedItem = (selected: Variation) => {

    return {
        type: SET_SELECTED_ITEM,
        selected
    };
}
export const addNewColor = (resultFilter: Variation) => {
    return {
        type: ADD_NEW_COLOR,
        resultFilter
    };
}
export const setProductsPhone = (object) => {
    // console.log(object);
    
    return {
        type: SET_PRODUCTS_PHONE,
        object
    };
} 
export const addToAboutPhone = (phone) => {

    
    return {
        type: ADD_TO_ABOUT_PHONE,
        phone
    };
} 
export const setPhoneToBasket = (phone) => {

    
    return {
        type: SET_PHONE_TO_BASKET,
        phone,
        
    };
} 

