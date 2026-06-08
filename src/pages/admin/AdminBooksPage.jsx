import { useState } from "react";
import { books as initialBooks } from "../../data/books";
import BookForm from "../../components/BookForm";

function AdminBooksPage() {
  const [books, setBooks] = useState(initialBooks);
  const [showForm, setShowForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [message, setMessage] = useState("");

  function showMessage(msg) {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  }

  function handleCreateBook(data) {
    const newBook = { ...data, id: String(Date.now()) };
    setBooks([...books, newBook]);
    setShowForm(false);
    showMessage("Libro creado correctamente");
  }

  function handleUpdateBook(id, data) {
    setBooks(books.map(b => b.id === id ? { ...b, ...data } : b));
    setSelectedBook(null);
    setShowForm(false);
    showMessage("Libro actualizado correctamente");
  }

  function handleDeleteBook(id) {
    if (!confirm("¿Deseas eliminar este libro?")) return;
    setBooks(books.filter(b => b.id !== id));
    showMessage("Libro eliminado correctamente");
  }

  return (
    <main className="page">
      {message && <p className="admin-message">{message}</p>}

      <div className="admin-page-header">
        <h1>Gestionar libros</h1>
        <button onClick={() => { setShowForm(!showForm); setSelectedBook(null); }}>
          {showForm ? "Cerrar formulario" : "+ Nuevo libro"}
        </button>
      </div>

      {showForm && (
        <BookForm
          book={selectedBook}
          onCreateBook={handleCreateBook}
          onUpdateBook={handleUpdateBook}
        />
      )}

      <div className="admin-list">
        {books.map(book => (
          <div key={book.id} className="admin-card">
            <img src={book.image} alt={book.title} />
            <div>
              <h3>{book.title}</h3>
              <p>{book.author} · {book.year}</p>
            </div>
            <div className="admin-actions">
              <button onClick={() => { setSelectedBook(book); setShowForm(true); }}>Editar</button>
              <button onClick={() => handleDeleteBook(book.id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default AdminBooksPage;