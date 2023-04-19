import { useState } from "react";

const defaultFormValues = {
  attributes: {
    nameclient: "",
    numbercardsus: "",
    passwordexam: "",
    examname: "",
    examcode: "",
    collectiondate: "",
    receivedexam: "",
    informationexam: "",
  },
};

export function FormEdAddExamClientsStep2({
  onSubmit,
  initialValues = defaultFormValues,
}) {
  // const [nameclient, setNameclient] = useState(
  //   initialValues.attributes.nameclient
  // );
  const [numbercardsus, setNumbercardsus] = useState(
    initialValues.attributes.numbercardsus
  );
  const [passwordexam, setPasswordexam] = useState(
    initialValues.attributes.passwordexam
  );
  const [examname, setExamname] = useState(initialValues.attributes.examname);
  const [examcode, setExamcode] = useState(initialValues.attributes.examcode);
  const [collectiondate, setCollectiondate] = useState(
    initialValues.attributes.collectiondate
  );
  const [receivedexam, setReceivedexam] = useState(
    initialValues.attributes.receivedexam
  );
  const [informationexam, setInformationexam] = useState(
    initialValues.attributes.informationexam
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      // nameclient,
      numbercardsus,
      passwordexam,
      examname,
      examcode,
      collectiondate,
      receivedexam,
      informationexam,
    });

    // setNameclient(initialValues.attributes.nameclient);
    setNumbercardsus(initialValues.attributes.numbercardsus);
    setPasswordexam(initialValues.attributes.passwordexam);
    setExamname(initialValues.attributes.examname);
    setExamcode(initialValues.attributes.examcode);
    setCollectiondate(initialValues.attributes.collectiondate);
    setReceivedexam(initialValues.attributes.receivedexam);
    setInformationexam(initialValues.attributes.informationexam);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ padding: "calc(15px / 2)" }} id="divLabel">
        <label htmlFor="examcode-input">Código do Exame </label>
        <input
          style={{ marginLeft: "1.6rem", width: "300px", height: "27px" }}
          type="number"
          min="0"
          id="examcode-input"
          name="examcode-input"
          value={examcode}
          onChange={(e) => setExamcode(e.target.value)}
          placeholder="Código do exame"
        />
      </div>

      <div id="divLabel" style={{ padding: "calc(15px / 2)" }}>
        <label htmlFor="passwordexam-input">Senha do Exame </label>
        <input
          style={{ marginLeft: "2rem", width: "300px", height: "27px" }}
          id="passwordexam-input"
          name="passwordexam-input"
          value={passwordexam}
          onChange={(e) => setPasswordexam(e.target.value.toUpperCase())}
          placeholder="Senha do Exame"
        />
      </div>

      <div id="divLabel" style={{ padding: "calc(15px / 2)" }}>
        <label htmlFor="examname-input">Nome do Exame </label>
        <input
          id="examname-input"
          name="examname"
          value={examname}
          onChange={(e) => setExamname(e.target.value.toLocaleUpperCase())}
          placeholder="Nome do exame"
          style={{ marginLeft: "2.3rem", width: "300px", height: "27px" }}
        />
      </div>

      <div id="divLabel" style={{ padding: "calc(15px / 2)" }}>
        <label htmlFor="collectiondate-input">Data da coleta </label>
        <input
          style={{ marginLeft: "3.6rem", width: "300px", height: "27px" }}
          id="collectiondate-input"
          name="collectiondate-input"
          value={collectiondate}
          onChange={(e) => setCollectiondate(e.target.value)}
          placeholder="Data da coleta do Exame"
        />
      </div>

      <div id="divLabel" style={{ padding: "calc(15px / 2)" }}>
        <label htmlFor="receivedexam-input">Data do recebimento </label>
        <input
          id="receivedexam-input"
          name="receivedexam-input"
          value={receivedexam}
          onChange={(e) => setReceivedexam(e.target.value)}
          placeholder="Data do recebimento do Exame"
          style={{ marginLeft: "0.3rem", width: "300px", height: "27px" }}
        />
      </div>
      <br></br>
      <button type="submit">Save</button>
    </form>
  );
}
