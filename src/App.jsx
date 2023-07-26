import React, { useEffect, useState } from "react";
import "./App.css";
import { useLocation } from "react-router-dom";
import ListagemProdutos from "./ListProdutos";
import EntradaCategorias from "./EntradaCategoria";
import EntradaProdutos from "./EntradaProduto";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [mostVotedCategory, setMostVotedCategory] = useState(null); // Novo estado para armazenar a categoria mais votada

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

    const responseMostVoted = await fetch(
      "http://localhost:8080/api/categories/most-voted"
    );
    const mostVoted = await responseMostVoted.json();
    setMostVotedCategory(mostVoted); // Atualize o estado com a categoria mais votada
  }

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", color: "#ffffff", fontWeight: "bold" }}>
          Vote your word
        </h1>
        <p style={{ fontSize: "18px", color: "#ffffff" }}>
          Vote your word permite que você escolha uma palavra e vote nela quantas
          vezes desejar para que ao fim do dia a sua palavra seja a grande campeã.
        </p>
      </div>
      {mostVotedCategory && (
        <h1
          style={{
            textAlign: "center",
            color: "#ffffff", // Altera a cor do texto para branco
            marginTop: "40px", // Adiciona espaçamento no topo
            marginBottom: "40px" // Adiciona espaçamento na parte inferior
          }}
        >
          Categoria mais votada: {mostVotedCategory.name}
        </h1>
      )}
      <EntradaCategorias />
      <ListagemProdutos categorias={categorias} />
    </div>
  );
}

export default App;
