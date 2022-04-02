import logo from './logo.svg';
import './App.scss';
import Message from "./Message";
import {useState, useEffect} from "react";
import {AUTHOR} from "./Consts/consts";


function App(props) {
    const [messageList, setMessageList] = useState([]);
    const [inputText, setInputText] = useState('');
    const getValueInput = (event) => {
        setInputText(event.target.value);
    };
    const sendMsg = () => {
        if (inputText !== '') {
            const newMsg = {text: inputText, author: AUTHOR.you };
            setMessageList([...messageList, newMsg]);
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
          <h3>История сообщений:</h3>
          <br/>
          {messageList.map(el => (<Message text={el}/>))}
          <div className={"message-send"}>
              <input className={"message-input"} type="text" placeholder={'Введите сообщение'} onChange={getValueInput}/>
              <button className={"message-btn"} onClick={sendMsg}>Отпр.</button>
          </div>

      </header>
    </div>
  );
}

export default App;
