import React from "react";
import s from './users.module.css'

let Users = (props) => {

        let pages = []
        let maxPageNumber = Math.ceil(props.count / props.pageSize)
        for (let i=1; i<=maxPageNumber; i++) {
            pages.push(<span className={props.pageCurrent == i && s.currentPage}
            onClick={(e)=> props.onPageChanged(i)}>{i}</span>)
        }
        return <>
            {pages}
            {
                props.users.map(u => {
                    return <div key={u.id}>
                        <span>
                            <img src={u.photos.small != null ? u.photos.small :  '/Oleksii909.jpeg'}/>
                            {!u.followed
                                ? <button onClick={() => props.follow(u.id)}>{ 'Follow' }</button>
                                : <button onClick={() => props.unfollow(u.id)}>{ 'Unfollow' }</button>
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

export default Users
