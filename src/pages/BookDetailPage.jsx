import { useParams, Link } from "react-router-dom";
import { books } from "../data/books";

function BookDetailPage() {
  const { id } = useParams();
  const book = books.find(b => b.id === id);

  if (!book) return <p>Libro no encontrado</p>;

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