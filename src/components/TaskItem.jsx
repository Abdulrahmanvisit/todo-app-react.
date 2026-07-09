function TaskItem({task, onToggle, onDelete}) {
  return (
        <li className="flex item-center justify-between px-4 py-3 mb-4 bg-slate-50">
            <span
            onClick={onToggle}
            className={`cursor-pointer grow ${task.completed ? "line-through text-slate-400" : "text-slate-800"}`}>{task.text}</span>
             <button
        onClick={(e) => {
            e.stopPropagation();
            onDelete();
        }}

        className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 text-sm font-medium ml-4"
        
        >
         Delete
            </button> 
        </li>
  )
}

export default TaskItem