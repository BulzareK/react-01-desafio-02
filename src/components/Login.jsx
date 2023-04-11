import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

//export default ({ setMessage }) => {
const Login = ({ setMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnsubmit = (evento) => {
    evento.preventDefault();
    if (email === "bulzarek@gmail.com" && password === "qwerty") {
      setMessage({
        mensaje: "Bienvenid@ nuevamente!!!",
        status: "success",
      });
    } else {
      setMessage({
        mensaje: "Datos incorrectos, intenta de nuevo.",
        status: "danger",
      });
    }

    setEmail("");
    setPassword("");
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">INGRESA TUS CREDENCIALES</h2>
      <form action="" onSubmit={handleOnsubmit} className="w-50 mx-auto">
        <div className="mb-3">
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="ejemplo@email.com"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Contraseña</label>
          <br />
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="contraseña"
            value={password}
            onChange={(evento) => setPassword(evento.target.value)}
          />
        </div>
        <div className="mb-3">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={
              email.trim() === "" || password.trim() === "" ? true : false
            }
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </Container>
  );
};

export default Login;
