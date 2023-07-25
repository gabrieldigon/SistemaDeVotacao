//EntradaProdutos/index.jsx
/* eslint-disable react/prop-types */
import { Button, Input } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useState } from "react";

export default function EntradaProdutos({ categorias }) {
  const [categoria, SetCategoria] = useState(categorias[0].name);
  const [description, SetDescription] = useState("");
  const [name, SetName] = useState("");
  const [price, SetPrice] = useState(0);

  async function postProduto() {
    var data = {
      category: categoria,
      name,
      description,
      price: parseFloat(price),
      purchaseDate: new Date().toLocaleDateString("pt-BR"),
    };

    try {
      await fetch("http://localhost:8080/api/products", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Produto cadastrado com sucesso!");
      window.location.reload()
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="linha" style={{ gap: "10px" }}>
      <div className="linha" style={{ alignItems: "center" }}>
        <Input
          placeholder="Nome do Produto"
          onChange={(e) => {
            SetName(e.target.value);
          }}
        />
      </div>

      <div className="linha" style={{ alignItems: "center" }}>
        <Input
          type="number"
          placeholder="Preço"
          onChange={(e) => {
            SetPrice(e.target.value);
          }}
        />
      </div>

      <div className="linha" style={{ alignItems: "center" }}>
        <Input
          type="text"
          placeholder="Descrição"
          onChange={(e) => {
            SetDescription(e.target.value);
          }}
        />
      </div>

      <div className="linha" style={{ alignItems: "center" }}>
        <Input
          type="select"
          placeholder="Categoria"
          onChange={(e) => {
            SetCategoria(e.target.value);
          }}
        >
          {categorias.map((categoria) => {
            return (
              <option key={categoria.name} value={categoria.name}>
                {categoria.name}
              </option>
            );
          })}
        </Input>
      </div>

      <Button
        color="primary"
        onClick={() => {
          postProduto();
        }}
      >
        INSERIR
      </Button>
    </div>
  );
}