import { combineReducers } from "redux";
import { cartReducer } from "./reducer";
const combinedReducers = combineReducers({
    cart: cartReducer
})

export default combinedReducers