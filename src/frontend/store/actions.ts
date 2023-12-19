import { UsersInterface } from "../../server/dataBase/models/users";
import { BasketItem, Product, User, Variation } from "../../types";
export const SET_COLOR = 'SET_COLOR';
export const SET_SELECTED_ITEM = 'SET_SET_SELECTED_ITEM';
export const ADD_NEW_COLOR = 'ADD_NEW_COLOR';
export const SET_PRODUCTS_PHONE = 'SET_PRODUCTS_PHONE';
export const ADD_TO_ABOUT_PHONE = 'ADD_TO_ABOUT_PHONE';
export const SET_PHONE_TO_BASKET = 'SET_PHONE_TO_BASKET';
export const SET_COUNT_PHONE = 'SET_COUNT_PHONE';
export const UPDATE_BASKET = 'UPDATE_BASKET';
export const FILTER_PHONE_COLOR = 'FILTER_PHONE_COLOR';
export const SET_USER = 'SET_USER';
export const DELETE_USER = 'DELETE_USER';


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
export const setPhoneToBasket = (phone, isInpuntCount) => {

    return {
        type: SET_PHONE_TO_BASKET,
        phone,
        isInpuntCount
    };
}
export const updateBasket = (products: BasketItem[]) => {

    return {
        type: UPDATE_BASKET,
        products,
    };
}
export const setUser = (user) => {
   

    return {
        type: SET_USER,
        user,
    };
}
export const deleteUser = (deleteUser) => {


    return {
        type: DELETE_USER,
        deleteUser,
    };
}




