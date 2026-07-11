import { useState } from 'react';

function TaskInput({ onAdd }) {
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("normal");

  const handleAdd = () => {
    if (text.trim() === "") return;
    onAdd({ text: text.trim(), dueDate, priority });
    setText("");
    setDueDate("");
    setPriority("normal");
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && text.trim() !== "") {
            handleAdd();
          }
        }}
        placeholder="Add a new task..."
        className="border p-2 rounded grow min-w-0 outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-2 rounded outline-none"
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 rounded outline-none"
      >
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="high">High</option>
      </select>

      <button
        onClick={handleAdd}
        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
      >
        Add
      </button>
    </div>
  )
}

export default TaskInput;