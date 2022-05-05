import {useCallback, useEffect, useState} from "react";
import {API_URL_PUBLIC} from "../../Consts/gists";
import {CircularProgress} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {selectGists, selectGistsError, selectGistsLoading} from "../../store/gists/selector";
import {getAllGists} from "../../store/gists/action";

const Gists = () => {
const dispatch = useDispatch();
const gists = useSelector(selectGists);
const loading = useSelector(selectGistsLoading);
const error = useSelector(selectGistsError);

    const requestGists = useCallback(async () => {
        dispatch(getAllGists());
    }, []);
    useEffect(() => {
       requestGists();
    }, []);

    const renderGist = useCallback(
        (gist) =>
        <li key={gist.id}>{gist.description || 'No description'}</li>, []);
if (loading){
    return <CircularProgress/>
}
 if (error) {
     return  <>
     <h3>
         Error
     </h3>
         <button onClick={requestGists}>Retry</button>
     </>
 }
    return <ul>{gists.map(renderGist)}</ul>
}
export default  Gists;