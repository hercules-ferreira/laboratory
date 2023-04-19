import { FormExams } from "../../componentsExams/Pages/FormExams";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../Services/api";
import { toast } from "react-toastify";

export function EditExams() {
  const [exam, setExam] = useState(null);
  const { examId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .getOneElement(examId)
      .then((result) => {
        setExam(result);
      })
      .catch((error) => console.log(error));
  }, [examId]);

  const handleSubmit = (newExam) => {
    api
      .editElement(examId, newExam)
      .then((result) => {
        console.log(result);

        toast.success(`The exam ${result.attributes.examname} was Edited!`);

        navigate(`/exams/${examId}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        <h2>Edit Exam</h2>

        {exam ? (
          <FormExams onSubmit={handleSubmit} initialValues={exam} />
        ) : (
          <p>Loading Information...</p>
        )}
      </div>
    </div>
  );
}
