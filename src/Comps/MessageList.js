
import {Box, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import FaceIcon from "@mui/icons-material/Face";
import {useParams} from "react-router-dom";
import {AUTHOR} from "../Consts/consts";
import {useDispatch, useSelector} from "react-redux";
import {allMessagesSelector} from "../store/messages/selector";
import {showNameSelector} from "../store/profile/selector";
import {useEffect} from "react";
import {getMsgByChatIdWithFB} from "../middlewares/middleware";

const MessageList = () => {
    const allMessages = useSelector(allMessagesSelector );
    const { name } = useSelector(showNameSelector);
    let { chatId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMsgByChatIdWithFB(chatId));
    }, [chatId]);


    const messages = allMessages[chatId];
    const isAuthorBot = (author) => {
       return author === AUTHOR.bot
    }


    return <Box sx={{overflowY: "scroll", height: "70vh", display: 'flex', justifyContent: 'center'}}>

    <div className={"msg-wrap"}> {messages?.map((el, index) => (
           <ListItem  className={"msg-item"} key = {index} alignItems="flex-start">
                <ListItemAvatar sx={{color:'black'}}>
                    {isAuthorBot(el.author)  ? ( <AndroidIcon fontSize="large" sx={{ color: '#597ba0' }} />) : (<FaceIcon fontSize="large" sx={{ color: '#597ba0' }} />)   }
                </ListItemAvatar>
                <ListItemText sx={{color:'black'}}
                    primary={isAuthorBot(el.author) ? AUTHOR.bot : name}
                    secondary={el.text}
                />
            </ListItem>
        ))}

    </div>
    </Box>
};
export default MessageList;