import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <Link to={`/book/${book.id}`} className="book-card">
      <img src={book.image} alt={book.title} />
      <div className="book-body">
        <span className="badge">{book.genre}</span>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.year} · {book.pages} páginas</p>
      </div>
    </Link>
  );
}

export default BookCard;