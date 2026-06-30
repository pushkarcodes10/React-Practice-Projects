# 📝 Todo Manager (Context API & LocalStorage)

A clean, responsive, and interactive Todo management application built in React using Vite. This project demonstrates state persistence, context-based state management, dynamic UI rendering, and custom hooks.

---

## 🚀 Features

- **Add New Tasks**: Quickly create tasks with the interactive input form.
- **Inline Editing**: Double-state coordination allowing you to toggle edit mode (`isTodoEditable`) and update task descriptions inline.
- **Complete/Incomplete Toggle**: Check tasks off as completed with status-based dynamic coloring and styling.
- **Delete Tasks**: Remove tasks instantly from the listing.
- **Session Persistence**: Integrates with the browser's `localStorage` to automatically preserve lists across browser sessions and reloads.

---

## 🛠️ React & Architecture Details

- **Global Context API**: Implements `TodoContext` and `TodoProvider` to distribute task list values and state modifiers (`addTodo`, `updateTodo`, `deleteTodo`, `toggleComplete`) to nested consumer components without prop drilling.
- **Custom Context Hook**: Exposes the custom hook `useTodo()` to streamline context consumption inside child views.
- **Immutable State Modifiers**: Uses functional state updates inside `useState` along with non-mutating array operations (`map`, `filter`, and spread operators) to manage state transitions cleanly.
- **LocalStorage Sync Side-Effects**: Configures multiple `useEffect` triggers:
  - An initial effect to load data when the application mounts.
  - A reactive effect that serializes the `todos` array state to JSON strings and saves it whenever the state updates.

---

## 📂 Key Files

- [App.jsx](./src/App.jsx): The application controller housing primary task state, LocalStorage side-effects, layout styling, and context wrapping.
- [TodoContext.js](./src/contexts/TodoContext.js): Defines context properties, stubs, provider components, and the custom hook wrapper `useTodo`.
- [TodoForm.jsx](./src/components/TodoForm.jsx): Handles task description submission, local input validation, and context additions.
- [TodoItem.jsx](./src/components/TodoItem.jsx): Represents a single todo record, managing its own edit state and syncing updates with parent structures.
- [index.js](./src/components/index.js) / [index.js](./src/contexts/index.js): Barrel files that optimize and cleaner import syntax.
