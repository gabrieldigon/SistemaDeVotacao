import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useState } from "react";
import { TextField, Button } from "@mui/material";

export default function EntradaCategorias() {
  const [name, setName] = useState("");

  // Função de post que se conecta com o backEnd e cria uma categoria
  async function postCategoria() {
    try {
      const response = await fetch("http://localhost:8080/api/categories", {
        method: "POST",
        body: JSON.stringify({ name: name }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      var textResult = await response.text();
      if (!response.ok) throw Error(textResult);
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  }

  // Estilos personalizados
  const textFieldStyle = {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "& input": {
      color: "white",
    },
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: "#17202A", // Alterando a cor do botão para "#17202A"
    fontWeight: "bold", // Adicionando o negrito (bold) ao botão
    marginLeft: "20px",
  };

  const buttonLabelStyle = {
    color: "#17202A", // Alterando a cor da label para "#17202A"
  };

  // View
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TextField
        sx={textFieldStyle}
        label="Insira sua palavra"
        variant="outlined"
        focused
        style={{ width: "500px" }}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          postCategoria();
        }}
        style={buttonStyle}
      >
        <span style={buttonLabelStyle}>Criar</span>
      </Button>
    </div>
  );
}
