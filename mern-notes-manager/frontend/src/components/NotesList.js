import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  // fetch notes from backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/notes')
      .then(res => setNotes(res.data))
      .catch(err => console.error('Error fetching notes:', err));
  }, []);

  return (
    <div>
      <h2>Notes</h2>
      {notes.length === 0 ? (
        <p>No notes yet!</p>
      ) : (
        notes.map(note => (
          <div key={note._id} style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NotesList;
