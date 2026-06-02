import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import BookDetailPage from "../pages/BookDetailPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "book/:id", element: <BookDetailPage /> },
    ],
  },
]);