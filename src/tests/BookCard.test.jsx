import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookCard from "../components/BookCard";

const book = {
  _id: "1",
  title: "Cien años de soledad",
  author: "Gabriel García Márquez",
  genre: "Realismo mágico",
  year: 1967,
  pages: 471,
  image: "https://example.com/cien-anos.jpg",
};

describe("BookCard", () => {
  test("muestra la información de un libro", () => {
    render(
      <MemoryRouter>
        <BookCard book={book} />
      </MemoryRouter>
    );

    const image = screen.getByAltText("Cien años de soledad");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/cien-anos.jpg");

    expect(screen.getByText(/cien años/i)).toBeInTheDocument();
    expect(screen.getByText("Gabriel García Márquez")).toBeInTheDocument();
    expect(screen.getByText("Realismo mágico")).toBeInTheDocument();
  });
});