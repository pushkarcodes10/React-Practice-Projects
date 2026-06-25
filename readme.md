# React Practice Projects

This repository contains interactive, responsive React web applications built to practice core React concepts, hooks, state management, and modern styling.

All projects are bootstrapped using **Vite** and styled with **Tailwind CSS v4**.

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

### 3. [💱 Currency Converter](./Currency%20Converter)
A real-time currency conversion tool fetching live exchange rates.
- **Features**:
  - Fetches real-time exchange rates via a public currency API.
  - Swappable input values and currencies.
  - Dropdown options dynamically populated from the API.
  - Glassmorphic UI container with background blur.
- **React Implementation**:
  - Uses a custom React Hook (`useCurrencyInfo`) to handle currency data fetching with `useEffect` and dependency tracking.
  - Employs reusable UI components (`InputBox`) using the `useId` hook for accessible input bindings.
  - Communicates changes back to the parent component using state handlers.
- **Key Files**:
  - [App.jsx](./Currency%20Converter/src/App.jsx) (Main converter layout, swap, and convert operations)
  - [InputBox.jsx](./Currency%20Converter/src/components/InputBox.jsx) (Reusable input selection component)
  - [useCurrencyInfo.js](./Currency%20Converter/src/hooks/useCurrencyInfo.js) (Custom data fetch hook)

---

### 4. [🛣️ React Router](./reactRouter)
A multi-page React application demonstrating advanced SPA client-side routing concepts and optimization.
- **Features**:
  - Dynamic client-side navigation using a sticky Header layout.
  - Profile card displaying fetched live data from the GitHub API.
  - Dynamically resolved routing paths showing dynamic route values (e.g., custom user ID).
- **React Implementation**:
  - Employs `createBrowserRouter` and `createRoutesFromElements` to define clear routing structures.
  - Employs layout nesting with `<Header />`, `<Outlet />`, and `<Footer />` components.
  - Implements custom `loader` API in React Router (`githubInfoLoader`) to fetch profile data in parallel during route transitions, caching it with `useLoaderData` to improve performance.
  - Uses `useParams` hook to handle dynamic URL query routing values.
  - Leverages custom `NavLink` isActive states to highlight the active menu item dynamically.
- **Key Files**:
  - [main.jsx](./reactRouter/src/main.jsx) (Router tree definition and initialization)
  - [Layout.jsx](./reactRouter/src/Layout.jsx) (Parent container defining standard page structure using Outlet)
  - [User.jsx](./reactRouter/src/components/User/User.jsx) (Demonstrates dynamic param routing)
  - [Github.jsx](./reactRouter/src/components/Github/Github.jsx) (Optimized loader data fetching implementation)


---

## 🚀 Getting Started

To run any project locally, navigate to its directory, install dependencies, and run the Vite dev server.

### 1. Choose & Navigate to a Project
For the **BG-Changer**:
```bash
cd BG-Changer
```
For the **Password Generator**:
```bash
cd "Password Generator"
```
For the **Currency Converter**:
```bash
cd "Currency Converter"
```
For the **React Router**:
```bash
cd reactRouter
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
