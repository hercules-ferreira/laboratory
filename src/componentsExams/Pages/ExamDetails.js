import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../Services/api";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

export function ExamDetails() {
  const [exam, setExam] = useState(null);
  const { examId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.getOneElement(examId).then((result) => {
      setExam(result);
      console.log(result);
    });
  }, [examId]);

  const deleteElement = () => {
    if (window.confirm(`Delete ${exam.attributes.examname} ?`) === true) {
      api
        .removeElement(examId)
        .then(() => {
          toast.warning(
            `The exam ${exam.attributes.examname} was deleted correctly !!!`
          );

          navigate("/exams/listexams");
        })
        .catch((error) => console.log(error));
    }
  };

  return !exam ? (
    <div>Loading Information...</div>
  ) : (
    <div>
      <br></br>
      <h2>
        <h4>Nome: {exam.attributes.examname}</h4>
        <h4 style={{ backgroundColor: "#363F5F", color: "#ffffff" }}>
          Código do Exame: {exam.attributes.examcode}
        </h4>
      </h2>
      <br></br>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>Valor do Exame: </td>
            <td>{exam.attributes.examvalue} reais</td>{" "}
          </tr>
          <tr>
            <td>Prazo de Entrega: </td>
            <td>{exam.attributes.deliverytime} dia(s)</td>{" "}
          </tr>
          <div>
            <br></br>{" "}
          </div>
        </tbody>
      </table>

      <NavLink to={`/customerandexams/${exam.id}/edit`}>
        <button>Edit</button>
      </NavLink>
      <button onClick={deleteElement}>Delete</button>
    </div>
  );
}
