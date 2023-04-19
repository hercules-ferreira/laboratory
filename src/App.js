import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Header/Navbar";
import { Home } from "./components/Pages/Home";
import { Clients } from "./components/Pages/Clients";
import { ClientDetails } from "./components/Pages/ClientDetails";
import { NewClient } from "./components/Pages/NewClient";
import { EditClients } from "./components/Pages/EditClients";
import { ListExams } from "./componentsExams/Pages/ListExams";
import { ExamDetails } from "./componentsExams/Pages/ExamDetails";
import { EditExams } from "./componentsExams/Pages/EditExams";
import { NewExam } from "./componentsExams/Pages/NewExam";
import { AddExamforClients } from "./components/Pages/AddExamforClients";
import { FormEdAddExamClientsStep1 } from "./components/Pages/FormEdAddExamClientsStep1";
import { RegistrationEmployee } from "./components/Pages/RegistrationEmployee";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <container>
      <Navbar />
      <ToastContainer autoClose={5000} />

      <Routes>
        {/* Routes for Clients   */}
        <Route path="/" element={<Home />} />
        <Route path="/customers" element={<Clients />} />
        <Route path="/customers/:customerId" element={<ClientDetails />} />
        <Route path="/customers/new" element={<NewClient />} />
        <Route path="/customers/:customerId/edit" element={<EditClients />} />
        <Route
          path="/exams/:customerId/edit"
          element={<FormEdAddExamClientsStep1 />}
        />
        {/* Routes for Exams   */}
        <Route path="/exams/listexams" element={<ListExams />} />
        <Route path="/exams/:examId" element={<ExamDetails />} />
        <Route path="/exams/new" element={<NewExam />} />

        <Route path="/customerandexams/:examId/edit" element={<EditExams />} />

        {/* Routes for Add Exam for Clients   */}
        <Route path="/exams" element={<AddExamforClients />} />

        <Route
          path="/customers/new/register"
          element={<RegistrationEmployee />}
        />

        {/* to="/customers/new/register" */}
      </Routes>
    </container>
  );
}

export default App;
