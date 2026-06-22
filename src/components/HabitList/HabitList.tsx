import { type Habit } from "../../habits/types";

import HabitCard from "../HabitCard/HabitCard";

import "./HabitList.css";

const HabitList = ({
  habits,
  deleteHabit,
  editHabit,
  toggleComplete,
}: {
  habits: Habit[];
  deleteHabit: (id: string) => void;
  editHabit: (id: string, title: string) => void;
  toggleComplete: (id: string) => void;
}) => {
  return (
    <div>
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onDelete={deleteHabit}
          onEdit={editHabit}
          onToggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default HabitList;
