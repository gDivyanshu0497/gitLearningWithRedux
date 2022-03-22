
import cake_reducer from "./cakeReducer";
import ice_reducer from "./iceCreamReducer";
import { combineReducers } from "redux";
import user_reducer from "./userReducer";


const root_reducer_1 = combineReducers({
    cake : cake_reducer,
    ice : ice_reducer,
    user : user_reducer,
})
export default root_reducer_1
// Combine Reducer takes objects