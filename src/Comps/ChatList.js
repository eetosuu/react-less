import {
    Avatar,
    Button,
    Box,
    Dialog,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText, DialogTitle, TextField,
} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addChat, delChat} from "../store/chats/action";

const ChatList = () => {
    const chats = useSelector(state => state.chats.chatList);
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => {
        setVisible(false);
    }
    const [chatName, setChatName] = useState('');

    const handleChatName = (e) => {
        setChatName(e.target.value);
    };
    const handleAdd = () => {
        setVisible(true);
    };
    const handleSave = () => {
        if (chatName.length > 0)
            dispatch(addChat(chatName));
        setChatName('');
        handleClose();
    }
    const handleDel = (chat) => {
        dispatch(delChat(chat));
    }




    return <Box sx={{ height: "85vh", borderRight: '1px solid white', paddingTop: '12px',}}>
        <List className={'chat'}>
            {chats?.length > 0 ? (chats.map((chat) => (
                <Link to={`/chats/${chat.id}`} key={chat.id}>
                    <ListItem className={'chat-item'}
                              secondaryAction={
                                  <IconButton onClick={() => handleDel(chat.id)} edge="end" aria-label="delete">
                                      <DeleteIcon/>
                                  </IconButton>
                              }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon/> </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={chat.name}
                        />
                    </ListItem>
                    <Divider sx={{backgroundColor: 'white'}} />
                </Link>
            ))
            ) : (
                <div>Еще нет ни одного чата</div>
                )}
        </List>
        <Button onClick={handleAdd}>Добавить чат</Button>
        <Dialog open={visible} onClose={handleClose}>
            <DialogTitle>Введите название чата</DialogTitle>
                <TextField value={chatName}
                onChange={handleChatName}
                placeholder='Название чата'/>
            <Button onClick={handleSave}>Сохранить чат</Button>
        </Dialog>
    </Box>
}
export default ChatList;