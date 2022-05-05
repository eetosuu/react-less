import { Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Chats from "./Chats";
import Gists from "./Gists";
import Registration from "./Registration";
import Login from "./Login";
import RequireAuth from "../../hocs/RequireAuth";

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
            <li>
                <Link to="/gists">Gists</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/registration">Registration</Link>
            </li>
        </ul>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route element={<RequireAuth />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/gists" element={<Gists />} />
                <Route path='/chats/:chatId' element={<Chats/>} />
                <Route path="*" element={<Chats />} />
                </Route>

        </Routes>
    </>)
};
export default Router;