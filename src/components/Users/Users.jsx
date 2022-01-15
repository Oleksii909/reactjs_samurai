import React from "react";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, imageUrl: 'https://avatars.githubusercontent.com/u/73876066?s=60&u=752295afd4f79dbcb1f4209ad5dcb2f1ff23e74e&v=4',
                followed: true, name: 'Oleksii909', status: 'I am professional FullStack Developer (Drupal+React)', location: {city:'Kiev', country: 'Ukraine'}},
            {id: 2, imageUrl: 'https://avatars.githubusercontent.com/u/73876066?s=60&u=752295afd4f79dbcb1f4209ad5dcb2f1ff23e74e&v=4',
                followed: false, name: 'Andrey', status: 'I am drupal developer', location: {city:'Moscow', country: 'Russia'}},
            {id: 3, imageUrl: 'https://avatars.githubusercontent.com/u/73876066?s=60&u=752295afd4f79dbcb1f4209ad5dcb2f1ff23e74e&v=4',
                followed: true, name: 'Dmitriy', status: 'I am react developer', location: {city:'Minsk', country: 'Belarus'}},
        ])
    }
    let users = props.users.map((u => {
        return <div key={u.id}>
            <span>
                <img src={u.imageUrl}/>
                {!u.followed ?
                    <button onClick={() => props.follow(u.id)}>{ 'Follow' }</button>
                    : <button onClick={() => props.unfollow(u.id)}>{ 'Unfollow' }</button>
                }

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