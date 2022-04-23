import { takeLatest, put, delay } from 'redux-saga/effects'
import {ADD_MESSAGE_WITH_SAGA, addMessage} from "./messages/action";
import {AUTHOR} from "../Consts/consts";

function* onAddMessageWithSaga(action) {
 yield put(addMessage(action.payload.chatId, action.payload.message));
 if (action.payload.message.author !== AUTHOR.bot) {
     const newMsgBot = {text: 'Сообщение получено', author: AUTHOR.bot};
     yield delay(2000);
     yield put(addMessage(action.payload.chatId, newMsgBot ));
 }
}

function* mySaga() {
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga)


}

export default mySaga;