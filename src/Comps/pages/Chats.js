import MessageList from "../MessageList";
import ChatList from "../ChatList";
import ControlPanel from "../ControlPanel";
import {Box, Container, Divider, Grid} from "@mui/material";


const Chats = ({chats, addMessage}) => {

    return (
        <Container maxWidth="xl">
            <Box sx={{bgcolor: '#597ba0', height: '85vh', borderRadius: "20px" }}>
                <Grid container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={0}>
                    <Grid item xs={4}>
                        <ChatList chats={chats}/>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid container
                              direction="column">
                            <Grid item xs={4}>
                                <MessageList chats={chats}/>
                            </Grid>
                            <Grid item xs={4}>
                                <ControlPanel addMessage={addMessage}/>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </Box>
        </Container>)
}

export default Chats;