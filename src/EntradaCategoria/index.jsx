
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { useState } from "react";
import { TextField,Button } from "@mui/material";

export default function EntradaCategorias() {
  const [name, SetName] = useState("");
//aq é uma funcao de post que se conecta com o backEnd e cria uma categoria
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
      alert(textResult);
      window.location.reload()

    } catch (error) {
      alert(error);
    }
  }
//Aq pra baixo é a view
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TextField
        id="outlined-basic"
        label="Novo Topico"
        variant="outlined"
        fullWidth
        onChange={(e) => {
          SetName(e.target.value);
          }} 
      />
      <Button variant="contained" onClick={() => { postCategoria();}}>
        Criar
      </Button>
    </div>
  );
}



