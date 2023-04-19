import { useNavigate } from "react-router-dom";
import { FormExams } from "../../componentsExams/Pages/FormExams";
import api from "../Services/api";
import { toast } from "react-toastify";

export function NewExam() {
  const navigate = useNavigate();

  const handleSubmit = ({
    examname,
    examcode,
    examvalue,
    deliverytime,
    informationexam,
  }) => {
    api
      .createElement({
        examname,
        examcode,
        examvalue,
        deliverytime,
        informationexam,
      })
      .then((result) => {
        toast.success(
          `The exam ${result.attributes.examname} was created successfully!`
        );

        navigate("/exams/listexams");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Add Exam</h2>
      <FormExams onSubmit={handleSubmit} />
    </div>
  );
}
