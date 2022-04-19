
import {Box, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import FaceIcon from "@mui/icons-material/Face";
import {useParams} from "react-router-dom";
import {AUTHOR} from "../Consts/consts";
import {useSelector} from "react-redux";

const MessageList = () => {
    const allMessages = useSelector((state) => state.messages.messagesList);
    const { name } = useSelector((state) => state.profile);
    let { chatId } = useParams();


    if (!allMessages[chatId]) return null;

    const messages = allMessages[chatId];
    const isAuthorBot = (author) => {
       return author === AUTHOR.bot
    }

    return <Box sx={{overflowY: "scroll", height: "70vh", display: 'flex', justifyContent: 'center'}}>

    <div className={"msg-wrap"}> {messages.map((el ) => (
           <ListItem  className={"msg-item"} key = {el.id} alignItems="flex-start">
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