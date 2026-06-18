# React Practice Projects

This repository contains interactive, responsive React web applications built to practice core React concepts, hooks, state management, and modern styling.

Both projects are bootstrapped using **Vite** and styled with **Tailwind CSS v4**.

---

## 📂 Projects

### 1. [🎨 BG-Changer](./BG-Changer)
A simple, interactive background color toggler application.
- **Features**:
  - Dynamically changes the screen background color.
  - Floating control toolbar with selection buttons.
- **Available Colors**:
  - Initial/Default: `#D4AF37`
  - Argentinian Blue (`#6CACE4`)
  - Spanish Red (`#E60026`)
  - Brazilian Green (`#009C3B`)
- **React Implementation**:
  - Uses `useState` to track the selected color.
  - Inline style dynamic binding (`style={{ backgroundColor: colour }}`).
- **Key Files**:
  - [App.jsx](./BG-Changer/src/App.jsx) (State and control logic)
  - [index.css](./BG-Changer/src/index.css) (Tailwind setup imports)

---

### 2. [🔑 Password Generator](./Password%20Generator)
A password generation utility with customization parameters.
- **Features**:
  - Password length slider ranging from 8 to 100 characters.
  - Toggle checkbox for adding numbers (`0-9`).
  - Toggle checkbox for adding special characters (`!@#$%^&*()_+=,./<>?;':[]{}`).
  - "Copy" button to save generated password to the clipboard with visual selection feedback.
- **React Implementation**:
  - Uses `useState` for state updates (`length`, `numberAllowed`, `charAllowed`, `password`).
  - Uses `useCallback` to memoize the password generation algorithm.
  - Uses `useEffect` to automatically regenerate a password whenever input parameters update.
  - Uses `useRef` to reference the text input box for programmatic clipboard selection.
- **Key Files**:
  - [App.jsx](./Password%20Generator/src/App.jsx) (Core password generation state and logic)
  - [index.css](./Password%20Generator/src/index.css) (Tailwind setup imports)

---

## 🚀 Getting Started

To run either project locally, navigate to its directory, install dependencies, and run the Vite dev server.

### 1. Choose & Navigate to a Project
For the **BG-Changer**:
```bash
cd BG-Changer
```
For the **Password Generator**:
```bash
cd "Password Generator"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```
