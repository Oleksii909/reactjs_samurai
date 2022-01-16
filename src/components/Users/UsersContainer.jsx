import React from "react";
import {connect} from "react-redux";
import {
    followAC,
    setNewCurrentPageAC,
    setNewTotalUsersCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        axios.get( `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.pageCurrent}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (p) => {
        this.props.changePage(p)
        axios.get( `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${p}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return <Users
            count={this.props.count}
            pageSize={this.props.pageSize}
            pageCurrent={this.props.pageCurrent}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)