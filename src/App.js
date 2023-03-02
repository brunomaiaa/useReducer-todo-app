
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoProvider from './context/TodoContext';


function App() {
  return (
    <div className="App">
      <TodoProvider>
      <h1>To Do App</h1>
      <TodoForm/>
      <TodoList/>

      </TodoProvider>
    </div>
  );
}

export default App;
