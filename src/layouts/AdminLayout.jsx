import { Outlet, Navigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function AdminLayout() {
  const { isAdmin, logout } = useAuth();

  if (!isAdmin) return <Navigate to="/login" replace />;

  return (
    <>
      <header className="site-header">
        <div className="header-content container">
          <Link to="/">📚 Bibliocat</Link>
          <nav>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/books">Libros</Link>
            <button className="logout-btn" onClick={logout}>Cerrar sesión</button>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default AdminLayout;