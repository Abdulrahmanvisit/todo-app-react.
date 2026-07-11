# Todo App

A todo list app built with React, Vite, and Tailwind CSS. Started as a simple add/delete list and grew into a fuller task manager with editing, filtering, due dates, and priority levels — built step by step while learning React fundamentals.

## Features

- Add tasks with an optional due date and priority level (low, normal, high)
- Edit a task's text in place
- Mark tasks as complete or incomplete
- Delete tasks
- Filter tasks by All, Active, or Completed
- Tasks persist across page refreshes using a custom `useLocalStorage` hook

## Tech stack

- React
- Vite
- Tailwind CSS
- JavaScript

## Project structure
```
src/
├── components/
│   ├── TaskInput.jsx
│   ├── TaskItem.jsx
│   └── TaskList.jsx
├── hooks/
│   └── useLocalStorage
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Getting started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Abdulrahmanvisit/todo-app-react.git
cd todo-app-react
npm install
```

Start the dev server:

```bash
npm run dev
```

Then open the URL shown in your terminal, usually `http://localhost:5173`.

## What I learned

- How to use `useState` to manage data that changes over time, and how to decide what actually needs its own state versus what can be derived
- How to give list items a stable, unique `id` (via `crypto.randomUUID()`) instead of relying on their position in an array — necessary once filtering or reordering is involved
- How to build a reusable custom hook (`useLocalStorage`) so state and persistence logic aren't duplicated across the app
- How to break a UI into small, focused components (`TaskInput`, `TaskItem`, `TaskList`) and pass data and functions down through props, following a consistent pattern for how changes flow back up
- How to update arrays immutably using the spread operator, `.map()`, and `.filter()`, instead of mutating state directly
- How to compute a derived value (the filtered, visible task list) fresh on every render instead of storing it as separate state
- How to debug real issues methodically: reading error messages carefully, checking `git diff` before committing, and isolating changes on a feature branch before merging

## Future improvements

- Sort tasks by due date or priority
- Show a count of remaining active tasks
- Add a "clear all completed" button
- Add basic form validation and feedback (e.g. warn on a past due date)

## Author

Built by me while learning React — feedback and suggestions are always welcome.
