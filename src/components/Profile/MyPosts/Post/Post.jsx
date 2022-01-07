import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='http://trailers.apple.com/trailers/fox/images/avatar_200908191149.jpg' />
            {props.message}
            <div><span>like {props.count}</span></div>
        </div>
    );
}
export default Post;