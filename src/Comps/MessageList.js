
import {ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import AndroidIcon from "@mui/icons-material/Android";
import FaceIcon from "@mui/icons-material/Face";
import {useParams} from "react-router-dom";

const MessageList = ({ chats }) => {
    let { chatId } = useParams();
    if (!chats[chatId]) return null;
    const messages = chats[chatId].messages;

    return <div> {messages.map((el, index ) => (
           <ListItem key = {index} alignItems="flex-start">
                <ListItemAvatar>
                    <FaceIcon />
                </ListItemAvatar>
                <ListItemText
                    primary={el.author}
                    secondary={el.text}
                />
            </ListItem>
        ))}
    </div>
};
export default MessageList;