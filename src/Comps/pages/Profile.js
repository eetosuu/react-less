import store from "../../store";
import {useCallback, useState} from "react";
import {changeLike, changeVisible, updName} from "../../store/profile/actions";
import {useDispatch, useSelector} from "react-redux";
import {Button, Checkbox} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import TextField from "@mui/material/TextField";

const Profile = () => {

    const {showName, name} = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const {showLike, like} = useSelector((state) => state);

    const setShowName = useCallback(() => {
        dispatch(changeVisible);
    },[dispatch]);
    const setShowLike = useCallback(() => {
        dispatch(changeLike);
    },[dispatch]);

    const [valueName, setValueName ] = useState(name);

    const getValueName = (e) => {
        setValueName(e.target.value);
    }
    const saveName = () => {
        dispatch(updName(valueName))
    }

    return <div>
        <h1 className={"color-main"}>Профиль</h1>
        <blockquote>
            {showName && <h3 className={"color-main"}>Текущее имя: {name}</h3>}
        </blockquote>
        <TextField color="dark" autoFocus label="Введите имя" variant="outlined" type="text" onChange={getValueName} value={valueName}/>
        <Button color="dark" onClick={saveName}>Сохранить имя</Button>
        <br/>
        <Button color="dark" onClick={setShowName}>Показать имя</Button>
        <br/>
        <Checkbox checked={showLike}
                  value={showLike}
                  onChange={setShowLike} icon={<FavoriteBorder sx={{ color: 'red'}} />} checkedIcon={<Favorite sx={{ color: 'red'}} />} />

    </div>;
}
export default  Profile; 
