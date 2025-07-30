import { useState } from 'react';
import './App.css';

function App() {
  const [mood, setMood] = useState('🙂');
  const [intentions, setIntentions] = useState(['', '', '']);
  const [journalInput, setJournalInput] = useState('');
  const [entries, setEntries] = useState([]);

  const updateIntention = (index, value) => {
    const updated = [...intentions];
    updated[index] = value;
    setIntentions(updated);
  };

  const addJournalEntry = () => {
    if (journalInput.trim()) {
      setEntries([{ text: journalInput, date: new Date() }, ...entries]);
      setJournalInput('');
    }
  };

  return (
    <div className="container">
      <div className="column">
        <h2>Mood</h2>
        <select value={mood} onChange={e => setMood(e.target.value)}>
          <option>😃</option>
          <option>🙂</option>
          <option>😐</option>
          <option>😟</option>
          <option>😢</option>
        </select>
        <div style={{ fontSize: '4rem', marginTop: '1rem' }}>{mood}</div>
      </div>

      <div className="column">
        <h2>Day Intentions</h2>
        {intentions.map((val, i) => (
          <input
            key={i}
            value={val}
            onChange={e => updateIntention(i, e.target.value)}
            placeholder={`Intention ${i + 1}`}
          />
        ))}
      </div>

      <div className="column">
        <h2>Journal</h2>
        <textarea
          value={journalInput}
          onChange={e => setJournalInput(e.target.value)}
          placeholder="Write your thoughts..."
          rows="4"
        />
        <button onClick={addJournalEntry}>Add Entry</button>
        <div className="journal-entries">
          {entries.map((entry, index) => (
            <div key={index} className="journal-entry">
              <small>{entry.date.toLocaleString()}</small>
              <p>{entry.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
