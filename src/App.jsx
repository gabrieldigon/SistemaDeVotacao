import { useEffect, useState } from "react";
import "./App.css";
import { useLocation } from "react-router-dom";
import ListagemProdutos from "./ListProdutos";
import EntradaCategorias from "./EntradaCategoria";
import EntradaProdutos from "./EntradaProduto";

//https://dontpad.com/aulareactuea

function App() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  const [email, setEmail] = useState("");
  const location = useLocation();

  useEffect(() => {
    Init();
    setEmail(location.state.email);
  }, []);

  async function Init() {
    const responseProdutos = await fetch("http://localhost:8080/api/products");
    setProdutos(await responseProdutos.json());

    const responseCategorias = await fetch(
      "http://localhost:8080/api/categories"
    );

    setCategorias(await responseCategorias.json());
  }

  return (
    <div className="App">
      <h5>Bem Vindo {email}</h5>

      <EntradaCategorias />
{/* aq eu basicamente escondi o campo de input do produto */}
      {/* {categorias.length > 0 ? (
        <EntradaProdutos categorias={categorias} />
      ) : (
        "Loading..."
      )} */}

      <ListagemProdutos categorias={categorias} />
      {/* isso aq retorna produtos,preciso de uma que retorna catergorias */}
    </div>
  );
}

export default App;
