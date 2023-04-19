import { useState } from "react";

const defaultFormValues = {
  attributes: {
    examname: "",
    examcode: "",
    examvalue: "",
    deliverytime: "",
    informationexame: "",
  },
};

export function FormExams({ onSubmit, initialValues = defaultFormValues }) {
  const [examname, setExamname] = useState(initialValues.attributes.examname);
  const [examcode, setExamcode] = useState(initialValues.attributes.examcode);
  const [examvalue, setExamvalue] = useState(
    initialValues.attributes.examvalue
  );
  const [deliverytime, setDeliverytime] = useState(
    initialValues.attributes.deliverytime
  );
  const [informationexame, setInformationexame] = useState(
    initialValues.attributes.informationexame
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      examname,
      examcode,
      examvalue,
      deliverytime,
      informationexame,
    });

    setExamname(initialValues.attributes.examname);
    setExamcode(initialValues.attributes.examcode);
    setExamvalue(initialValues.attributes.examvalue);
    setDeliverytime(initialValues.attributes.deliverytime);
    setInformationexame(initialValues.attributes.informationexame);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ padding: "calc(15px / 2)" }} id="divLabel">
        <label htmlFor="examname-textarea">Nome Exame </label>
        <textarea
          id="examname-textarea"
          name="examname"
          value={examname}
          onChange={(e) => setExamname(e.target.value.toLocaleUpperCase())}
          placeholder="Nome do exame"
          style={{
            width: "300px",
            height: "25px",
            marginLeft: "2.5rem",
          }}
        />
      </div>

      <div style={{ padding: "calc(15px / 2)" }} id="divLabel">
        <label htmlFor="examcode-input">Código do Exame </label>
        <input
          style={{ marginLeft: "0.3rem", width: "300px", height: "27px" }}
          type="number"
          min="0"
          id="examcode-input"
          name="examcode-input"
          value={examcode}
          onChange={(e) => setExamcode(e.target.value)}
          placeholder="Código do exame"
        />
      </div>

      <div style={{ padding: "calc(15px / 2)" }} id="divLabel">
        <label htmlFor="examvalue-input">Valor do Exame </label>
        <input
          style={{ marginLeft: "1.4rem", width: "300px", height: "27px" }}
          type="number"
          id="examvalue-input"
          name="examcode-input"
          value={examvalue}
          onChange={(e) => setExamvalue(e.target.value)}
          placeholder="Valor do exame"
        />
      </div>

      <div style={{ padding: "calc(15px / 2)" }} id="divLabel">
        <label htmlFor="deliverytime-input">Prazo de Entrega </label>
        <input
          style={{ marginLeft: "0.5rem", width: "300px", height: "27px" }}
          type="number"
          min="0"
          id="deliverytime-input"
          name="deliverytime-input"
          value={deliverytime}
          onChange={(e) => setDeliverytime(e.target.value)}
          placeholder="Prazo de entrega"
        />
      </div>
      <br></br>
      <button type="submit">Save</button>
    </form>
  );
}
