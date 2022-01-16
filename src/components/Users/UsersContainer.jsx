import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setNewCurrentPageAC,
    setNewTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/users-reducer";
import Users from "./Users";

let  mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        count: state.usersPage.count,
        pageCurrent: state.usersPage.pageCurrent
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        changePage: (newActivePage) => {
            dispatch(setNewCurrentPageAC(newActivePage))
        },
        setTotalUsersCount: (count) => {
            dispatch(setNewTotalUsersCountAC(count))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)