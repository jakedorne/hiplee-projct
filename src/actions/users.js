import axios from 'axios';

const SERVER_URL = "https://reqres.in/api"

export function getUsers() {
    return dispatch => {
        dispatch({type: "LOGGING_IN"})

        axios.get(SERVER_URL + '/users').then(response => {
            dispatch({type: "GET_USERS_SUCCESS", users: response.data.data})
        }).catch(error => {
            console.log(error)
        })
    }
}

export function getUser(userID) {
    return dispatch => {

        axios.get(SERVER_URL + '/users/' + userID).then(response => {
            dispatch({type: "GET_USER_SUCCESS", user: response.data.data})
        }).catch(error => {
            console.log(error)
        })
    }
}