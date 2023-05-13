import { useEffect, useState } from 'react';
import axios from '../utils/axios';
import { useSelector } from 'react-redux';

const Bill = ({ billSelected, setBillSelected, setBills }) => {
    const [info, setInfo] = useState()
    const user = useSelector(state => state.user)

    // useEffect(() => {
    //     axios.get(`/users/${user.username}/bills/${billSelected}`)
    //         .then(res => setInfo(res.data))
    //         .catch(error => alert(error))
    // }, [])

    const goBack = () => {
        setBills(false)
        setBillSelected()
    }

    const data = {
        "id": "12124",
        "date_bill": "2022-02-01",
        "value": "2500000",
        "type": "1",
        "observation": "Salario del mes"
    }

    return (
        <div className='showbill__container'>
            <div className='showbill'>
                <h3>Ver movimiento</h3>
                <p>{data.date_bill}</p>
                <textarea name="" id="" cols="30" rows="10" value={data.observation}></textarea>
                <div className='radio_btn'>
                    <legend>
                        <input type="radio" name="tipo" id="Ingreso" value="1" checked={data.type === "1"} />
                        Ingreso
                    </legend>
                    <legend>
                        <input type="radio" name="tipo" id="Gasto" value="2" checked={data.type === "2"} />
                        Gasto
                    </legend>
                </div>
            </div>
        </div>
    );
};

export default Bill;