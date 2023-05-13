import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from '../utils/axios';
import { setIsLoading } from '../store/slices/isLoading.slice';
import { setUser } from '../store/slices/user.slice';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, reset} = useForm();
    const [error, setError] = useState()
    const isLoading = useSelector(state => state.isLoading);

    const submitForm = async data => {
        dispatch(setIsLoading(true))
        axios.post("/login", data)
            .then(res => {
                dispatch(setUser(res.data))
                navigate("/services/dashboard")
            })
            .catch(error => setError(error.message))
            .finally(dispatch(setIsLoading(false)))
    }
    
    return (
        <div className='login'>
            {isLoading && <Loader/>}
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