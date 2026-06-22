import { useHabits } from "../../habits/useHabits";

import HabitList from "../HabitList/HabitList";

import "./Dashboard.css";

const Dashboard = () => {
  const { habits, addHabit, deleteHabit, editHabit, toggleComplete } =
    useHabits();

  return (
    <div className="container">
      <div className="streak-container"></div>
      <div className="habits-container">
        <HabitList
          habits={habits}
          deleteHabit={deleteHabit}
          editHabit={editHabit}
          toggleComplete={toggleComplete}
        />
      </div>
      <button onClick={() => addHabit()}>Add</button>
    </div>
  );
};

export default Dashboard;
