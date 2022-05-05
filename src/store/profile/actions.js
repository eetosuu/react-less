export  const TOGGLE_NAME = 'TOGGLE_NAME';
export  const TOGGLE_LIKE = 'TOGGLE_LIKE';
export  const UPDATE_NAME = 'UPDATE_NAME';

export const changeVisible = {
    type: TOGGLE_NAME
}
export const changeLike = {
    type: TOGGLE_LIKE
}
export const updName = (name) =>({
    type: UPDATE_NAME,
    payload: name
});