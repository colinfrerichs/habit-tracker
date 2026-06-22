import { todayString } from "../../utils/utils";
import { calculateHabitStreak } from "../../habits/streaks";

import { type Habit } from "../../habits/types";

import "./HabitCard.css";

const HabitCard = ({
  habit,
  onDelete,
  onEdit,
  onToggleComplete,
}: {
  habit: Habit;
  onDelete: (id: string) => void;
  onEdit: (id: string, title: string) => void;
  onToggleComplete: (id: string) => void;
}) => {
  const { id, title, completedDates } = habit;
  const completedToday = completedDates.includes(todayString());
  const streak = calculateHabitStreak(habit);

  return (
    <div className={`habit-card ${completedToday ? "habit-card--done" : ""}`}>
      <input
        id="title"
        name="title"
        onChange={(e) => onEdit(id, e.target.value)}
        type="text"
        value={title}
      />
      <p>Streak: {streak} {streak === 1 ? "day" : "days"}</p>
      <input
        type="checkbox"
        checked={completedToday}
        onChange={() => onToggleComplete(id)}
      />
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  );
};

export default HabitCard;
