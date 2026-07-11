//Third party import library import
import {useState} from 'react';

//local component and hook import
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import useLocalStorage from './hooks/useLocalStorage';


function App() {
  const [tasks, setTasks] = useLocalStorage("myTasks", []);

  const[filter, setFilter] = useState("all");

  const handleAdd = (newText) => {
    setTasks([...tasks, {id: crypto.randomUUID(), completed: false, ...newText }]);
  };

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

const handleEdit = (id, newText) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    )
  );
};

const visibleTasks = tasks.filter((task) => {
  if (filter === "active") return !task.completed;
  if (filter === "completed") return task.completed;
  return true;
});


  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl">
        <h1 className="mb-4 text-2xl font-semibold">Todo APP</h1>
        <TaskInput onAdd={handleAdd} />

        <div className="flex gap-2 mb-4">
  <button
    onClick={() => setFilter("all")}
    className={`px-3 py-1 rounded text-sm font-medium ${
      filter === "all" ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-600"
    }`}
  >
    All
  </button>
  <button
    onClick={() => setFilter("active")}
    className={`px-3 py-1 rounded text-sm font-medium ${
      filter === "active" ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-600"
    }`}
  >
    Active
  </button>
  <button
    onClick={() => setFilter("completed")}
    className={`px-3 py-1 rounded text-sm font-medium ${
      filter === "completed" ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-600"
    }`}
  >
    Completed
  </button>
</div>
        
        <TaskList 
          tasks={visibleTasks} 
          onToggle={handleToggle} 
          onDelete={handleDelete} 
          onEdit={handleEdit}
        />

      </div>
    </div>
  );
}

export default App;