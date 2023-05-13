import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from '../utils/axios';

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit, reset} = useForm();
    const [error, setError] = useState()
    const [showError, setShowError] = useState(false)

    const submitForm = async data => {
        axios.post("/login", data)
            .then(res => console.log(res.data))
            .catch(error => setError(error.message))
    }
    return (
        <div className='login'>
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