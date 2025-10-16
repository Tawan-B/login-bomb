import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const users = [
    {
      name: "Bruno",
      password: "coxinha123",
      email: "bruno@maisunifacisa.com.br",
      cpf: "111.111.111-11"
    },
    {
      name: "Tawan",
      password: "teste789",
      email: "tawan@maisunifacisa.com.br",
      cpf: "222.222.222-22"
    },
    {
      name: "José",
      password: "ponto456",
      email: "jose@maisunifacisa.com.br",
      cpf: "333.333.333-33"
    }
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const userFound = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      setLoginMessage("Usuário logado com sucesso!");
      setTimeout(() => navigate("/home"), 1000); 
    } else {
      setLoginMessage("Usuário não encontrado");
    }
  };

  return (
    <div id="login-page" className="login-page">
      <div className="login-container">
        <div className="left-container">
          <h1>Sign In To Blast Zone</h1>
          
          <div className="form-container">
            <h5>Or use your e-mail account</h5>
            <form onSubmit={handleLogin}>
              
              <div className="form-group">
                <i className="fas fa-envelope"></i> 
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  id="userEmail"
                  name="userEmail"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="form-group">
                <i className="fas fa-lock"></i> 
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              
              <button className="submit-button" type="submit">Login</button>
            </form>
            
            {loginMessage && 
                <p className={`login-message ${loginMessage.includes('sucesso') ? 'success' : 'error'}`}>
                    {loginMessage}
                </p>
            }
          </div>
        </div>
        
        <div className="right-container">
            <img src='/bombermanLike.gif' alt="Personagem de Pixel Art" className="gif-personagem"/>
            <h1>Go Bomb!</h1>
            <p>Ready to join the Bomber crew? Fill your details and start the adventure!</p>
            <button
                onClick={() => {
                window.location.href = "/register";
                }}
            >
                Sign Up
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
