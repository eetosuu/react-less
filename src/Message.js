import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import AndroidIcon from '@mui/icons-material/Android';

const Message = ({text}) => {
    if (text.author === 'Bot') {
        return <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <AndroidIcon />
            </ListItemAvatar>
            <ListItemText
                primary={text.author}
                secondary={text.text}
            />
        </ListItem>
    } else {
        return <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <FaceIcon />
        </ListItemAvatar>
        <ListItemText
            primary={text.author}
            secondary={text.text}
        />
    </ListItem>

    }

};

export default Message;