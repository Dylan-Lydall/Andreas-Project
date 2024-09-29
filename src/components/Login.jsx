import { useState } from "react";
import "../css/login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <main>
      <form className="login-container" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <p>
          Dont have an account yet? <Link to="/signup">Sign Up</Link>
        </p>
        <button type="submit">Login</button>
      </form>
    </main>
  );
};
export default Login;
