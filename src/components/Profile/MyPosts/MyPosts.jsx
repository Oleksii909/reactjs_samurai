import s from './MyPosts.module.css'
import Post from './Post/Post'
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} count={p.likesCount}/>)
    let newPostElement = React.createRef();
    const addPost = () => {
        props.addPost()
    }
    const changePost = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    return (
        <div>
            My Posts
            <div>
                <textarea ref={newPostElement} onChange={changePost} value={props.newPostText}/>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts;