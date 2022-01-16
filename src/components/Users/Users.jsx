import React from "react";
import axios from "axios";


class UsersC extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5')
                .then((response) => {
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
        return <>
            <button onClick={() => this.getUsers()}>Get users</button>
            {
                this.props.users.map(u => {
                    return <div key={u.id}>
                        <span>
                            <img src={u.photos.small != null ? u.photos.small :  '/Oleksii909.jpeg'}/>
                            {!u.followed
                                ? <button onClick={() => this.props.follow(u.id)}>{ 'Follow' }</button>
                                : <button onClick={() => this.props.unfollow(u.id)}>{ 'Unfollow' }</button>
                            }

                        </span>
                        <span>
                            <div><span>{u.name}</span><span>{u.status}</span></div>
                            <div><span>{"u.location.country"}</span><span>{"u.location.city"}</span></div>
                        </span>
                    </div>
                })
            }
        </>
    }
}

export default UsersC