
import { FETCH_USER_DATA } from "../constant/constants";
import { FETCH_USER_SUCCESS } from "../constant/constants";
import { FETCH_USER_FAILURE } from "../constant/constants";

const user_initial_state = {
    loading : false,
    users : [],
    error : ""
}

const user_reducer = (state = user_initial_state,action) => {
    switch(action.type){
        case FETCH_USER_DATA:
            return{
                loading : true
            }
        case FETCH_USER_SUCCESS :
            return {
                loading : false,
                error : "",
                users : action.payload,
                
            }
        case FETCH_USER_FAILURE :
            return {
                loading : false,
                users : [],
                error : action.payload
            }
        default : return state
    }

}

export default user_reducer;