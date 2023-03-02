Todo App using useReducer from React
====================================

This is a simple todo app built using React's useReducer hook. The app allows users to add and track their todos.

This project uses the following React concepts:
-----------------


1.  Components: The project is built using multiple functional components, which are reusable and easy to read.

2.  JSX: JSX is used to write HTML-like syntax within JavaScript code. This is used to render the UI of the app.

3.  Props: The parent component (App) passes down props to child components (TodoForm and TodoList) to share data between them.

4.  State: State is used to keep track of the user's input in TodoForm and the todos list in TodoList. useState hook is used to manage state.

5.  useContext Hook: The useContext hook is used to share the application state across all components.

6.  useReducer Hook: The useReducer hook is used to manage the application's state changes through dispatched actions.

7.  Context API: The Context API is used to provide a global state to all components in the app.

8.  Reducers: A reducer function is used to handle dispatched actions in the context's state. It receives the current state and an action, and returns the new state.

9.  CSS: Styling is done using CSS, and the classNames are used to apply these styles to the components.

Overall, the app utilizes React's core concepts to build a simple todo app using the useReducer hook for state management and Context API to share the application state across all components.

Project Structure
-----------------

The project consists of the following files and folders:

-   `App.js`: The main component that renders the todo app.
-   `App.css`: The CSS styles for the App component.
-   `components/`: A folder that contains the TodoForm, TodoList, and Todo components.
-   `context/`: A folder that contains the TodoContext and TodoReducer files.

Author
-------

-   Bruno Maia