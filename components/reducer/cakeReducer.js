import { BUY_CAKE } from "../constant/constants";

const initial_state = {
    no_of_cake : 50
}

const cake_reducer = (state = initial_state,action) => {
    switch(action.type){
        case BUY_CAKE : 
            return {
                ...state,
                no_of_cake : state.no_of_cake -1
            }
        default:
            return state
    }
}

export default cake_reducer