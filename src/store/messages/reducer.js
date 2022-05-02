import {ADD_MESSAGE, UPDATE_MESSAGES} from "./action";

const initialState = {
    messagesList: {}
};



const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const { chatId, message } = action.payload;
            const oldMessages = state.messagesList[chatId] || [];
            return {
                ...state,
                messagesList: {
                    ...state.messagesList,
                    [chatId]: [
                        ...oldMessages,
                        {
                           ...message,
                            id: `${chatId}${oldMessages.length}`
                        }
                    ]
                }
            };
        }
        case UPDATE_MESSAGES:
            return {
                ...state,
                messagesList: {
                    ...state.messagesList,
                    [action.chatId]: action.message
                }
            }
        default:
            return state;
    }
}

export default messagesReducer;