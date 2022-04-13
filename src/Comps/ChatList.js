import {
    Avatar,
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';
import {Link} from "react-router-dom";

const ChatList = ({chats}) => {

    return <Box sx={{ height: "85vh", borderRight: '1px solid white', paddingTop: '12px',}}>
        <List className={'chat'}>
            {Object.keys(chats).map((chat, index) => (
                <Link to={`/chats/${chat}`} key={index}>
                    <ListItem className={'chat-item'} key={index}
                              secondaryAction={
                                  <IconButton edge="end" aria-label="delete">
                                      <DeleteIcon/>
                                  </IconButton>
                              }
                    >
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon/> </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={chats[chat].name}
                        />
                    </ListItem>
                    <Divider sx={{backgroundColor: 'white'}} />
                </Link>
            )
            )}

        </List>
    </Box>
}
export default ChatList;