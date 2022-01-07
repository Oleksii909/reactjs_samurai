import s from './Navbar.module.css'
import {Link, NavLink} from "react-router-dom";
import Friends from "../Friends/Friends";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile </NavLink> </div>
            <div className={s.item}>
                <NavLink to='/dialogs'>Messages </NavLink> </div>
            <div className={s.item}>
                <NavLink to='/news'>News </NavLink> </div>
            <div className={s.item}>
                <NavLink to='/music'>Music </NavLink> </div>
            <div className={s.item}>
                <NavLink to='/settings'>Settings </NavLink> </div>
            <Friends state={props.state.sidebar}/>
        </nav>
    );
}

export default Navbar;