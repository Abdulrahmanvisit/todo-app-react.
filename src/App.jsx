import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [tasks, setTasks] = useLocalStorage("myTasks", []);

  function handleAdd(taskText) {
    setTasks([...tasks, { text: taskText, completed: false }]);
  }

  function handleToggle(index) {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function handleDelete(index) {
    setTasks(tasks.filter((task, i) => i !== index));
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