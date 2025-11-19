# 🧩 MEAN Stack Admin Dashboard
Angular Standalone • Tailwind CSS • Node.js • Express • MongoDB

A fully responsive, multipage, performance-optimised MEAN application.


<div align="center">
🌐 Live Demo (Coming Soon)
</div>

## 🚀 Overview

This project is a full-stack MEAN application featuring a modern Angular Standalone frontend styled with Tailwind CSS and a clean, modular Node.js + Express backend powered by MongoDB.

It includes:

- Fully responsive UI

- Light & Dark mode

- Auth system (JWT)

- Dashboard with charts

- Reusable UI components

- Collapsible sidebar

- Dropdown menus

- Tables, forms, search filters

- SEO & performance optimised

- Clean, scalable folder structures

⚠ Note: This project is for learning only.

## 🎯 Features
### 🎨 Frontend (Angular + Tailwind CSS)

✔ Angular Standalone Components

✔ Tailwind CSS + DaisyUI

✔ Multipage Layout Structure

✔ Dark / Light Mode Theme Switching

✔ Responsive Design (100%)

✔ Dropdown Menu Bar

✔ Search Filter Component

✔ Breadcrumb Navigation

✔ Collapsible Sidebar Navigation

✔ Burger / Mobile Navigation

✔ SEO Ready (Meta Tags, Optional SSR)

✔ 404 Not Found Page

✔ Reusable UI Elements (cards, forms, tables, buttons)

### 🔐 Authentication

✔ JWT-based Authentication

✔ Login / Register Pages

✔ Auth Guard + Admin Guard

✔ Persistent User Session

✔ Multiple Sign-in/Sign-up Options (email, OAuth-ready)

### 📊 Dashboard & Data

✔ Dashboard with real-time Charts

✔ Tables with pagination, search, and sort

✔ Forms with validation

✔ Profile & Settings pages

✔ Modular, lazy-loaded routes

### ⚙ Backend (Node.js + Express)

✔ Clean API structure

✔ User auth routes (JWT)

✔ Mongoose models

✔ Secure middleware (helmet, CORS, rate limiting)

✔ Centralised error handling

✔ Swagger-ready documentation folder

### 🧰 Developer Experience

✔ Formatted & clean codebase

✔ ESLint + Prettier

✔ Reusable components & services

✔ Scalable architecture

✔ Page-speed optimised using:

  - Lazy loading

  - JIT Tailwind

  - Code splitting

  - API caching

## 🛠 Tech Stack
Frontend

- Angular (Standalone)

- Tailwind CSS

- RxJS

- Chart.js / ApexCharts

- Angular Animations

Backend

- Node.js

- Express.js

- MongoDB + Mongoose

Tools

- TypeScript

- Postman

- Docker (Optional)

## 📁 Project Structure
```
project-root/
│── frontend/    → Angular Frontend
│── backend/    → Node Backend
│── README.md
│── docker-compose.yml (optional)
│── package.json (monorepo scripts optional)
```
Angular Frontend Structure
```
frontend/
└── src/
    ├── app/
    │   ├── core/
    │   │   ├── guards/
    │   │   ├── services/
    │   │   ├── layout/
    │   │   ├── interceptors/
    │   │   └── helpers/
    │   ├── shared/
    │   │   ├── components/
    │   │   ├── directives/
    │   │   ├── pipes/
    │   │   └── ui/
    │   ├── auth/
    │   ├── pages/
    │   │   ├── dashboard/
    │   │   ├── users/
    │   │   ├── tables/
    │   │   ├── charts/
    │   │   ├── settings/
    │   │   └── not-found/
    │   └── app.routes.ts
```
Node.js Backend Structure
```
backend/
└── src/
    ├── config/
    ├── controllers/
    ├── middleware/
    ├── models/
    ├── routes/
    ├── services/
    ├── utils/
    ├── docs/
    └── tests/
```

## ⚙️ Installation
Clone the repository
```
git clone https://github.com/sachinksamad1/tailadmin.git
cd tailadmin
```
### 📦 Frontend Setup
```
cd cfrontend
npm install
npm start
```

Runs the Angular app on
➡ `http://localhost:4200`

### 🗄 Backend Setup
```
cd server
npm install
npm run dev
```

Runs the API server on
➡ `http://localhost:5000`

### 🔗 Environment Variables
Backend (`backend/.env`)
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-db
JWT_SECRET=your-secret-key
```

Frontend (`frontend/src/environments/environment.ts`)
apiUrl: `'http://localhost:5000/api'`

### 🚀 Build for Production
Angular
```
cd client
npm run build
```

Node.js
```
cd server
npm run build
npm start
```

### 🧪 Testing
```
npm test
```

### 🐳 Docker Support (Optional)
```
docker-compose up --build
```

📘 Screenshots (Coming Soon)

| Dashboard |	Login |	Tables |
| :-: | :-: | :-: |
| -- | -- | -- |
	
	
## 🤝 Contributing

Contributions are welcome!

1. Fork the repo

2. Create a new branch

3. Commit changes

4. Open a pull request

## 📄 License

MIT [License](LICENSE) © 2025
