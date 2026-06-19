import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase";
import "../../styles/admin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      localStorage.setItem("adminAuth", "true");
      navigate("/admin");
    } catch (error) {
      alert("Invalid admin email or password");
      console.log(error.message);
    } finally {
      setLoading(false);
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
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;