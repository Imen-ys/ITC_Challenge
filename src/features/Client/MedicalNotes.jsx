import { useState } from "react";

export default function MedicalNotes() {

  const [notes, setNotes] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleAddNote = () => {
    if (!title || !text) return;

    const newNote = {
      title,
      text
    };

    setNotes([newNote, ...notes]);

    setTitle("");
    setText("");
    setShowForm(false);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-full ml-3">

      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Medical Notes</h3>

        <button
          onClick={() => setShowForm(!showForm)}
          className="text-blue-600 text-sm font-medium"
        >
          + Add Note
        </button>
      </div>

      {showForm && (
        <div className="bg-gray-50 p-4 rounded-lg mb-4 space-y-3">

          <input
            type="text"
            placeholder="Note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="Write medical note..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full border rounded-lg p-2 text-sm h-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex justify-end gap-2">

            <button
              onClick={() => setShowForm(false)}
              className="px-3 py-1 text-sm text-gray-500"
            >
              Cancel
            </button>

            <button
              onClick={handleAddNote}
              className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
            >
              Save
            </button>

          </div>
        </div>
      )}

      <div className="space-y-4">
        {notes.map((note, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg">

            <p className="text-blue-600 font-medium text-sm">
              {note.title}
            </p>

            <p className="text-sm text-gray-600 mt-2">
              {note.text}
            </p>

          </div>
        ))}
      </div>

    </div>
  );
}