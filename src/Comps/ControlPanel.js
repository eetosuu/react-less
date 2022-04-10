import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import SendIcon from "@mui/icons-material/Send";
import {useEffect, useRef, useState} from "react";
import {AUTHOR} from "../Consts/consts";
import {Grid, List} from "@mui/material";
import ChatList from "./ChatList";
import {useParams} from "react-router-dom";

const ControlPanel = ({ addMessage }) => {
    let { chatId } = useParams();
    const [chatList, setChatList] = useState([]);
    const [inputText, setInputText] = useState('');
    const inputRef = useRef();
    const newChat = [{name: 'Чат', id: 1}];

    const getValueInput = (event) => {
        setInputText(event.target.value);
    };

    const sendMsg = () => {
        if (inputText !== '') {
            const newMsg = {text: inputText, author: AUTHOR.you };
           addMessage(chatId, newMsg);
            setInputText( "");
            inputRef.current.focus();
        }
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMsg();
        }
    }
    // useEffect(() => {
    //     let delayMsg;
    //     if (messageList.length > 0 && messageList[messageList.length-1].author === AUTHOR.you) {
    //         delayMsg = setInterval( () => { setMessageList([...messageList, newMsgBot]);}, 1000);
    //         const newMsgBot = {text: 'Сообщение получено', author: AUTHOR.bot};
    //     }
    //     return () => {
    //         clearInterval(delayMsg);
    //     }
    // }, [messageList]);


  return <div>
        <div className={""}>
      <TextField inputRef={inputRef}  autoFocus label="Введите сообщение" variant="outlined" type="text" onKeyPress={handleKeyPress} onChange={getValueInput} value={inputText}/>
      <Fab color="warning" aria-label="add" onClick={sendMsg}>
          <SendIcon color="action"/>
      </Fab>
            </div>
  </div>
}
export default ControlPanel;