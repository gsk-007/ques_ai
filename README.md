# 🧠 Ques_AI

## 🎯 Project Objectives

The primary goals of this project are:

- Implementing secure user authentication and authorization
- Managing user-generated content with robust validation
- Structuring a scalable and maintainable full-stack application
- Implement the UI using the given Design

---

## ✨ Features

- **User Authentication** – Secure sign-up and login functionality using JWT
- **Projects & Podcast** – Users can post, view, and manage projects and podcasts
- **Form Validation** – Ensures data integrity and user input validation
- **Modular Architecture** – Clean separation of concerns between frontend and backend

---

## 🧱 Project Structure

The project is organized into two main directories:

```
ques_ai/
├── backend/       # Backend (Express, MongoDB)
└── frontend/      # Frontend (React, Vite, Tailwind CSS)
```

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, Axios, React Router
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT), bcryptjs
- **State Management**: React Hooks
- **Form Validation**: Joi
- **Development Tools**: Nodemon, ESLint

---

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance (local or cloud-based)

### Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/gsk-007/ques_ai.git
   cd ques_ai
   ```

2. **Install backend dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables in `backend/.env`:**

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLIENT_URL=http://localhost:5173
   ```

4. **Start the backend server:**

   ```bash
   npm run server
   ```

5. **Install frontend dependencies:**

   ```bash
   cd ../frontend
   npm install
   ```

6. **Start the frontend development server:**

   ```bash
   npm run client
   ```

7. **Access the application:**

   Open your browser and navigate to `http://localhost:5173`

---

## 📁 Folder Structure

**Backend (`backend/`):**

- `index.js` – Entry point of the backend server
- `config/` – Defines DB Config
- `controllers/` – Contains route handler functions
- `middleware/` – Custom middleware functions
- `models/` – Mongoose schemas and models
- `routes/` – Defines API routes
- `schemas/` – Joi Schema for validation
- `seeds/` – Seed Default data

**Frontend (`frontend/`):**

- `src/` – Main source code directory
  - `assets/` – Static Assets (Images, Logos)
  - `components/` – Reusable React components
  - `contexts/` – For managing App State
  - `layouts/` – Page Layouts
  - `lib/` – Helper Utilities
  - `pages/` – Page-level components
  - `App.jsx` – Root component
  - `main.jsx` – Entry point of the React application
- `vite.config.js` – Vite configuration

---

## 🔐 Environment Variables

Ensure the following environment variables are set in the `backend/.env` file:

| Variable     | Description                               |
| ------------ | ----------------------------------------- |
| `PORT`       | Port number for the server                |
| `MONGO_URI`  | MongoDB connection string                 |
| `JWT_SECRET` | Secret key for JWT signing                |
| `CLIENT_URL` | Url where frontend application is running |

---

## 📦 Deployment

To deploy the application:

- **Frontend**: Deploy the `frontend` directory using platforms like Vercel or Netlify.
- **Backend**: Deploy the `backend` directory using platforms like Render or Heroku.
- Ensure environment variables are properly configured in the deployment settings.

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.

---
