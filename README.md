![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)

# Cardio360

Full-stack starter with a React frontend (port 3000) that fetches status from an Express backend (port 5000). The frontend polls `/api/status` to confirm the backend is reachable.

## Running locally (PowerShell)

Open two PowerShell tabs or panes. Run each block in its respective folder:

1. Frontend
   ```powershell
   cd frontend/my-app
   npm install
   npm start
   ```
   Vite will serve the React UI on `http://localhost:3000`.

2. Backend
   ```powershell
   cd backend
   npm install
   npm run dev
   ```
   The Express API listens on `http://localhost:5000`, and the UI hits `/api/status`.

## API

- `GET /api/status` — returns a small JSON payload while the backend is healthy.

## Notes

- The frontend's `npm start` and `npm run dev` scripts force Vite to use port 3000 so it matches the requested stack.
- The backend uses modern ES modules (`"type": "module"`) and `nodemon` for hot reload during development.