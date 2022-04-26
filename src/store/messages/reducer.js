import {ADD_MESSAGE} from "./action";

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
        default:
            return state;
    }
}

export default messagesReducer;