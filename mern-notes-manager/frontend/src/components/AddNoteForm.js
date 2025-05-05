import React, { useState } from 'react';
import axios from 'axios';

const AddNoteForm = ({ onNoteAdded }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return;

    try {
      const res = await axios.post('http://localhost:5000/api/notes', { title, content });
      onNoteAdded(res.data); // Notify parent to refresh list
      setTitle('');
      setContent('');
    } catch (err) {
      console.error('Failed to add note:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-4 mb-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Note</h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full border px-3 py-2 mb-3 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        className="w-full border px-3 py-2 mb-3 rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Add Note
      </button>
    </form>
  );
};

export default AddNoteForm;
