import s from './Dialogs.module.css';
import {NavLink, Link} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map (d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let NewMessage = React.createRef();
    let SendMessage = () => {
        let text = NewMessage.current.value
        alert(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <textarea ref={NewMessage}></textarea>
                <button onClick={SendMessage}>Send Message</button>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;