/*
 * action types
 */

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'


/*
 * action creators
 */

export function login(userId) {
    return { type: LOGIN, userId }
}

export function logout() {
    return { type: LOGOUT }
}


/*
 * reducer
 */

const initialState = {
    userId: null,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                userId: action.userId,
            }
        case LOGOUT:
            return {
                ...state,
                userId: null,
            }
        default:
            return state
    }
} 


/*
 * selectors
 */

export const getUserId = state => state.user.userId;
