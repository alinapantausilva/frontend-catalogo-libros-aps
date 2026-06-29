import { createContext, useContext, useState, useEffect } from "react";
import { getBooks } from "../services/books.service";

const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(data => setBooks(data));
  }, []);

  return (
    <BooksContext.Provider value={{ books }}>
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  return useContext(BooksContext);
}