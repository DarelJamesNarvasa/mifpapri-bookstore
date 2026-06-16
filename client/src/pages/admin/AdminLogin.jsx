import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/admin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@mifpapri.com" && password === "admin123") {
      localStorage.setItem("adminAuth", "true");
      navigate("/admin");
    } else {
      alert("Invalid admin email or password");
    }
  };

  return (
    <div className="admin-login-page">
      <form className="admin-login-card" onSubmit={handleLogin}>
        <h1>Admin Login</h1>
        <p>Login to manage MifPaPri bookstore.</p>

        <label>Email</label>
        <input
          type="email"
          placeholder="admin@mifpapri.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="admin123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;