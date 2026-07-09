# Todo App

A todo list app built with React, Vite, and Tailwind CSS — my first React project, put together to get comfortable with state, components, and persisting data in the browser.

## Features

- Add new todos
- Mark todos as complete or incomplete
- Delete todos
- Todos stick around after a page refresh, thanks to a custom `useLocalStorage` hook

## Tech stack

- React
- Vite
- Tailwind CSS
- JavaScript

## Project structure

src/
├── components/
│   ├── TaskInput.jsx   # the input field and add button
│   ├── TaskItem.jsx    # a single todo row: checkbox, text, delete button
│   └── TaskList.jsx    # renders the full list of TaskItem components
├── hooks/
│   └── useLocalStorage  # custom hook that syncs state with localStorage
├── App.jsx              # main component, holds the shared todos state
├── App.css
├── index.css
└── main.jsx

## Getting started

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/todo-app-react.git
cd todo-app-react
npm install
```

Start the dev server:

```bash
npm run dev
```

Then open the URL shown in your terminal, usually `http://localhost:5173`.

## What I learned

Building this taught me a lot as someone just getting started with React:

- How `useState` works, and how to think about "what data actually changes" before writing any UI
- How to break a page into smaller components (`TaskInput`, `TaskItem`, `TaskList`) and pass data and functions between them with props
- Why state updates in React need to be immutable — using the spread operator, `.map()`, and `.filter()` instead of directly changing an array
- How to write a custom hook (`useLocalStorage`) so I wasn't repeating the same `useEffect` and `localStorage` logic everywhere
- Styling with Tailwind CSS directly in JSX using utility classes, instead of writing separate CSS files

## Future improvements

- Let users edit an existing todo instead of only adding or deleting
- Add filters to view all, active, or completed todos
- Add due dates or priority tags to todos

## Author

Built by me while learning React — feedback and suggestions are always welcome.