import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../Services/api";

export function ListExams() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getAllElements()
      .then((result) => {
        console.log(result);
        setExams(result);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Exams</h2>
      <br></br>

      <div>
        {loading && <p>Loading Information...</p>}
        {!!exams.length &&
          exams.map((exam) => {
            return (
              <div key={exam.id}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/exams/${exam.id}`}
                >
                  <h2>
                    <h4
                      style={{
                        backgroundColor: "rgb(192, 196, 197)",
                        color: "#9599",
                      }}
                    >
                      Código do Exame: {exam.attributes.examcode}
                    </h4>
                    <h4>Nome: {exam.attributes.examname}</h4>
                    <h6>Valor do Exame: {exam.attributes.examvalue} reais</h6>
                    <h6>
                      Prazo de Entrega: {exam.attributes.deliverytime} dia(s)
                    </h6>
                  </h2>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
