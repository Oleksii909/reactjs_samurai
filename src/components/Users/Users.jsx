import React from "react";
import axios from "axios";
import s from './users.module.css'

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        alert('Component Users willUnmount')
    }

    componentDidMount() {
        alert('Component Users didMount')
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
        let pages = []
        let maxPageNumber = Math.ceil(this.props.count / this.props.pageSize)
        for (let i=1; i<=maxPageNumber; i++) {
            pages.push(<span className={this.props.pageCurrent == i && s.currentPage}
            onClick={(e)=> this.onPageChanged(i)}>{i}</span>)
        }
        return <>
            {pages}
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
