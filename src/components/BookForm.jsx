import { useState, useEffect } from "react";

const initialForm = {
  title: "",
  author: "",
  genre: "",
  year: "",
  pages: "",
  description: "",
  image: "",
};

function BookForm({ onCreateBook, onUpdateBook, book }) {
  const [form, setForm] = useState(initialForm);

  const isEditing = Boolean(book);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.title.trim()) { alert("Ingresa el título"); return; }
    if (!form.author.trim()) { alert("Ingresa el autor"); return; }
    if (!form.genre.trim()) { alert("Ingresa el género"); return; }
    if (!form.year) { alert("Ingresa el año"); return; }

    if (isEditing) {
      onUpdateBook(book.id, form);
    } else {
      onCreateBook(form);
    }

    setForm(initialForm);
  }

  useEffect(() => {
    if (book) setForm({ ...initialForm, ...book });
  }, [book]);

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <h2>{isEditing ? "Editar libro" : "Nuevo libro"}</h2>

      <div className="form-group">
        <label>Título</label>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Ej. Cien años de soledad" />
      </div>

      <div className="form-group">
        <label>Autor</label>
        <input name="author" value={form.author} onChange={handleChange} placeholder="Ej. Gabriel García Márquez" />
      </div>

      <div className="form-group">
        <label>Género</label>
        <input name="genre" value={form.genre} onChange={handleChange} placeholder="Ej. Realismo mágico" />
      </div>

      <div className="form-group">
        <label>Año</label>
        <input name="year" type="text" value={form.year} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Páginas</label>
        <input name="pages" type="text" value={form.pages} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>Imagen (URL)</label>
        <input name="image" value={form.image} onChange={handleChange} placeholder="https://..." />
      </div>

      <div className="form-group">
        <label>Descripción</label>
        <textarea name="description" value={form.description} onChange={handleChange} />
      </div>

      <button type="submit">
        {isEditing ? "Actualizar libro" : "Guardar libro"}
      </button>
    </form>
  );
}

export default BookForm;