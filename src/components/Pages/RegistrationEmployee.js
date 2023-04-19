import "../../App";
import Input from "antd/es/input/Input";
import { NavLink } from "react-router-dom";
import Link from "next/link";
import { Button } from "antd";
import { ButtonStyle } from "../ui/Button";
import Style from "../../components/Style/home.module.css";
export function RegistrationEmployee() {
  return (
    <>
      <container>
        <div>
          <div className="App">
            <form>
              <div>
                <h1
                  style={{
                    color: "#8A8A8A",
                    marginTop: "10%",
                  }}
                >
                  Cadastre-se!
                </h1>

                <Input
                  style={{ margin: "1px" }}
                  placeholder="Digite seu nome!"
                  type="text"
                />
                <Input
                  style={{ margin: "1px" }}
                  placeholder="Digite seu cpf!"
                  type="number"
                />

                <Input
                  style={{ margin: "1px" }}
                  placeholder="Cadastre seu melhor email!"
                  type="text"
                />
                <Input placeholder="Cadastre sua senha!" type="password" />

                <button style={{ marginTop: "30px" }} type="submit">
                  Cadastrar
                </button>

                <div>
                  <NavLink style={{ color: "#8A8A8A" }} to="/">
                    Já possui login? Clique aqui!
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </container>
    </>
  );
}
