import MessageList from "../MessageList";
import {useParams} from "react-router-dom";
import {useState} from "react";
import {AUTHOR} from "../../Consts/consts";
import ChatList from "../ChatList";
import ControlPanel from "../ControlPanel";


const Chats = ({ chats, addMessage }) => {

    return <div className="wrap">
        <ChatList chats={chats}/>
    <MessageList chats={chats} />
        <ControlPanel addMessage={addMessage}/>
    </div>
}

export default Chats;