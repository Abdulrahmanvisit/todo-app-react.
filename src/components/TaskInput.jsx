import  {useState} from 'react';

function TaskInput({onAdd}) {
  const[text, setText] = useState("");

  const handleAdd = () => {
    if(text.trim() === "") return;
    onAdd(text);
    setText("");
  }
  
  return (
    <div className="flex gap-3 mb-6">
      <input
  type="text"
  value={text}
  onChange={(e) => setText(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter' && text.trim() !== "") {
      onAdd(text);
      setText(''); // This clears the input after pressing enter
    }
  }}
  placeholder="Add a new task..."
  className="border p-2 rounded grow min-w-0 : outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
/>

      <button 
      onClick={handleAdd} className="bg-orange-500 hover:bg-orange-500 text-white px-4 py-2 rounded-lg">
        Add
        </button>
    </div>
  )
}

export default TaskInput