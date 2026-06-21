# 💱 Currency Converter

An interactive, real-time currency conversion application built with **React**, **Vite**, and styled using **Tailwind CSS v4**. This application retrieves live exchange rates dynamically using a public currency API to ensure precise conversions.

---

## ✨ Features

- **Live Exchange Rates**: Dynamically fetches the latest currency rates via a public API.
- **Swappable Currency Fields**: Effortlessly swap the 'From' and 'To' currencies and their corresponding conversion values with a single click.
- **Accessible Inputs**: Form fields integrated with React's `useId` hook for optimal accessibility (A11y).
- **Responsive Glassmorphism UI**: Beautiful, interactive card layout featuring dynamic background images, backdrop filters, and smooth micro-animations.
- **Dynamic List Filtering**: Currency options are loaded on-the-fly depending on availability in the API.

---

## 🛠️ Tech Stack & Concepts

- **Frontend**: React (Functional Components)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **API Integration**: Native `fetch` with React hooks
- **React Hooks Utilized**:
  - `useState` for managing input/output amounts and selected currencies.
  - `useEffect` inside a custom hook to automatically fetch updated currency mappings when dependencies change.
  - `useId` to assign unique, accessible IDs to form controls.

---

## 📂 Project Architecture

```text
Currency Converter/
├── src/
│   ├── components/
│   │   ├── InputBox.jsx       # Reusable input box component
│   │   └── index.js           # Export manager for components
│   ├── hooks/
│   │   └── useCurrencyInfo.js # Custom hook fetching live API data
│   ├── App.jsx                # Core layout and currency logic
│   ├── index.css              # Tailwind CSS imports & global styles
│   └── main.jsx               # Application entry point
├── package.json
└── README.md
```

### Key Modules Explained

#### 1. Custom Hook: `useCurrencyInfo`
A reusable React hook designed to fetch live conversion rates for a specified currency:
```javascript
// src/hooks/useCurrencyInfo.js
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency]);
    return data;
}
```

#### 2. Reusable Component: `InputBox`
A generic input field wrapper component handling label, selection, amount changes, and status attributes (`disabled`). It utilizes React's `useId` for screen-reader compatibility.

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### 1. Clone & Navigate to the Project
```bash
git clone <your-repo-url>
cd "React-Practice-Projects/Currency Converter"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The application will run locally at `http://localhost:5173`.

### 4. Build for Production
```bash
npm run build
```

---

## 🌐 API Reference
This project utilizes the [Currency API by Fawaz Ahmed](https://github.com/fawazahmed0/currency-api) for reliable and updated exchange rates:
- Endpoint: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json`
