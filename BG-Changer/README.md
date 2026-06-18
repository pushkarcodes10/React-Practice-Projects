# 🎨 BG-Changer

A simple, interactive, and beautiful background color changer application built with **React 19**, **Vite**, and **Tailwind CSS v4**. It allows users to dynamically toggle between curated national colors with fluid transitions and smooth micro-animations.

---

## ⚡ Features

- **Instant Theme Toggle:** Switch between beautiful, themed colors instantly.
- **Curated Palette:** Includes custom selected theme colors:
  - 🥇 **Fifa Gold:** `#D4AF37`
  - 🇦🇷 **Argentinian Blue:** `#6CACE4`
  - 🇪🇸 **Spanish Red:** `#E60026`
  - 🇧🇷 **Brazilian Green:** `#009C3B`
- **Modern UI:** Built using glassmorphism styling for the toolbar and fully responsive design.
- **Smooth Animations:** Transitions between colors are animated smoothly using Tailwind CSS utilities.

---

## 🛠️ Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Bundler & Dev Server:** [Vite 8](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Environment:** Node.js (ES Modules)

---

## 📁 Project Structure

```text
BG-Changer/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and SVG icons
│   ├── App.css             # Component-specific styles
│   ├── App.jsx             # Main application component & state management
│   ├── index.css           # Tailwind CSS imports & global directives
│   └── main.jsx            # Application entry point
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite configuration with Tailwind CSS v4 plugin
```

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher is recommended).

### Installation

1. **Clone the repository or navigate to the project folder:**
   ```bash
   cd BG-Changer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

---

## 📖 How it Works

The application uses React's state management via the `useState` hook to keep track of the active background color. When a color button in the floating panel is clicked:
1. The `colour` state is updated.
2. The main container re-renders, dynamically applying the updated color inline (`style={{ backgroundColor: colour }}`).
3. The CSS class `duration-200` ensures a smooth 200ms transition between the selected background colors.
