
import { FETCH_USER_DETAILS } from "../constant/constants";
import { FETCH_USER_SUCCESS } from "../constant/constants";
import { FETCH_USER_FAILURE } from "../constant/constants";

const initial_state = {
    loading : false,
    users : [],
    error : ""
}

const user_reducer = (state = initial_state,action) => {
    switch(action.type){
        case FETCH_USER_DETAILS:
            return{
                ...state,
                loading : false
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                users : action.payload,
                
            }
        case FETCH_USER_FAILURE :
            return {
                ...state,
                error : action.payload
            }
        default : return state
    }

}

export default user_reducer;