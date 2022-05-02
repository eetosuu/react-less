import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { useRef, useState} from "react";
import {AUTHOR} from "../Consts/consts";
import {Box, IconButton, List} from "@mui/material";
import ChatList from "./ChatList";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addMessageWithThink} from "../store/messages/action";
import {allMessagesSelector} from "../store/messages/selector";
import {getNameProfile} from "../store/profile/selector";
import {addMsgWithFB} from "../middlewares/middleware";

const ControlPanel = () => {
    let { chatId } = useParams();
    const [chatList, setChatList] = useState([]);
    const [inputText, setInputText] = useState('');
    const inputRef = useRef();
    const dispatch = useDispatch();
    const authorName = useSelector(getNameProfile)
    const allMessages = useSelector(allMessagesSelector );



    const getValueInput = (event) => {
        setInputText(event.target.value);
    };

    const sendMsg = () => {
        if (inputText !== '') {
            const newMsg = {text: inputText, author: authorName };
           dispatch(addMsgWithFB(chatId, newMsg));
            setInputText( "");
            inputRef.current?.focus();
        }
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMsg();
        }
    }


  return <Box sx={{maxWidth: '95%', display: "flex", margin: '0 auto'}}>
      <TextField color="primary" fullWidth inputRef={inputRef}  autoFocus label="Введите сообщение" variant="outlined" type="text" onKeyPress={handleKeyPress} onChange={getValueInput} value={inputText}/>
      <IconButton  onClick={sendMsg} aria-label="delete" size="large">
          <SendIcon fontSize="inherit"  />
      </IconButton>
  </Box>
}
export default ControlPanel;