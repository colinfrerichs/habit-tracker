import { type Habit } from "./types";

import { toDateString } from "../utils/utils"

export const calculateGlobalStreak = (habits: Habit[]) => {
    const daysWithActivity = new Set<string>();
    // so we build a Set containing all of the dates where a habit was checked off.
    for (const habit of habits) {
        for (const date of habit.completedDates) {
            daysWithActivity.add(date);
        }
    }
    return calculateStreak(daysWithActivity);
};

export const calculateHabitStreak = (habit: Habit) => {
    const daysWithActivity = new Set<string>();
    for (const date of habit.completedDates) {
        daysWithActivity.add(date);
    }
    return calculateStreak(daysWithActivity);
};

const calculateStreak = (daysWithActivity: Set<string>) => {
    let streak = 0;
    let cursor = new Date();

    if (!daysWithActivity.has(toDateString(cursor))) {
        cursor.setDate(cursor.getDate() - 1);
    }

    while (daysWithActivity.has(toDateString(cursor))) {
        streak++;
        cursor.setDate(cursor.getDate() - 1);
    }

    return streak;
};