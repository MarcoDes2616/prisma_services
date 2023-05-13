import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../utils/axios';
import Bill from '../components/Bill';

const Dashboard = () => {
    const user = useSelector(state => state.user)
    const [bills, setBills] = useState(false)
    const [billSelected, setBillSelected] = useState()

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
    const getBill = (id) => {
        setBillSelected(id)
        setBills(true)
    }

    return (
        <div className='dashboard'>
            {bills && <Bill billSelected={billSelected} setBillSelected={setBillSelected} setBills={setBills}/>}
            <h2>Movimientos</h2>
            <div className='separator'></div>
            <div className='bills_container'>
                {info.map((bill) => (
                    <div onClick={() => getBill(bill.id)} className='bill' key={bill.id}>
                        <div className='info_bill'>
                            <p>{bill.date_bill}</p>
                            <p>{bill.observation}</p>
                        </div>
                        <div>
                            <p><b>{bill.value}</b></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;