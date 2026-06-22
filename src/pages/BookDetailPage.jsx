import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBookById } from "../services/books.service";

function BookDetailPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBookById(id)
      .then(data => setBook(data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!book || book.message) return <p>Libro no encontrado</p>;

  return (
    <main className="page">
      <Link to="/">← Volver al catálogo</Link>
      <div className="book-detail">
        <img src={book.image} alt={book.title} />
        <div>
          <span className="badge">{book.genre}</span>
          <h1>{book.title}</h1>
          <p>por {book.author}</p>
          <p>{book.year} · {book.pages} páginas</p>
          <p>{book.description}</p>
        </div>
      </div>
    </main>
  );
}

export default BookDetailPage;