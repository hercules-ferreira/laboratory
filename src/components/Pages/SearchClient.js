import { useState, useEffect } from "react";
import api from "../Services/api";
import { Link, NavLink } from "react-router-dom";
import "../../App";

export function Search() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCustomerList, setFilteredCustomerList] = useState([]);
  const [nameclient, setNameClient] = useState("");
  const [namesocial, setNamesocial] = useState("");
  const [namemother, setNameMother] = useState("");
  const [gender, setGender] = useState("");
  const [cpf, setCPF] = useState("");
  const [medicalrecordnumber, setMedicalrecordnumber] = useState("");
  const [numbercardsus, setNumbercardsus] = useState("");
  const [databirth, setDatabirth] = useState("");
  const [informationclient, setInformationclient] = useState("");

  useEffect(() => {
    api
      .getAllClients()
      .then((result) => {
        console.log(result);
        setCustomers(result);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const filterList = (str) => {
    const filteredList = customers.filter((customer) => {
      return customer.attributes.numbercardsus.includes(str);
    });

    setFilteredCustomerList(filteredList);
  };

  return (
    <div>
      <h2 style={{ marginBottom: "2rem" }}> Search </h2>
      <input
        id="numbercardsus-input"
        name="numbercardsus-input"
        onKeyUp={(event) => filterList(event.target.value)}
        placeholder="Digite o número do cartão SUS do cliente"
        style={{ width: "400px", height: "50px" }}
      />
      {!!filteredCustomerList.length === 0 ? (
        <h6>SUS não encontrado...</h6>
      ) : (
        filteredCustomerList.map((customer) => {
          return (
            <div>
              <div>
                <Link to={`/exams/${customer.id}/edit`}>
                  <h6>Número SUS: {customer.attributes.numbercardsus}</h6>
                  <h6>Nome: {customer.attributes.nameclient}</h6>
                  <h6>Data de Nascimento: {customer.attributes.databirth}</h6>
                  <h6>Nome da Mãe: {customer.attributes.namemother}</h6>
                </Link>
                <form>
                  {/* <form onSubmit={handleSubmit}> */}
                  <NavLink to={`/exams/${customer.id}/edit`}>
                    <button
                      style={{
                        backgroundColor: "rgb(255, 190, 0)",
                        color: "#9599",
                      }}
                    >
                      Edit & Add Exam for Client
                    </button>
                  </NavLink>
                </form>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
