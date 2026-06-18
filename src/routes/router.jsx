import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import BookDetailPage from "../pages/BookDetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/admin/DashboardPage";
import AdminBooksPage from "../pages/admin/AdminBooksPage";
import AdminLayout from "../layouts/AdminLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "book/:id", element: <BookDetailPage /> },
      { path: "login", element: <LoginPage /> },
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