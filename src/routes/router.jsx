import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/Home";
import BookDetailPage from "../pages/BookDetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import DashboardPage from "../pages/admin/DashboardPage";
import AdminBooksPage from "../pages/admin/AdminBooksPage";

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
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "books", element: <AdminBooksPage /> },
    ],
  },
]);