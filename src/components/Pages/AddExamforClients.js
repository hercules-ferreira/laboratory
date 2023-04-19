import { Search } from "./SearchClient";
import { useState, useEffect } from "react";
import api from "../Services/api";
import "../../App";

export function AddExamforClients() {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState(null);

  useEffect(() => {
    api
      .getAllClients()
      .then((result) => {
        console.log(result);
        setCustomers(result);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div>
        <h2>Add Exam for Clients</h2>
      </div>

      <div>
        <Search />
      </div>
    </div>
  );
}

{
}
