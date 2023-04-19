import "../../App";
import Input from "antd/es/input/Input";
import { NavLink } from "react-router-dom";

export function Home() {
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
                  Faça seu login!
                </h1>

                <Input
                  style={{ margin: "1px" }}
                  placeholder="Digite seu email!"
                  type="text"
                />
                <Input placeholder="Digite sua senha!" type="password" />

                <button style={{ marginTop: "30px" }} type="submit">
                  Acessar
                </button>

                <div>
                  <NavLink
                    to="/customers/new/register"
                    style={{ color: "#8A8A8A" }}
                  >
                    Não possui uma conta? Cadastre-se
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
