import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from '../utils/axios';
import { setIsLoading } from '../store/slices/isLoading.slice';
import { setUser } from '../store/slices/user.slice';
import Loader from '../components/Loader';
import Clipboard from '../components/Clipboard';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, reset} = useForm();
    const [error, setError] = useState()
    const isLoading = useSelector(state => state.isLoading);
    const [clipboard, setClipboard] = useState(false)


    const submitForm = async data => {
        dispatch(setIsLoading(true))
        axios.post("/login", data)
            .then(res => {
                if(!res.data.login) {
                    showError(res.data.mensaje)
                    return
                }
                localStorage.setItem("userLocal", res.data.username)
                dispatch(setUser(res.data))
                navigate("/services/dashboard")
                dispatch(setIsLoading(false))
            })
            .catch(error => showError(error.message))
    }

    const showError = (error) => {
        setError(error)
        setTimeout(() => {
            setError()
        }, 3000)
    }

    
    return (
        <div className='login'>
            {isLoading && <Loader/>}
            {<Clipboard clipboard={clipboard} setClipboard={setClipboard}/>}
            <p>Inicio</p>
            <i onClick={() => navigate("/")} className='bx bxs-home bx-lg'></i>
            <p onClick={()=> setClipboard(!clipboard)} 
                className='get_credentials'>Obtener credenciales
                <i className={ clipboard ? 'bx bxs-down-arrow' : 'bx bxs-up-arrow'} ></i></p>
            <div className="separator"></div>
            <form onSubmit={handleSubmit(submitForm)}>
                    <div className="login_box">
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="ingresar username"
                            id='username'
                            onChange={() => setError()}
                            {...register('username',{
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}
                        />
                    </div>
                    <div className="login_box">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            id='clave'
                            placeholder="ingresar contraseña"
                            onChange={() => setError()}
                            {...register('clave',{
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}
                        />
                    </div>
                    {error && 
                    <div className='error'>
                        <p>{error}</p>
                    </div>
                    }
                    <button className='btn_login'>Ingresar</button>
                </form>
        </div>
    );
};

export default Login;