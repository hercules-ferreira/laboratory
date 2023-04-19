import { NavLink } from "react-router-dom";
import MyImage from "../image/logo_site.png";

export function Navbar() {
  return (
    <>
      <img
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        src={MyImage}
      />
      <container>
        <nav>
          <div>
            <h1
              style={{
                color: "#8A8A8A",
                fontSize: "50px",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Laboratory
            </h1>
          </div>
          <div>
            <NavLink to="/">
              <button>Home</button>
            </NavLink>
            <NavLink to="/customers">
              <button>List Clients</button>
            </NavLink>
            <NavLink to="/customers/new">
              <button>Add New Client</button>
            </NavLink>
            <NavLink to="/exams/listexams">
              <button>List Exams</button>
            </NavLink>

            <NavLink to="/exams/new">
              <button>Add New Exam</button>
            </NavLink>
            <NavLink to="/exams">
              <button
                style={{
                  backgroundColor: "rgb(255, 215, 0)",
                  color: "#9599",
                }}
              >
                Search Client
              </button>
            </NavLink>
          </div>
        </nav>
      </container>
    </>
  );
}
