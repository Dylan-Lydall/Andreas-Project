import { Link } from "react-router-dom";
import "../css/signup.css";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password, surname);
  };

  return (
    <main>
      <form className="signup-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Surname"
          required
          onChange={(e) => setSurname(e.target.value)}
          value={surname}
        />
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
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <button type="submit">Create Account</button>
      </form>
    </main>
  );
};
export default Signup;
