import {NavLink} from "react-router-dom";
import s from './friends.module.css'

const Friends = (props) => {
    let friendList = props.state.friends.map( f => <div>
        <NavLink to={`/friend/${f.id}`}>
            <img src={f.src}/>
            {f.name}
        </NavLink>
    </div>);

    return (
        <div className={s.friends}>
            Friends
            <div>
                {friendList}
            </div>

        </div>
    );
}

export default Friends;