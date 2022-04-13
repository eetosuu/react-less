import { Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Chats from "./Chats";
import {AUTHOR} from "../../Consts/consts";
import {useState} from "react";


const initialChats = {
    id1: {
        name: 'chat1',
        messages: [{text: 'Сообщение чата 1', author: AUTHOR.you}]
    },
    id2: {
        name: 'chat2',
        messages: [{text: 'Сообщение чата 2', author: AUTHOR.you}]
    }
}

const Router = () => {
    const [chats, setChats] = useState(initialChats);
    const addMessage = (chatId, message) => {
        setChats({...chats, [chatId]: {
            name: chats[chatId].name,
                messages: [...chats[chatId].messages, message],
            }})
    }

    return (<>
        <ul className={'menu'}>
            <li>
                <Link to="/">Главная</Link>
            </li>
            <li>
                <Link to="/profile">Профиль</Link>
            </li>
            <li>
                <Link to="/chats">Чаты</Link>
            </li>
        </ul>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/chats/:chatId" element={<Chats chats={chats} addMessage={addMessage} />} />
            <Route path="*" element={<Chats chats={chats}/>} />
        </Routes>
    </>)
};
export default Router;