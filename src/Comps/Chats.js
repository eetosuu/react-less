import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';

const Chats = ({chats}) => {
    return <List sx={{ width: '100%', bgcolor: 'primary.list' }}>
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={chats.name} secondary={chats.id} />
        </ListItem>
    </List>
}
export default Chats;