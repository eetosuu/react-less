import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import {useEffect, useRef, useState} from "react";
import {AUTHOR} from "../Consts/consts";
import {Box, Grid, IconButton, List} from "@mui/material";
import ChatList from "./ChatList";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../store/messages/action";

const ControlPanel = () => {
    let { chatId } = useParams();
    const [chatList, setChatList] = useState([]);
    const [inputText, setInputText] = useState('');
    const inputRef = useRef();
    const dispatch = useDispatch();
    const authorName = useSelector((state) => state.profile.name )
    const allMessages = useSelector((state) => state.messages.messagesList );
    const messages = allMessages[chatId] || [];



    const getValueInput = (event) => {
        setInputText(event.target.value);
    };

    const sendMsg = () => {
        if (inputText !== '') {
            const newMsg = {text: inputText, author: authorName };
           dispatch(addMessage(chatId, newMsg));
            setInputText( "");
            inputRef.current.focus();
        }
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMsg();
        }
    }
    useEffect(() => {
        let delayMsg;
        if (messages.length > 0 && messages[messages.length-1].author !== AUTHOR.bot) {
            const newMsgBot = {text: 'Сообщение получено', author: AUTHOR.bot};
            delayMsg = setInterval( () => {
                dispatch(addMessage(chatId, newMsgBot ))
            }, 1000);



        }
        return () => {
            clearInterval(delayMsg);
        }
    }, [messages, chatId]);


  return <Box sx={{maxWidth: '95%', display: "flex", margin: '0 auto'}}>
      <TextField color="primary" fullWidth inputRef={inputRef}  autoFocus label="Введите сообщение" variant="outlined" type="text" onKeyPress={handleKeyPress} onChange={getValueInput} value={inputText}/>
      <IconButton  onClick={sendMsg} aria-label="delete" size="large">
          <SendIcon fontSize="inherit"  />
      </IconButton>
  </Box>
}
export default ControlPanel;