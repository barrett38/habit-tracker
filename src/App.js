import React, { useState } from "react";
import "./App.css";

function App() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  const addHabit = () => {
    if (newHabit.trim()) {
      setHabits([...habits, { name: newHabit, completed: false }]);
      setNewHabit("");
    }
  };

  const toggleHabit = (index) => {
    const updatedHabits = habits.map((habit, i) =>
      i === index ? { ...habit, completed: !habit.completed } : habit
    );
    setHabits(updatedHabits);
  };

  return (
    <div className="App">
      <h1>Daily Habit Tracker</h1>
      <div>
        <input
          type="text"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          placeholder="Add a new habit"
        />
        <button onClick={addHabit}>Add Habit</button>
      </div>
      <ul>
        {habits.map((habit, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={habit.completed}
                onChange={() => toggleHabit(index)}
              />
              {habit.name}
            </label>
          </li>
        ))}
      </ul>
      <p>
        {habits.filter((habit) => habit.completed).length} of {habits.length}{" "}
        habits completed today.
      </p>
    </div>
  );
}

export default App;
