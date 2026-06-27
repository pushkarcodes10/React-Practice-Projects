# 🌗 Theme Switcher

An elegant, modern React application demonstrating global dark and light theme switching. It leverages React's built-in **Context API** for global state management and **Tailwind CSS v4**'s utility classes to dynamically adapt the user interface.

---

## 🚀 Features

- **Global Theme Context**: Easily toggle between dark and light modes across all components.
- **Dynamic CSS Theme Variant**: Uses Tailwind CSS v4's class-based dark mode switching by appending `dark` or `light` classes to the DOM `<html>` element.
- **Modern UI Elements**: Includes a customized, animated theme toggler and a responsive product showcase card.
- **Tailored Aesthetics**: Clean typography, elegant borders, shadows, and smooth background transitions.

---

## 🛠️ Tech Stack & Configurations

- **Core Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
  - **Class-Based Dark Mode Configuration**: Tailored variant defined directly in CSS ([index.css](./src/index.css)):
    ```css
    @import "tailwindcss";
    @custom-variant dark (&:where(.dark, .dark *));
    ```

---

## 🧠 React Concepts Demonstrated

### 1. Context API (`createContext` & `useContext`)
Allows the application to share theme states (`themeMode`, `lightTheme`, `darkTheme`) globally without prop-drilling.
- **Context Creator**: [theme.js](./src/contexts/theme.js)
- **Context Provider**: Exposes state updates globally using a simplified `<ThemeProvider>` wrapping layout components in `App.jsx`.

### 2. Custom Hooks
Defines a cleaner component interface by exporting a `useTheme` hook:
```javascript
export default function useTheme() {
    return useContext(ThemeContext);
}
```
Components consume context variables with a single hook invocation: `const { themeMode, lightTheme, darkTheme } = useTheme();`.

### 3. State & Lifecycle Side Effects (`useState` & `useEffect`)
- **`useState`**: Manages the local theme mode state string (`'light'` or `'dark'`).
- **`useEffect`**: Monitors changes in `themeMode` to manipulate the DOM's `html` root node class dynamically:
  ```javascript
  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  ```

---

## 📂 Project Structure

```bash
themeSwitcher/
├── src/
│   ├── components/
│   │   ├── ThemeBtn.jsx    # The custom toggle switch checkbox
│   │   └── Card.jsx        # The responsive product card reacting to theme state
│   ├── contexts/
│   │   └── theme.js        # Context creation, Provider and Custom Hook export
│   ├── App.jsx             # Main container wrapping layout & executing side effects
│   ├── index.css           # Core stylesheet importing Tailwind & defining custom dark variant
│   └── main.jsx            # Application entry point
├── package.json            # Dependencies and scripts configurations
└── vite.config.js          # Vite config bundling tailwindcss and react plugins
```

---

## 💻 Key Components

### 🔄 [ThemeBtn.jsx](./src/components/ThemeBtn.jsx)
A checkbox-based toggle switch styled with custom peers and transitions. It consumes the global theme context to trigger `darkTheme()` or `lightTheme()` on change, while reflecting the state via `checked={themeMode === 'dark'}`.

### 🎴 [Card.jsx](./src/components/Card.jsx)
A clean product card showcasing a professional soccer goalkeeper glove. It dynamically changes its text color, borders, shadows, and card background color using Tailwind's `dark:` variant utilities (e.g., `bg-white dark:bg-gray-800` and `text-gray-900 dark:text-white`).

---

## 🏁 Getting Started

To run this specific project locally:

### 1. Navigate to directory
```bash
cd themeSwitcher
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```
