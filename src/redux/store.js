import { createStore } from "redux";
import combinedReducers from "./combine-reducer";
const store = createStore(combinedReducers)
export { store }