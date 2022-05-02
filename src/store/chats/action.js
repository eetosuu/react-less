export const ADD_CHAT = 'CHATS::ADD_CHAT';
export const DELETE_CHAT = 'CHATS::DELETE_CHAT';
export const CHATS_UPDATE = 'CHATS::CHATS_UPDATE';

export const addChat = (name) => ({
    type: ADD_CHAT,
    payload:  name
});
export  const delChat = (chat) => (
    {
        type: DELETE_CHAT,
        payload:  chat
    }
);

export const chatListUpdate = (chats) => ({
    type: CHATS_UPDATE,
    chats
});