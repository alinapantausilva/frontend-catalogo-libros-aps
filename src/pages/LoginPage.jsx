import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const API_URL = `${import.meta.env.VITE_API_URL}/auth/login`;

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
      return;
    }

    login(data.token);
    navigate("/admin");
  }

  return (
    <main className="page">
      <h1>Iniciar sesión</h1>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="admin@bibliocat.com" />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="••••••••" />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}

export default LoginPage;