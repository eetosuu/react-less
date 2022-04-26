import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';

import profileReducer from "./profile/reducer";
import chatsReducer from "./chats/reducer";
import messagesReducer from "./messages/reducer";
import gistsReducer from "./gists/reducer";
import createSagaMiddleware from 'redux-saga'
import mySaga from "./sagas";



// const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
    key: 'root',
    storage
}

const reducers = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    gists: gistsReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)));

const persistor = persistStore(store) ;

export default persistor;


// sagaMiddleware.run(mySaga);