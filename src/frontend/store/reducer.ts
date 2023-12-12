import { Reducer } from "redux";
import { BasketItem, Phone, ProductsState, ReducerBasketProducts, ReducerPhoneDescription, ReducerPhoneProducts, SelectedItemState } from "../../types";
import { ADD_NEW_COLOR, ADD_TO_ABOUT_PHONE, SET_COLOR, SET_PHONE_TO_BASKET, SET_PRODUCTS_PHONE, SET_SELECTED_ITEM, UPDATE_BASKET } from "./actions";


export const selected: Reducer<SelectedItemState> = (state: SelectedItemState | undefined, action): SelectedItemState => {


  if (!state && state === undefined) {
    return null

  }


  switch (action.type) {

    case SET_SELECTED_ITEM:

      return action.selected
    case ADD_NEW_COLOR:
      return action.resultFilter

    default:
      return state;
  };
}

export const products: Reducer<ProductsState> = (state: ProductsState | undefined, action): ProductsState => {
  if (!state) {
    return []
  }
  switch (action.type) {

    case SET_COLOR:
      return action.object

    default:
      return state;
  };
}

export const phoneProducts: Reducer<ReducerPhoneProducts> = (state: ReducerPhoneProducts | undefined, action): ReducerPhoneProducts => {
  if (!state) {
    return []
  }
  switch (action.type) {
    case SET_PRODUCTS_PHONE:
      return action.object;
   

    default:
      return state;
  };
}

export const descriptionPhone: Reducer<ReducerPhoneDescription> = (state: ReducerPhoneDescription | undefined, action): ReducerPhoneDescription => {
  if (!state && state === undefined) {
    return null
  }
  switch (action.type) {

    case ADD_TO_ABOUT_PHONE:

      return action.phone

    default:
      return state;
  };
}
export const basketProducts: Reducer<ReducerBasketProducts> = (state: ReducerBasketProducts | undefined, action): ReducerBasketProducts => {
  if (!state) {
    return []
  }

  switch (action.type) {

    case SET_PHONE_TO_BASKET:

      const phone = action.phone
      const newPhone = {
        ...phone,
        count: 1
      }

      const uniqueItem: BasketItem | undefined = state.find((item) => item.id === newPhone.id);
      if (uniqueItem) {

        const resultat = state.map((el) => {

          if (el.id === uniqueItem.id) {
            return {
              ...el,
              count: el.count + 1
            }
          }
          return el
        })

        return resultat;
      } else {

        return [...state, newPhone];
      }
    case UPDATE_BASKET:

      return action.products

    default:
      return state;
  }
};





