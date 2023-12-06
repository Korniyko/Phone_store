import { Reducer } from "redux";
import { ProductsState, SelectedItemState } from "../../types";
import { ADD_NEW_COLOR, ADD_TO_ABOUT_PHONE, SET_COLOR, SET_COUNT_PHONE, SET_PHONE_TO_BASKET, SET_PRODUCTS_PHONE, SET_SELECTED_ITEM } from "./actions";


export const selected: Reducer<SelectedItemState> = (state, action): SelectedItemState => {
  if (!state) {
    return []

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

export const products: Reducer<ProductsState> = (state, action): ProductsState => {
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

export const phoneProducts: Reducer<any> = (state, action): any => {
  if (!state) {
    return []
  }
  switch (action.type) {

    case SET_PRODUCTS_PHONE:
      return action.object


    default:
      return state;
  };
}
export const descriptionPhone: Reducer<any> = (state, action): any => {
  if (!state) {
    return []
  }
  switch (action.type) {

    case ADD_TO_ABOUT_PHONE:

      return action.phone

    default:
      return state;
  };
}
export const basketProducts: Reducer<any> = (state, action): any => {
  if (!state) {
    return []
  }

  switch (action.type) {
    
    case SET_PHONE_TO_BASKET:
      const uniqueItem = state.find((item) => item.id === action.phone.id);


      if (uniqueItem) {
        return state;
      } else {
        return [...state, action.phone];
      }

    default:
      return state;
  }
};

export const countPhone: Reducer<any> = (state, action): any => {
  if (!state) {
    return []
  }
  switch (action.type) {

    case SET_COUNT_PHONE:

      return action.countPhone

    default:
      return state;
  };
}



