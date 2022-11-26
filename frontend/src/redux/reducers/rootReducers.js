import { combineReducers } from "redux";
import {usersReducer} from "./users/users";
import { productsReducer } from "./products/products"

const rootReducer = () => combineReducers({
    users: usersReducer,
    products: productsReducer
});

export default rootReducer;