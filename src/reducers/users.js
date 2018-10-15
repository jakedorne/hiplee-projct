export default function reducer(
    state={
        loading: false,
        error: null,
        results: []
    }, action) {
    switch (action.type) {
      case 'GET_USERS_SUCCESS':
        return {...state, users: action.users}
      case 'GET_USER_SUCCESS':
        return {...state, user: action.user}
      default:
        return state
  }
}