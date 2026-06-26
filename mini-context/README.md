# React Context API Mini Demonstration 🌐

A simple, lightweight application demonstrating **React 19**'s built-in **Context API** for global state management, bundled with **Vite**. This project showcases how to share state across components (such as login details and profile views) without resorting to "prop drilling".

---

## 🚀 Features & React Concepts

This project illustrates the fundamentals of client-side state management using React Context:

### 1. State Sharing Without Prop Drilling
* Instead of passing user authentication state down manually through multiple component layers, the data is stored in a central context store and accessed directly by child components.

### 2. Context Initialization
* Created using `React.createContext()` in [`src/context/UserContext.js`](file:///c:/Users/Pushkar%20Raj/Desktop/Practice-Codes/Practice-Projects/React-Projs/mini-context/src/context/UserContext.js).

### 3. Context Provider implementation
* Implemented in [`src/context/UserContextProvider.jsx`](file:///c:/Users/Pushkar%20Raj/Desktop/Practice-Codes/Practice-Projects/React-Projs/mini-context/src/context/UserContextProvider.jsx).
* Wraps the application tree with `UserContext.Provider` and exposes a dynamic `user` state and its corresponding updater function `setUser`.

### 4. Context Consuming (useContext Hook)
* **Login Component**: Uses the context's `setUser` function to update credentials on form submission.
* **Profile Component**: Hooks into `user` to conditionally display user information ("Profile : {username}") or a fallback "Not logged in" message.

---

## 🛠️ Tech Stack

* **Frontend Library:** React 19
* **State Management:** React Context API (`useContext`)
* **Build Tool:** Vite v8
* **Styling:** CSS variables & standard layout properties

---

## 📁 Directory Structure

```text
mini-context/
├── src/
│   ├── assets/              # Icons and graphics
│   ├── components/          # Interactive UI Components
│   │   ├── Login.jsx        # Login Form capturing credentials and updating Context
│   │   └── Profile.jsx      # Conditional profile renderer using Context data
│   ├── context/             # Global State Store definitions
│   │   ├── UserContext.js   # Initialization of the React Context object
│   │   └── UserContextProvider.jsx # Provider component wrapping the children node
│   ├── App.css              # Custom styling definitions
│   ├── index.css            # Base global stylesheet
│   ├── App.jsx              # Root element bootstrapping Context & UI layout
│   └── main.jsx             # Entry point parsing the DOM tree
├── eslint.config.js         # Linter configuration
├── index.html               # Main entry HTML
├── package.json             # Scripts & dependencies
└── vite.config.js           # Vite and build settings
```

---

## ⚙️ How to Get Started

Follow these steps to run the application locally:

### 1. Install Dependencies
Navigate to the directory and run:
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
To generate build artifacts:
```bash
npm run build
```
The optimized production bundle will be generated in the `/dist` folder.
