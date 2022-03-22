
import { FETCH_USER_DETAILS } from "../constant/constants";
import { FETCH_USER_SUCCESS } from "../constant/constants";
import { FETCH_USER_FAILURE } from "../constant/constants";


export const fetch_user_success = () => {
    return {
        type : FETCH_USER_SUCCESS
    }
}

export const fetch_user_details = user => {
    return {
        type : FETCH_USER_DETAILS,
        payload : user
    }
}

export const fetch_user_failure = error => {
    return {
        type : FETCH_USER_FAILURE,
        payload : error
    }
}
