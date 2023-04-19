import { FormClients } from "./FormClients";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../Services/api";
import { FormEdAddExamClientsStep2 } from "../../componentsExams/Pages/FormEdAddExamClientsStep2";
import apiExam from "../../componentsExams/Services/api";
import { toast } from "react-toastify";

export function FormEdAddExamClientsStep1() {
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

  const handleSubmitCustomer = (newCustomer) => {
    api
      .editClient(customerId, newCustomer)
      .then((result) => {
        toast.success(`The client ${result.attributes.nameclient} was Edited!`);

        navigate(`/customers/${customer.id}`);
      })
      .catch((error) => console.log(error));
  };
  console.log(customer);

  const handleSubmitExam = (newExam) => {
    newExam.numbercardsus = customer.attributes.numbercardsus;
    console.log(newExam);

    apiExam
      .createExam(newExam)
      .then((result) => {
        toast.success(
          `The exam ${result.attributes.examname} was created successfully!`
        );

        navigate("/exams");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <h2>Edit Client</h2>

        {customer ? (
          <div>
            <FormClients
              onSubmit={handleSubmitCustomer}
              initialValues={customer}
            />
            <h2>Add Exam for Client</h2>

            <div>
              <FormEdAddExamClientsStep2 onSubmit={handleSubmitExam} />
            </div>
          </div>
        ) : (
          <p>Loading Information...</p>
        )}
      </div>
    </div>
  );
}
