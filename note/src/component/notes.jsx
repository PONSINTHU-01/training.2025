import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { marked } from "marked";
import "./notes.css";

const Notes = () => {
  const navigate = useNavigate();

  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  const [currentNote, setCurrentNote] = useState({
    id: Date.now(),
    title: "Untitled",
    content: "",
    lastEdit: new Date().toLocaleString(),
  });

  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNewNote = () => {
    const newNote = {
      id: Date.now(),
      title: "Untitled",
      content: "",
      lastEdit: new Date().toLocaleString(),
    };
    setNotes([...notes, newNote]);
    setCurrentNote(newNote);
  };

  const saveNote = () => {
    const updatedNote = { 
      ...currentNote, 
      lastEdit: new Date().toLocaleString() 
    };

    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );

    if (!notes.find((n) => n.id === updatedNote.id)) {
      updatedNotes.push(updatedNote);
    }

    setNotes(updatedNotes);
    setCurrentNote(updatedNote);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const deleteNote = (id) => {
    const updated = notes.filter((note) => note.id !== id);
    setNotes(updated);
    if (updated.length > 0) setCurrentNote(updated[0]);
    else addNewNote();
  };

  const filteredNotes = notes.filter((n) =>
    n.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={`notes-container ${darkMode ? "dark" : ""}`}>
      <aside className="notes-list">
        <button className="back-btn" onClick={() => navigate("/")}>← Back</button>
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <ul>
          {filteredNotes.map((note) => (
            <li
              key={note.id}
              onClick={() => setCurrentNote(note)}
              className={note.id === currentNote.id ? "active" : ""}
            >
              <strong>{note.title}</strong>
              <button 
                className="delete-icon" 
                onClick={(e) => { e.stopPropagation(); deleteNote(note.id); }}
              >
              Delete
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className="notes-editor">
        <input
          type="text"
          className="note-title"
          value={currentNote.title}
          onChange={(e) =>
            setCurrentNote({ ...currentNote, title: e.target.value })
          }
        />
        <textarea
          className="note-input"
          value={currentNote.content}
          onChange={(e) =>
            setCurrentNote({ ...currentNote, content: e.target.value })
          }
        />
        <div
          className="note-preview"
          dangerouslySetInnerHTML={{ __html: marked(currentNote.content || "") }}
        ></div>
        <p className="last-edit">Last Edited: {currentNote.lastEdit}</p>
        <button className="save-btn" onClick={saveNote}> Save</button>
      </main>

      <button className="fab" onClick={addNewNote}>＋</button>
      <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light" : " Dark"}
      </button>
    </div>
  );
};

export default Notes;
