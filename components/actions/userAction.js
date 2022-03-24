

import axios from "axios";
import { FETCH_USER_DATA } from "../constant/constants";
import { FETCH_USER_SUCCESS } from "../constant/constants";
import { FETCH_USER_FAILURE } from "../constant/constants";


export const fetch_user_data = () => {
    return {
        type : FETCH_USER_DATA
    }
}

export const fetch_user_success = user => {
    return {
        type : FETCH_USER_SUCCESS,
        payload : user
    }
}

export const fetch_user_failure = error => {
    return {
        type : FETCH_USER_FAILURE,
        payload : error
    }
}


// Action Creator for Get Api
// Instead returning a Action it returns Function


export const fetch_users = () => {
    return (dispatch) => {
        dispatch(fetch_user_data)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            const users = res.data
            dispatch(fetch_user_success(users))
        })
        .catch(err => {
            const error_message = err
            dispatch(fetch_user_failure(error_message))
        })
    }
}