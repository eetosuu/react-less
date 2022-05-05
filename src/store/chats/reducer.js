import {ADD_CHAT, CHATS_UPDATE, DELETE_CHAT} from "./action";

const initialState = {
    chatList: []
};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,  {
                    id: `id${state.chatList.length}`,
                        name: action.payload
                    }
                ]
            };
        case DELETE_CHAT: {
            const newChatList = state.chatList.filter(chat => chat.id !== action.payload);
            return {...state, chatList: newChatList};
        };
        case CHATS_UPDATE:
            return {
                ...state,
                chatList: action.chats
            }
        default:
            return state;

    }
};

export default chatsReducer;