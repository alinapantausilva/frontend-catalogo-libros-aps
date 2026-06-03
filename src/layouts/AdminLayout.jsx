import { Outlet, Link } from "react-router-dom";

function AdminLayout() {
  return (
    <>
      <header className="site-header">
        <div className="header-content container">
          <Link to="/">📚 Bibliocat</Link>
          <nav>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/books">Libros</Link>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default AdminLayout;