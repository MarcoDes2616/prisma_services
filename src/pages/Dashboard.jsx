import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../utils/axios";
import Bill from "../components/Bill";

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const [bills, setBills] = useState();
  const [billSelected, setBillSelected] = useState();
  const username = localStorage.getItem("userLocal");
  const [modal, setModal] = useState(false);
  const [billToShow, setBillToShow] = useState(4);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`/users/${user.username || username}/bills`)
      .then((res) => {
        setBills(res.data);
      })
      .catch((error) => alert(error));
  };

  const deleteBill = (id) => {
    axios.delete(`/users/${username}/bills/${id}`).then((res) => {
      setBillSelected();
      setModal(false);
      getData();
    });
  };

  const formatData = (date) => {
    const fecha = new Date(date);
    const fechaFormateada = fecha.toLocaleDateString();
    return fechaFormateada;
  };

  const formatCurrency = (value) => {
    if (value) {
      const number = parseFloat(value);
      return number?.toLocaleString("es-ES");
    }
  };

  const getModal = (id) => {
    setBillSelected(id);
    setModal(true);
  };

  const register = (type, observation, value) => {
    const data = { type, observation, value };
    axios
      .post(`/users/${username}/bills`, data)
      .then((res) => {
        getData();
        setModal(false);
      })
      .catch((error) => alert(error));
  };

  let newData = bills?.slice(0, billToShow);

  return (
    <div className="dashboard">
      <div className="add_bill_wrapper" onClick={() => setModal(true)}>
        <div className="add_bill">+</div>
      </div>
      {modal && (
        <Bill
          billSelected={billSelected}
          setBillSelected={setBillSelected}
          deleteBill={deleteBill}
          formatData={formatData}
          formatCurrency={formatCurrency}
          setModal={setModal}
          register={register}
        />
      )}
      <h2>Movimientos</h2>
      <div className="separator"></div>
      <div className="bills_container">
        {newData?.sort().map((bill) => (
          <div onClick={() => getModal(bill.id)} className="bill" key={bill.id}>
            <div className="info_bill">
              <p>{formatData(bill.date_bill)}</p>
              <p>{bill.observation}</p>
            </div>
            <div>
              <p>
                <b>{"$ " + formatCurrency(bill.value)}</b>
              </p>
            </div>
          </div>
        ))}
        <button
          disabled={billToShow >= bills?.length}
          className="show_more_btn"
          onClick={() => setBillToShow(billToShow + 4)}
        >
          Ver mas
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
