import { Button } from "reactstrap";
import { useState } from "react";
import { Form, Input } from "reactstrap";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function TryLogin() {
    if (email === "gabriel" && password === "123456") {
      navigate("/home",{ state : { email:email}});
    } else {
      alert("Usuario não existe");
    }
  }
  function isValidInput() {
    if (email.length > 0 && password.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      <Form className="container">
        <h6>Loja</h6>

        <Input
          placeholder="Digite o seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Digite o sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          onClick={() => TryLogin()}
          color={isValidInput() ? "primary" : "secondary"}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}
