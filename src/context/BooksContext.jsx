import { createContext, useContext, useState } from "react";
import { books as initialBooks } from "../data/books";

const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState(initialBooks);

  return (
    <BooksContext.Provider value={{ books }}>
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  return useContext(BooksContext);
}