const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_PAGE = 'CHANGE_PAGE';
const CHANGE_TOTAL_USERS_COUNT = 'CHANGE_TOTAL_USERS_COUNT';

let initialState = {
    users: [],
    pageSize: 2,
    count: 0,
    pageCurrent: 1
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS :
            return {
                ...state,
                users: [...action.users]
            }
        case CHANGE_PAGE :
            return {
                ...state,
                pageCurrent: action.changePage
            }
        case CHANGE_TOTAL_USERS_COUNT :
            return {
                ...state,
                count: action.count
            }
        default:
            return state;
    }
}


export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setNewCurrentPageAC = (changePage) => ({type: CHANGE_PAGE, changePage})
export const setNewTotalUsersCountAC = (count) => ({type: CHANGE_TOTAL_USERS_COUNT, count})

export default usersReducer;