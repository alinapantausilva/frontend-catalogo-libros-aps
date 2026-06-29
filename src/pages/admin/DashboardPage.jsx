import { useBooks } from "../../context/BooksContext";
import { Link } from "react-router-dom";

function DashboardPage() {
  const { books } = useBooks();

  return (
    <main className="page">
      <h1>Panel de administración</h1>
      <p>Bienvenido al panel de administración de Bibliocat.</p>

     {  <div className="dashboard-stats">
        <div className="stat-card">
          <h2>{books.length}</h2>
          <p>Libros en el catálogo</p>
        </div>
      </div> }

      <div className="dashboard-nav">
        <Link to="/admin/books">Gestionar libros</Link>
      </div>
    </main>
  );
}

export default DashboardPage;