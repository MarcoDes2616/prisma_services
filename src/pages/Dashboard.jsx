import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../utils/axios';

const Dashboard = () => {
    const user = useSelector(state => state.user)
    const [bills, setBills] = useState()

    useEffect(() => {
        axios.get(`/users/${user.username}/bills`)
            .then(res => setBills(res.data))
            .catch(error => alert(error))
    }, [])

    const info = [
        {
        "id": "12124",
        "date_bill": "2022-02-01",
        "value": "2500000",
        "type": "1",
        "observation": "Salario del mes"
        },
        {
        "id": "12125",
        "date_bill": "2022-02-02",
        "value": "65215",
        "type": "1",
        "observation": "Pago servicio de agua"
        }
    ]
        

    return (
        <div>
            <h2>Movimientos</h2>
            <div className='bills'>

            </div>
        </div>
    );
};

export default Dashboard;