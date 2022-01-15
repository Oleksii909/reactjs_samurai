import React from "react";

const Users = (props) => {
    let users = props.users.map((u => {
        return <div key={u.id}>
            <span>
                <img src={u.imageUrl}/>
                <button>Follow</button>
            </span>
            <span>
                <div><span>{u.name}</span><span>{u.status}</span></div>
                <div><span>{u.location.country}</span><span>{u.location.city}</span></div>
            </span>
        </div>
    }))
    return <>{users}</>
}

export default Users