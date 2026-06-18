# 🔑 Password Generator

An interactive, responsive, and secure **Password Generator** web application built with modern web technologies. This utility allows users to dynamically generate strong, customized passwords according to their specific length and character requirements, with a simple one-click copy to clipboard.

---

## 🚀 Features

- **Customizable Length:** Drag the slider to generate passwords from 8 to 100 characters in length.
- **Numbers Inclusion:** Checkbox to easily toggle the inclusion of numeric digits (`0-9`).
- **Special Characters Inclusion:** Checkbox to include special symbols (e.g., `!@#$%^&*()_+=...`) for enhanced security.
- **Real-time Generation:** Dynamically regenerates passwords instantly as you change the length, toggle numbers, or toggle symbols using React's reactive state.
- **Copy to Clipboard:** Copy the generated password instantly to your system clipboard with a single click, featuring interactive selection highlighting.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (using the new `@tailwindcss/vite` compiler plugin)
- **State Management & Hooks:** React Hooks (`useState`, `useCallback`, `useEffect`, `useRef`)

---

## 📂 Project Structure

```text
├── public/                # Static public assets
├── src/
│   ├── assets/            # Project image/icon assets
│   ├── App.css            # Component-specific CSS (empty, utility styling used instead)
│   ├── App.jsx            # Core component containing password generation state and logic
│   ├── index.css          # Global styles importing Tailwind CSS
│   └── main.jsx           # App entry point rendering the React root
├── eslint.config.js       # ESLint configurations
├── index.html             # Application entry HTML page
├── package.json           # Project dependencies and script runner configurations
└── vite.config.js         # Vite configuration including Tailwind plugin
```

---

## 💡 Code Insights

The app leverages React's core performance hooks to ensure smooth user interactions:

- **`useCallback` (Memoization):** Used for the `generatePassword` function to optimize memory usage and prevent unnecessary recreations on every render.
- **`useEffect` (Side Effects):** Automatically triggers the password generation whenever any parameter (`length`, `numberAllowed`, `charAllowed`) updates.
- **`useRef` (DOM Access):** Targets the input element to visually select the generated password when the user clicks **Copy**, providing instant visual feedback.

---

## 📦 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Clone the repository & Navigate
```bash
cd "Password Generator"
```

### 2. Install Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### 3. Run Development Server
Start the local development server:
```bash
npm run dev
```
Open your browser and navigate to the address shown in the terminal (usually `http://localhost:5173`).

### 4. Build for Production
To bundle the application for production deployment:
```bash
npm run build
```

---

## 📄 License
This project is open-source and available under the MIT License.
