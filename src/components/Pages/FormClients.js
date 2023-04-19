import { useState } from "react";
const defaultFormValues = {
  attributes: {
    nameclient: "",
    namesocial: "",
    namemother: "",
    gender: "",
    cpf: "",
    medicalrecordnumber: "",
    numbercardsus: "",
    databirth: "",
    informationclient: "",
  },
};

export function FormClients({ onSubmit, initialValues = defaultFormValues }) {
  const [nameclient, setNameClient] = useState(
    initialValues.attributes.nameclient
  );
  const [namesocial, setNamesocial] = useState(
    initialValues.attributes.namesocial
  );
  const [namemother, setNameMother] = useState(
    initialValues.attributes.namemother
  );
  const [gender, setGender] = useState(initialValues.attributes.gender);
  const [cpf, setCPF] = useState(initialValues.attributes.cpf);
  const [medicalrecordnumber, setMedicalrecordnumber] = useState(
    initialValues.attributes.medicalrecordnumber
  );
  const [numbercardsus, setNumbercardsus] = useState(
    initialValues.attributes.numbercardsus
  );
  const [databirth, setDatabirth] = useState(
    initialValues.attributes.databirth
  );
  const [informationclient, setInformationclient] = useState(
    initialValues.attributes.informationclient
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      nameclient,
      namesocial,
      namemother,
      gender,
      cpf,
      medicalrecordnumber,
      numbercardsus,
      databirth,
      informationclient,
    });

    setNameClient(initialValues.attributes.nameclient);
    setNamesocial(initialValues.attributes.namesocial);
    setNameMother(initialValues.attributes.namemother);
    setGender(initialValues.attributes.gender);
    setCPF(initialValues.attributes.cpf);
    setMedicalrecordnumber(initialValues.attributes.medicalrecordnumber);
    setNumbercardsus(initialValues.attributes.numbercardsus);
    setDatabirth(initialValues.attributes.databirth);
    setInformationclient(initialValues.attributes.informationclient);
  };
  return (
    <>
      <containter>
        <form onSubmit={handleSubmit}>
          <div style={{ padding: "calc(15px / 2)" }} id="divLabel">
            <label htmlFor="numbercardsus-input">Número do SUS </label>
            <input
              style={{ marginLeft: "1.8rem", width: "300px", height: "27px" }}
              type="number"
              min="0"
              id="numbercardsus-input"
              name="numbercardsus-input"
              value={numbercardsus}
              onChange={(e) => setNumbercardsus(e.target.value)}
              placeholder="Número do SUS do cliente"
            />
          </div>

          <div style={{ padding: "calc(15px / 2)" }} id="divLabel">
            <label htmlFor="nameclient-input">Nome </label>
            <input
              style={{ marginLeft: "7.4rem", width: "300px", height: "27px" }}
              id="nameclient-input"
              name="nameclient"
              value={nameclient}
              onChange={(e) =>
                setNameClient(e.target.value.toLocaleUpperCase())
              }
              placeholder="Nome do cliente"
            />
          </div>

          <div style={{ padding: "calc(15px / 2)" }} id="divLabel">
            <label htmlFor="namesocial-input">Name Social </label>
            <input
              style={{ marginLeft: "3.9rem", width: "300px", height: "27px" }}
              id="namesocial-input"
              name="namesocial"
              value={namesocial}
              onChange={(e) =>
                setNamesocial(e.target.value.toLocaleUpperCase())
              }
              placeholder="Nome Social do cliente"
            />
          </div>

          <div style={{ padding: "calc(15px / 2)" }} id="divLabel">
            <label htmlFor="namemother-input">Nome da Mãe </label>
            <input
              style={{ marginLeft: "3.2rem", width: "300px", height: "27px" }}
              id="namemother-input"
              name="namemother"
              value={namemother}
              onChange={(e) =>
                setNameMother(e.target.value.toLocaleUpperCase())
              }
              placeholder="Nome da mãe do cliente"
            />
          </div>

          <div style={{ padding: "calc(15px / 2)" }} id="divLabel">
            <label htmlFor="gender-input">Sexo </label>
            <input
              style={{ marginLeft: "8rem", width: "300px", height: "27px" }}
              id="gender-input"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value.toLocaleUpperCase())}
              placeholder="Sexo do cliente"
            />
          </div>

          <div style={{ padding: "calc(15px / 2)" }} id="divLabel">
            <label htmlFor="medicalrecordnumber-input">Prontuário </label>
            <input
              style={{ marginLeft: "5.2rem", width: "300px", height: "27px" }}
              type="number"
              min="0"
              id="medicalrecordnumber-input"
              name="medicalrecordnumber-input"
              value={medicalrecordnumber}
              onChange={(e) => setMedicalrecordnumber(e.target.value)}
              placeholder="Prontuário do cliente"
            />
          </div>

          <div style={{ padding: "calc(15px / 2)" }} id="divLabel">
            <label htmlFor="databirth-input">Data de nascimento </label>
            <input
              style={{ marginLeft: "0.1rem", width: "300px", height: "27px" }}
              id="databirth-input"
              name="databirth-input"
              value={databirth}
              onChange={(e) => setDatabirth(e.target.value)}
              placeholder="Data de nascimento cliente"
            />
          </div>

          <div style={{ padding: "calc(15px / 2)" }} id="divLabel">
            <label htmlFor="informationclient-input">Informações </label>
            <textarea
              id="informationclient-input"
              name="informationclient-input"
              value={informationclient}
              onChange={(e) => setInformationclient(e.target.value)}
              placeholder="Informações do cliente"
              style={{ marginLeft: "4.3rem", width: "300px", height: "40px" }}
            />
          </div>

          <br></br>
          <button type="submit">Save</button>
        </form>
      </containter>
    </>
  );
}
