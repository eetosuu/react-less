import {useState} from "react";
import {Box, Button, TextField} from "@mui/material";
import {Link} from 'react-router-dom';
import firebaseConfig from "../../services/firebaseConfig";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const onSubmit = async (e) => {
        e.preventDefault();

        try{
            const auth = getAuth(firebaseConfig);
           await createUserWithEmailAndPassword(auth, email, password);
           toast.success('Успешно', {
               position: toast.POSITION.TOP_RIGHT
           });
           setEmail('');
           setPassword('');
        } catch (e) {
            toast.error('Ошибка', {
                position: toast.POSITION.TOP_RIGHT
            });
            console.error(e);
        }
    };

    return <div>
            <ToastContainer />

        <form onSubmit={onSubmit}>
        <h1 className={'color-main'}>Регистрация</h1>
            <Box sx={{display:'flex', justifyContent: 'center', flexDirection: 'column', gap: '10px'}}>
                <TextField color="primary" placeholder='Email' name='' type='email' onChange={handleEmailChange} value={email} required/>
                <TextField color="primary" placeholder='Пароль' name='password' type='password' onChange={handlePasswordChange} value={password} required />
            </Box>
            <div className={'color-main'}>
                {error && <p>{error}</p>}
                <Button sx={{color: '#597ba0', marginTop: '15px', borderColor: '#597ba0'}} size="large" variant={'outlined'} type='submit'>Зарегистрироваться</Button>
            </div>

            <p className={'color-main'}>Уже зарегистрированы? <Link className={'link'} to={'login'}>Войти</Link> </p>
        </form>
    </div>
}
export default Registration;