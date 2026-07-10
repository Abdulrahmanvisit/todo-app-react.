import { useState } from "react";

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(task.text);

  const saveEdit = () => {
    if (draft.trim() === "") return;
    onEdit(draft.trim());
    setIsEditing(false);
  }

  return (
    <li className="flex item-center justify-between px-4 py-3 mb-4 bg-slate-50">
      {/* ── Ternary start: switches between edit mode and display mode ── */}
      {isEditing ? (
        // ── "true" branch: shown when isEditing is true ──
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          autoFocus
          onKeyDown={(e) => e.key === "Enter" && saveEdit()}
          className="border p-1 rounded grow min-w-0 mr-4"
        />
        // ── end of "true" branch ──
      ) : (
        // ── "false" branch: shown when isEditing is false ──
        <span
          onClick={onToggle}
          className={`cursor-pointer grow ${task.completed ? "line-through text-slate-400" : "text-slate-800"}`}
        >
          {task.text}
        </span>
        // ── end of "false" branch ──
      )}
      {/* ── Ternary end. Nothing task-editing-related goes below this line — 
           only elements that should ALWAYS render, regardless of isEditing ── */}

      {/* ── Edit button: always visible, outside the ternary ── */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsEditing(true);
        }}
        className="bg-slate-100 text-slate-600 px-3 py-1 rounded hover:bg-slate-200 text-sm font-medium ml-4"
      >
        Edit
      </button>
      {/* ── end Edit button ── */}

      {/* ── Delete button: always visible, outside the ternary ── */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 text-sm font-medium ml-4"
      >
        Delete
      </button>
      {/* ── end Delete button ── */}
    </li>
  );
}

export default TaskItem;