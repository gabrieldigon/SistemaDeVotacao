import { useEffect, useState } from "react";
import "./App.css";
import { useLocation } from "react-router-dom";
import ListagemProdutos from "./ListProdutos";
import EntradaCategorias from "./EntradaCategoria";
import EntradaProdutos from "./EntradaProduto";

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
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", color: "#333", fontWeight: "bold" }}>Vote your word</h1>
        <p style={{ fontSize: "18px", color: "#888" }}>
          Vote your word permite que você escolha uma palavra e vote nela quantas vezes desejar para que ao fim do dia a sua palavra seja a grande campeã.
        </p>
      </div>
      <EntradaCategorias />
      <ListagemProdutos categorias={categorias} />
    </div>
  );
}

export default App;
