import { type Habit } from "./types";

export const isDuplicateHabit = (habits: Habit[], newHabit: Habit) => {
    return habits.some((habit: Habit) => habit.id === newHabit.id);
}
