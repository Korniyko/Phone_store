import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux"
import thunk from 'redux-thunk';
import { descriptionPhone,basketProducts, phoneProducts, products, selected } from "./reducer";


const initialState = {}

const reducers = combineReducers({
  products,
  selected,
  phoneProducts,
  descriptionPhone,
  basketProducts
  

})
const composeEnhancers = (process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

export default () => createStore(reducers, composeEnhancers(applyMiddleware(thunk)))