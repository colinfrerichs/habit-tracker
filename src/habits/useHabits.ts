import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { isDuplicateHabit } from "./validators";
import { todayString } from "../utils/utils";

import { type Habit } from "./types";

const STORAGE_KEY = "habits";
const DEFAULT_HABIT_TITLE = "New Habit";

export const useHabits = () => {
    const [habits, setHabits] = useState<Habit[]>(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(habits));
    }, [habits]);

    const addHabit = () => {
        const newHabit = { id: uuidv4(), title: DEFAULT_HABIT_TITLE, completedDates: [] }
        setHabits((prev) => {
            if (isDuplicateHabit(prev, newHabit)) return prev;

            return [...prev, newHabit];
        })
    }

    const deleteHabit = (id: string) => {
        setHabits((prev) => (
            prev.filter((habit) => habit.id !== id)
        ));
    }

    const editHabit = (id: string, newTitle: string) => {
        setHabits((prev => (
            prev.map((habit) => {
                if (habit.id === id) {
                    return {
                        ...habit,
                        title: newTitle,
                    }
                }

                return habit;
            })
        )));
    }

    const toggleComplete = (id: string) => {
        setHabits((prev) => prev.map(habit => {
            if (habit.id !== id) return habit;

            const today = todayString();
            const isDone = habit.completedDates.includes(today);

            return {
                ...habit,
                completedDates: isDone 
                    ? habit.completedDates.filter((date) => date !== today)
                    : [ ...habit.completedDates, today ],
            }
        }))
    }

    return {
        habits,
        addHabit,
        deleteHabit,
        editHabit,
        toggleComplete
    }
}
