import {Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import { Link } from "react-router-dom";

const ChatList = ({ chats }) => {

    return <div>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Список чатов
        </Typography>
        <List>
        {Object.keys(chats).map((chat, index) => (
            <Link to={`/chats/${chat}`} key={index}>
            <ListItem key={index}
            secondaryAction={
            <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
            </IconButton>
        }
            >
            <ListItemAvatar>
            <Avatar>
            <FolderIcon /> </Avatar>
            </ListItemAvatar>
            <ListItemText
            primary={chats[chat].name}
            />
            </ListItem>
            </Link>
        ))}
        </List>
    </div>
}
export default ChatList;