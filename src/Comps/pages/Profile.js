import store from "../../store";
import {useCallback, useState} from "react";
import {changeLike, changeVisible} from "../../store/profile/actions";
import {useDispatch, useSelector} from "react-redux";
import {Checkbox} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";

const Profile = () => {

    const {showName, name} = useSelector((state) => state);
    const dispatch = useDispatch();
    const {showLike, like} = useSelector((state) => state);

    const setShowName = useCallback(() => {
        dispatch(changeVisible);
    },[dispatch]);
    const setShowLike = useCallback(() => {
        dispatch(changeLike);
    },[dispatch]);

    return <div>
        <h1 className={"color-main"}>Профиль</h1>
        <button onClick={setShowName}>Показать имя</button>
        <Checkbox checked={showLike}
                  value={showLike}
                  onChange={setShowLike} icon={<FavoriteBorder sx={{ color: 'red'}} />} checkedIcon={<Favorite sx={{ color: 'red'}} />} />
        <blockquote>
            {showName && <h3 className={"color-main"}>{name}</h3>}
        </blockquote>
    </div>;
}
export default  Profile; 
