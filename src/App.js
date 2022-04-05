import logo from './logo.svg';
import './App.scss';
import Message from "./Message";
import {useState, useEffect, useRef} from "react";
import {AUTHOR} from "./Consts/consts";
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import SendIcon from '@mui/icons-material/Send';
import {Grid, List} from "@mui/material";
import Chats from "./Comps/Chats";


function App(props) {
    const [messageList, setMessageList] = useState([]);
    const [inputText, setInputText] = useState('');
    const [chatList, setChatList] = useState([]);

    const newChat = [{name: 'Чат', id: 1}];

    const getValueInput = (event) => {
        setInputText(event.target.value);
    };
    const inputRef = useRef();
    const sendMsg = () => {
        if (inputText !== '') {
            const newMsg = {text: inputText, author: AUTHOR.you };
            setMessageList([...messageList, newMsg]);
            // setInputText( ""); //не работает, поле не очищается, нельзя отправить сообщение с этим же текстом снова
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
        if (messageList.length > 0 && messageList[messageList.length-1].author === AUTHOR.you) {
            delayMsg = setInterval( () => { setMessageList([...messageList, newMsgBot]);}, 1000);
            const newMsgBot = {text: 'Сообщение получено', author: AUTHOR.bot};
        }
        return () => {
            clearInterval(delayMsg);
        }
        }, [messageList]);
  return (

    <div className="App">
      <header className="App-header">

          <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start" spacing={2}>
              <Grid
                    item xs={5}>
                  {newChat.map((el) => ( <Chats chats = {el}/>))}
              </Grid>
              <Grid item xs={7}>
                  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'primary.list' }}> <h3>История сообщений:</h3> {messageList.map((el, index ) => (<Message key = {index} text={el}/>))}</List>
              </Grid>
          </Grid>


          <div className={"message-send"}>
              <TextField inputRef={inputRef}  autoFocus label="Введите сообщение" variant="outlined" type="text" onKeyPress={handleKeyPress} onChange={getValueInput}/>
              <Fab color="warning" aria-label="add" onClick={sendMsg}>
                  <SendIcon color="action"/>
              </Fab>
          </div>


      </header>
    </div>
  );
}

export default App;
