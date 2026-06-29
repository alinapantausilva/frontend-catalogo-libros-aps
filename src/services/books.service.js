const API_URL = `${import.meta.env.VITE_API_URL}/books`;

export async function getBooks() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function getBookById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

  export async function createBook(data, token) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function updateBook(id, data, token) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteBook(id, token) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });
  return res.json();
}