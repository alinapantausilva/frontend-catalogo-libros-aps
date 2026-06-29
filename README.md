# Catálogo de Libros Frontend

Aplicación web desarrollada con React para consultar, buscar y administrar libros consumiendo una API REST.

## Características

- Listado de libros
- Filtros por título, autor, género y año en tiempo real
- Vista de detalle de cada libro
- Panel de administración
- Crear libros
- Editar libros
- Eliminar libros
- Inicio de sesión con JWT
- Rutas protegidas mediante autenticación
- Testing básico con Vitest

---

## 🛠 Tecnologías utilizadas

- React
- Vite
- React Router DOM
- Context API
- Fetch API
- Vitest
- Testing Library

---

## Instalación

Clonar el repositorio:

```bash
git clone <url-del-repositorio>
```

Ingresar al proyecto:

```bash
cd frontend-catalogo-libros-aps
```

Instalar dependencias:

```bash
npm install
```

---

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto utilizando como referencia el archivo `.env.example`.

### .env.example

```env
VITE_API_URL=
```

### Ejemplo local

```env
VITE_API_URL=http://localhost:3000/api
```

### Ejemplo producción

```env
VITE_API_URL=https://mi-api.onrender.com/api
```

---

## Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```txt
http://localhost:5173
```

---

## Ejecutar tests

```bash
npm test
```

## vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
})
```

---

## Generar build de producción

```bash
npm run build
```

Los archivos generados se encontrarán en:

```txt
dist/
```

---

## Backend

Este proyecto consume una API REST desarrollada con:

- Node.js
- Express
- MongoDB Atlas
- JWT

La URL del backend se configura mediante:

```env
VITE_API_URL
```

---

## Estructura del proyecto

```txt
public/
│
└── books/          ← imágenes locales de los libros

src/
│
├── components/
├── context/
├── pages/
│   └── admin/
├── services/
├── tests/
│
├── App.jsx
└── main.jsx
```

---

## Autenticación

La aplicación utiliza JWT. Al iniciar sesión se almacena el token en el Local Storage del navegador. Las rutas del panel de administración y las operaciones de creación, edición y eliminación requieren que el token sea enviado en el header `Authorization`.

---

## Autor

Proyecto desarrollado como práctica del curso Full Stack de Neoland.

Autor: Alina Pantau Silvasan
