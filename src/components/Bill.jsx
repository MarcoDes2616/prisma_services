import { useEffect, useState } from "react";
import axios from "../utils/axios";
import { useSelector } from "react-redux";

const Bill = ({
  billSelected,
  setBillSelected,
  setModal,
  deleteBill,
  formatData,
  formatCurrency,
  register
}) => {
  const [info, setInfo] = useState();
  const user = useSelector((state) => state.user);
  const username = localStorage.getItem("userLocal");
  const [observation, setObservation] = useState()
  const [value, setValue] = useState()
  const [type, setType] = useState()
  

  useEffect(() => {
    if (billSelected) {
      axios
        .get(`/users/${user.username || username}/bills/${billSelected}`)
        .then((res) => setInfo(res.data))
        .catch((error) => alert(error));
    }
  }, []);

  const formatHora = (date) => {
    const fecha = new Date(date);
    return fecha.toLocaleTimeString();
  };

  const closeModal = () => {
    setModal(false);
    setBillSelected();
  };

  console.log(info);

  return (
    <div className="showbill__container">
      <div className="showbill">
        <h3>Ver movimiento</h3>
        {billSelected && (
          <p>
            {formatData(info?.date_bill) +
              "  -  " +
              formatHora(info?.date_bill)}
          </p>
        )}
        <p></p>
        <textarea
          readOnly={billSelected && true}
          name="observation"
          id="observation"
          value={billSelected ? info?.observation : observation}
          onChange={e => setObservation(e.target.value)}
        ></textarea>
        <p>Tipo de movimiento</p>
        <div className="radio_btn">
          <legend>
            <input
              readOnly={billSelected && true}
              type="radio"
              name="type"
              id="1"
              checked={billSelected ? info?.type == "1" : type == "1" }
              onChange={(e) => setType("1")}
            />
            Ingreso
          </legend>
          <legend>
            <input
              readOnly={billSelected && true}
              type="radio"
              name="type"
              id="2"
              checked={billSelected ? info?.type == "2" : type == "2"}
              onChange={(e) => setType("2")}
            />
            Gasto
          </legend>
        </div>
        <p>Valor</p>
        <input
          className="input_value"
          readOnly={billSelected && true}
          type="number"
          name="value"
          value={billSelected ? formatCurrency(info?.value) : value}
          onChange={e => setValue(e.target.value)}
        />
        <div className="bill_btn_container">
          {billSelected ? (
            <>
              <button onClick={() => deleteBill(info.id)}>Eliminar</button>
              <button onClick={() => closeModal()}>Cancelar</button>
            </>
          ) : (
            <>
              <button onClick={() => register(value, observation, type)}>Registrar</button>
              <button onClick={() => closeModal()}>Cancelar</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bill;
