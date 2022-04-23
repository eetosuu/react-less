import {AUTHOR} from "../../Consts/consts";


export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const ADD_MESSAGE_WITH_SAGA = 'MESSAGES::ADD_MESSAGE_WITH_SAGA'

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: { chatId, message }
});

export const addMessageWithThink =

    (chatId, message) => (dispatch, getState) => {

    dispatch(addMessage(chatId, message));

    if (message.author !== AUTHOR.bot) {
        const newMsgBot = {text: 'Сообщение получено тх', author: AUTHOR.bot};
        setTimeout(() => dispatch(addMessage(chatId, newMsgBot)), 1000);
    }
}