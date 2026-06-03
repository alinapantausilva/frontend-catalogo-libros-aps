import { useState } from "react";
import { useBooks } from "../context/BooksContext";
import BookCard from "../components/BookCard";

function Home() {
  const { books } = useBooks();
  const [search, setSearch] = useState("");

  const filtered = books.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Catálogo de libros</h1>
          <p>{books.length} libros en la colección</p>
        </div>
      </section>

      <section className="catalog-section">
        <div className="container">
          <input
            className="search-input"
            type="text"
            placeholder="Buscar por título o autor..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="book-list">
            {filtered.map(book => <BookCard key={book.id} book={book} />)}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;