import { useState, useEffect } from "react";
import api from "../Services/api";
import { NavLink } from "react-router-dom";
import { ListExams } from "../../componentsExams/Pages/ListExams";
//
import apiExam from "../../../src/componentsExams/Services/api";
import { Link } from "react-router-dom";
import "../../App";
//

export function Clients() {
  <ListExams />;

  const [customers, setCustomers] = useState([]);
  const [exams, setExams] = useState([]);

  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    async function fetchAllExams() {
      const response = await apiExam.getAllElements();
      setExams([...response]);
      console.log(response);
    }

    fetchAllExams();
  }, []);

  function filtered(numbercardsus) {
    return exams.filter((currentExam) => {
      return currentExam.attributes.numbercardsus === numbercardsus;
    });
  }

  return (
    <>
      <h2>Clients</h2>
      <br></br>

      <div>
        <div>
          {loading && <p>Loading Information...</p>}
          {!!customers.length &&
            customers.map((customer) => {
              return (
                <div key={customer.id}>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={`/customers/${customer.id}`}
                  >
                    <h2>Nome: {customer.attributes.nameclient}</h2>

                    <h2
                      style={{
                        backgroundColor: "rgb(192, 196, 197)",
                        color: "#9599",
                      }}
                    >
                      Nome Social: {customer.attributes.namesocial}
                    </h2>
                    <h3>Nome da Mãe: {customer.attributes.namemother}</h3>
                    <h3>Data de nascimento: {customer.attributes.databirth}</h3>
                    <h3>Sexo: {customer.attributes.gender}</h3>

                    <h3>
                      Prontuário: {customer.attributes.medicalrecordnumber}
                    </h3>

                    <h3>SUS: {customer.attributes.numbercardsus}</h3>
                  </NavLink>

                  <div>
                    <h2>Exams collected by client</h2>
                  </div>

                  <div>
                    {filtered(customer.attributes.numbercardsus).map((exam) => {
                      return <h4>Nome: {exam.attributes.examname}</h4>;
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
