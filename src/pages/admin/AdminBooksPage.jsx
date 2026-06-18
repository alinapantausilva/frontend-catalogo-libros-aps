import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { getBooks, createBook, updateBook, deleteBook } from "../../services/books.service";
import BookForm from "../../components/BookForm";

function AdminBooksPage() {
  const { token } = useAuth();
  const [books, setBooks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getBooks().then(data => setBooks(data));
  }, []);

  function showMessage(msg) {
    setMessage(msg);
    setTimeout(() => setMessage(""), 3000);
  }

  async function handleCreateBook(data) {
    const newBook = await createBook(data, token);
    setBooks([...books, newBook]);
    setShowForm(false);
    showMessage("Libro creado correctamente");
  }

  async function handleUpdateBook(id, data) {
    const updated = await updateBook(id, data, token);
    setBooks(books.map(b => b._id === id ? updated : b));
    setSelectedBook(null);
    setShowForm(false);
    showMessage("Libro actualizado correctamente");
  }

  async function handleDeleteBook(id) {
    if (!confirm("¿Deseas eliminar este libro?")) return;
    await deleteBook(id, token);
    setBooks(books.filter(b => b._id !== id));
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
          <div key={book._id} className="admin-card">
            <img src={book.image} alt={book.title} />
            <div>
              <h3>{book.title}</h3>
              <p>{book.author} · {book.year}</p>
            </div>
            <div className="admin-actions">
              <button onClick={() => { setSelectedBook(book); setShowForm(true); }}>Editar</button>
              <button onClick={() => handleDeleteBook(book._id)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default AdminBooksPage;