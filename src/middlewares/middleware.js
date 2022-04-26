import {ADD_MESSAGE, addMessage} from "../store/messages/action";
import {AUTHOR} from "../Consts/consts";

const middleware = store => next => action => {
   if(action.type === ADD_MESSAGE && action.payload.message.author !== AUTHOR.bot) {
       const newMsgBot = {text: 'Сообщение получено', author: AUTHOR.bot};
       setTimeout(() => store.dispatch(addMessage(action.payload.chatId, newMsgBot)), 1500);
   }
   return next(action);
}
export default middleware;