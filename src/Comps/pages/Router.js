import { Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Chats from "./Chats";


const Router = () => {

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
            <Route path="/chats/:chatId" element={<Chats  />} />
            <Route path="*" element={<Chats />} />
        </Routes>
    </>)
};
export default Router;