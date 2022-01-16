import React from "react";
import axios from "axios";

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        alert('Component Users willUnmount')
    }

    componentDidMount() {
        alert('Component Users didMount')
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=5')
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
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

export default Users
