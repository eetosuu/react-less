import {Link, useLocation, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/AuthProvider";
import {useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import {Box, Button, TextField} from "@mui/material";

const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const auth = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let from = location.state?.from?.pathname || '/';

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
         try {
             await auth.signin({email, password}, () => {
                setTimeout(()=> navigate(from, {replace: true}), 1000)
             });
         } catch (e) {
             toast.error('Ошибка', {
                 position: toast.POSITION.TOP_RIGHT
             });
             setError(e);
             console.error(e);
         }
    }
    return <div>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
            <h1 className={'color-main'}>Логин</h1>
            <Box sx={{display:'flex', justifyContent: 'center', flexDirection: 'column', gap: '10px'}}>
                <TextField color="primary" placeholder='Email' name='' type='email' onChange={handleEmail} value={email} required/>
                <TextField color="primary" placeholder='Пароль' name='password' type='password' onChange={handlePassword} value={password} required />
            </Box>
            <div className={'color-main'}>
                {error && <p>{error}</p>}
                <Button sx={{color: '#597ba0', marginTop: '15px', borderColor: '#597ba0'}} size="large" variant={'outlined'} type='submit'>Войти</Button>
            </div>
        </form>
    </div>
}
export default Login;