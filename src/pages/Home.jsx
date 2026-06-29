import { useState } from "react";
import { useBooks } from "../context/BooksContext";
import BookCard from "../components/BookCard";
import BookFilters from "../components/BookFilters";

function Home() {
  const { books } = useBooks();
  const [filters, setFilters] = useState({ search: "", genre: "", year: "" });

  const genres = [...new Set(books.map(b => b.genre))].sort();
  const years = [...new Set(books.map(b => b.year))].sort((a, b) => b - a);

  const filtered = books.filter(b => {
    const matchSearch =
      b.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      b.author.toLowerCase().includes(filters.search.toLowerCase());
    const matchGenre = filters.genre ? b.genre === filters.genre : true;
    const matchYear = filters.year ? b.year === Number(filters.year) : true;
    return matchSearch && matchGenre && matchYear;
  });

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
          <BookFilters
            filters={filters}
            onChange={setFilters}
            genres={genres}
            years={years}
          />
          {filtered.length === 0 ? (
            <p className="no-results">No hay libros que coincidan con tu búsqueda.</p>
          ) : (
            <div className="book-list">
              {filtered.map(book => (
                <BookCard key={book._id} book={book} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;