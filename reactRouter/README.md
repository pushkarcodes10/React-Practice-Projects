# React Router SPA 🌐

A modern Single Page Application (SPA) built using **React 19**, **React Router v7**, and **Tailwind CSS v4**, bundled with **Vite**. This project serves as a comprehensive demonstration of client-side routing concepts, layouts, dynamic routes, and pre-rendering data loaders.

---

## 🚀 Features & Router Concepts

This application illustrates several core concepts of **React Router DOM**:

### 1. Root Layout Pattern (Nested Routing)
* Uses a shared layout defined in [src/Layout.jsx](./src/Layout.jsx).
* The `<Header />` and `<Footer />` remain static while the main content changes dynamically using the `<Outlet />` component.

### 2. Router Configuration
* Declared in [src/main.jsx](./src/main.jsx) using `createBrowserRouter` and `createRoutesFromElements`.
* Demonstrates index routing, path parameterization, wildcard fallback routes (`*`), and data loaders.

### 3. Dynamic Route Matching & Params
* Demonstrates parameter extraction from the URL using the `useParams` hook.
* Visiting `/user/:userid` dynamically extracts and displays the `userid` parameter in the [User component](./src/components/User/User.jsx).

### 4. Fetching Data with Loaders
* The `/github` path showcases the powerful `loader` API in React Router.
* Before the [Github component](./src/components/Github/Github.jsx) renders, React Router pre-fetches user profile data from the GitHub API using `githubInfoLoader`.
* Once fetched, the data is instantly accessible within the component using the `useLoaderData` hook, eliminating standard "loading states" and improving UX.

---

## 🛠️ Tech Stack

* **Frontend Library:** React 19
* **Routing:** React Router v7 (`react-router-dom`)
* **Styling:** Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin)
* **Build Tool:** Vite v8

---

## 📁 Directory Structure

```text
reactRouter/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Logos and graphics
│   ├── components/          # Page components & modular widgets
│   │   ├── About/           # About page
│   │   ├── Contact/         # Contact Form
│   │   ├── Footer/          # Shared Footer component
│   │   ├── Github/          # Github profile loader component
│   │   ├── Header/          # Shared Header with navigation links
│   │   ├── Home/            # Landing page
│   │   └── User/            # Parameterized User Profile view
│   ├── App.css              # Custom styling
│   ├── index.css            # Global CSS containing Tailwind imports
│   ├── Layout.jsx           # Root layout component structuring the page flow
│   └── main.jsx             # Entry point & router configuration
├── eslint.config.js         # Linter configuration
├── index.html               # Main entry HTML
├── package.json             # Scripts & dependencies
└── vite.config.js           # Vite and Tailwind build plugin config
```

---

## ⚙️ How to Get Started

Follow these steps to run the application locally:

### 1. Install Dependencies
Ensure you have Node.js installed, then run:
```bash
npm install
```

### 2. Start the Development Server
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 3. Build for Production
To build the project for optimized production deployment:
```bash
npm run build
```
The build artifacts will be generated in the `/dist` folder.
