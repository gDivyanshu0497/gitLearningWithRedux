
import { BUY_ICECREAM } from "../constant/constants";

const initial_state = {
    no_of_iceCream : 20
}

const ice_reducer = (state = initial_state,action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                ...state,
                no_of_iceCream : state.no_of_iceCream - 1
            }
        default:
            return state
    }
}

export default ice_reducer