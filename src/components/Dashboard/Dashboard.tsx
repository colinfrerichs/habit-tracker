import { useHabits } from "../../habits/useHabits";
import { calculateGlobalStreak } from "../../habits/streaks";

import HabitList from "../HabitList/HabitList";
import GlobalStreak from "../GlobalStreak/GlobalStreak";

import "./Dashboard.css";

const Dashboard = () => {
  const { habits, addHabit, deleteHabit, editHabit, toggleComplete } =
    useHabits();

  const streak = calculateGlobalStreak(habits);

  return (
    <div className="container">
      <div className="streak-container">
        <GlobalStreak streak={streak} />
      </div>
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
