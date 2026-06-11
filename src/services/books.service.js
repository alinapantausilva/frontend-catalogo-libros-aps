const API_URL = "http://localhost:3001/api/books";

export async function getBooks() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function getBookById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export async function createBook(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateBook(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteBook(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
}