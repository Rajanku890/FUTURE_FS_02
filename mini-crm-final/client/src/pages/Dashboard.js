
import React, { useEffect, useState } from 'react';
import API from '../services/api';

function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({ name:'', email:'', source:'' });

  useEffect(() => {
    API.get('/leads').then(res => setLeads(res.data));
  }, []);

  const addLead = () => {
    API.post('/leads', form).then(res => setLeads([...leads, res.data]));
  };

  const updateStatus = (id, status) => {
    API.put(`/leads/${id}`, { status }).then(() => {
      setLeads(leads.map(l => l._id === id ? { ...l, status } : l));
    });
  };

  const addNote = (id) => {
    const text = prompt("Enter note");
    if (!text) return;
    API.post(`/leads/${id}/notes`, { text }).then(res => {
      setLeads(leads.map(l => l._id === id ? res.data : l));
    });
  };

  return (
    <div>
      <h2>CRM Dashboard</h2>

      <h3>Add Lead</h3>
      <input placeholder="Name" onChange={e => setForm({...form, name:e.target.value})}/>
      <input placeholder="Email" onChange={e => setForm({...form, email:e.target.value})}/>
      <input placeholder="Source" onChange={e => setForm({...form, source:e.target.value})}/>
      <button onClick={addLead}>Add</button>

      <h3>Leads</h3>
      {leads.map(l => (
        <div key={l._id}>
          <p>{l.name} ({l.status})</p>
          <select onChange={e => updateStatus(l._id, e.target.value)}>
            <option>new</option>
            <option>contacted</option>
            <option>converted</option>
          </select>
          <button onClick={() => addNote(l._id)}>Add Note</button>
          <ul>
            {l.notes.map((n,i) => <li key={i}>{n.text}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
