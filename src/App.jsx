import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [tasks, setTasks] = useLocalStorage("myTasks", []);

  function handleAdd(taskText) {
    setTasks([...tasks, {id: crypto.randomUUID(), text: taskText, completed: false }]);
  }

  function handleToggle(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl">
        <h1 className="mb-4 text-2xl font-semibold">Todo APP</h1>
        <TaskInput onAdd={handleAdd} />
        <TaskList 
          tasks={tasks} 
          onToggle={handleToggle} 
          onDelete={handleDelete} 
        />
      </div>
    </div>
  );
}

export default App;