import { useState } from 'react';
import './App.css';

function TodoItem({ task }) {
  return <li>{task}</li>;
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState('');

  const addTask = () => {
    setTasks([...tasks, value]);
    setValue('');
  };

  return (
    <div>
      <h2>My Todo List</h2>
      <input
        placeholder='Enter here'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, i) => (
          <TodoItem key={i} task={t} />
        ))}
      </ul>
    </div>
  );
}

export default App;
