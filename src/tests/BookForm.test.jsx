import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import BookForm from "../components/BookForm";

describe("BookForm", () => {
  test("muestra el formulario para crear un libro", () => {
    render(<BookForm onCreateBook={() => {}} onUpdateBook={() => {}} />);

    expect(screen.getByText("Nuevo libro")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/cien años/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/gabriel/i)).toBeInTheDocument();
    expect(screen.getByText("Guardar libro")).toBeInTheDocument();
  });

  test("permite completar los campos del formulario", () => {
    render(<BookForm onCreateBook={() => {}} onUpdateBook={() => {}} />);

    fireEvent.change(screen.getByPlaceholderText(/cien años/i), {
      target: { value: "El túnel" },
    });
    fireEvent.change(screen.getByPlaceholderText(/gabriel/i), {
      target: { value: "Ernesto Sabato" },
    });

    expect(screen.getByDisplayValue("El túnel")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Ernesto Sabato")).toBeInTheDocument();
  });

  test("muestra los datos del libro al editar", () => {
    const book = {
      _id: "1",
      title: "El túnel",
      author: "Ernesto Sabato",
      genre: "Novela",
      year: 1948,
      pages: 134,
      description: "Una novela existencialista",
      image: "https://example.com/tunel.jpg",
    };

    render(<BookForm book={book} onCreateBook={() => {}} onUpdateBook={() => {}} />);

    expect(screen.getByText("Editar libro")).toBeInTheDocument();
    expect(screen.getByDisplayValue("El túnel")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Ernesto Sabato")).toBeInTheDocument();
  });
});