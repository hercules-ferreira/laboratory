import { FormClients } from "./FormClients";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../Services/api";
import { toast } from "react-toastify";

export function EditClients() {
  const [customer, setCustomer] = useState(null);
  const { customerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .getOneClient(customerId)
      .then((result) => {
        setCustomer(result);
      })
      .catch((error) => console.log(error));
  }, [customerId]);

  const handleSubmit = (newCustomer) => {
    api
      .editClient(customerId, newCustomer)
      .then((result) => {
        toast.success(`The client ${result.attributes.nameclient} was Edited!`);

        navigate(`/customers/${customerId}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        <h2>Edit Client</h2>

        {customer ? (
          <FormClients onSubmit={handleSubmit} initialValues={customer} />
        ) : (
          <p>Loading Information...</p>
        )}
      </div>
    </div>
  );
}
