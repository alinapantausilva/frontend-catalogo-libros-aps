import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  test("muestra los enlaces de navegación", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    expect(screen.getByText("Catálogo")).toBeInTheDocument();
    expect(screen.getByText("Admin")).toBeInTheDocument();
  });
});