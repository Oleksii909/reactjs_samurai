import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} count={p.likesCount}/>)
    let newPostElement = React.createRef();
    const addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }
    return (
        <div>
            My Posts
            <div>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;