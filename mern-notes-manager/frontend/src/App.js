import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';

function App() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const res = await axios.get('http://localhost:5000/api/notes');
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleNoteAdded = (newNote) => {
    setNotes(prev => [newNote, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <AddNoteForm onNoteAdded={handleNoteAdded} />
      <NotesList notes={notes} />
    </div>
  );
}

export default App;
