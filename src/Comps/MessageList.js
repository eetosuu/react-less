
import {Box, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import FaceIcon from "@mui/icons-material/Face";
import {useParams} from "react-router-dom";

const MessageList = ({ chats }) => {
    let { chatId } = useParams();
    if (!chats[chatId]) return null;
    const messages = chats[chatId].messages;

    return <Box sx={{overflowY: "scroll", height: "70vh", display: 'flex', justifyContent: 'center'}}>

    <div className={"msg-wrap"}> {messages.map((el, index ) => (
           <ListItem  className={"msg-item"} key = {index} alignItems="flex-start">
                <ListItemAvatar sx={{color:'black'}}>
                    <FaceIcon fontSize="large" sx={{ color: '#597ba0' }} />
                </ListItemAvatar>
                <ListItemText sx={{color:'black'}}
                    primary={el.author}
                    secondary={el.text}
                />
            </ListItem>
        ))}

    </div>
    </Box>
};
export default MessageList;