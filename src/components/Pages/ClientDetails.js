import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../Services/api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

export function ClientDetails() {
  const [customer, setCustomer] = useState(null);
  const { customerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.getOneClient(customerId).then((result) => {
      setCustomer(result);
      console.log(result);
    });
  }, [customerId]);

  const deleteCustomer = () => {
    if (window.confirm(`Delete ${customer.attributes.nameclient} ?`) === true) {
      api
        .removeCustomer(customerId)
        .then(() => {
          toast.warning(
            `The client ${customer.attributes.nameclient} was deleted correctly !!!`
          );

          navigate("/customers");
        })
        .catch((error) => console.log(error));
    }
  };

  return !customer ? (
    <div>Loading Information...</div>
  ) : (
    <div>
      <br></br>
      <h2>
        <h4>Nome: {customer.attributes.nameclient}</h4>
        <h4 style={{ backgroundColor: "#363F5F", color: "#ffffff" }}>
          Nome Social: {customer.attributes.namesocial}
        </h4>
      </h2>
      <br></br>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Nome da Mãe: </td>
            <td>{customer.attributes.namemother}</td>{" "}
          </tr>
          <tr>
            <td>Sexo: </td>
            <td>{customer.attributes.gender}</td>{" "}
          </tr>
          <tr>
            <td>Nascimento: </td>
            <td>{customer.attributes.databirth}</td>{" "}
          </tr>

          <tr>
            <td>Prontuário: </td>
            <td>{customer.attributes.medicalrecordnumber}</td>{" "}
          </tr>
          <tr>
            <td>SUS: </td>
            <td>{customer.attributes.numbercardsus}</td>{" "}
          </tr>
          <tr>
            <td>Informações: </td>
            <td>{customer.attributes.informationclient}</td>{" "}
          </tr>
          <div>
            <br></br>{" "}
          </div>
        </tbody>
      </table>

      <NavLink to={`/customers/${customer.id}/edit`}>
        <button>Edit</button>
      </NavLink>

      <NavLink to="/customers">
        <button onClick={deleteCustomer}>Delete</button>
      </NavLink>

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
    </div>
  );
}
