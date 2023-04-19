import api from "../Services/api";
import { useNavigate } from "react-router-dom";
import { FormClients } from "./FormClients";
import { toast } from "react-toastify";

export function NewClient() {
  const navigate = useNavigate();

  const handleSubmit = ({
    nameclient,
    namesocial,
    gender,
    cpf,
    namemother,
    numbercardsus,
    medicalrecordnumber,
    databirth,
    informationclient,
  }) => {
    api
      .createClient({
        nameclient,
        namesocial,
        gender,
        cpf,
        namemother,
        numbercardsus,
        medicalrecordnumber,
        databirth,
        informationclient,
      })
      .then((result) => {
        toast.success(
          `The client ${result.attributes.nameclient} was created successfully!`
        );

        navigate("/customers");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Add Client</h2>
      <FormClients onSubmit={handleSubmit} />
    </div>
  );
}
