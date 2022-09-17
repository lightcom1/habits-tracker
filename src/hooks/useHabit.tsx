import { useState, useEffect } from 'react';
import { IHabit } from './../components/habits/habit.interface';

export const useHabit = () => {
	const [habits, setHabits] = useState<IHabit[]>([]);
	const [percent, setPercent] = useState(0);

	useEffect(() => {
		const LSHabits = localStorage.getItem('habits');
		const LSPercent = localStorage.getItem('percent');

		setHabits(JSON.parse(LSHabits || '[]'));
		setPercent(JSON.parse(LSPercent || '0'));
	}, []);

	const updateLS = () => {
		localStorage.setItem('habits', JSON.stringify(habits));
		localStorage.setItem('percent', JSON.stringify(percent));
	};

	useEffect(() => {
		updateLS();
	}, [habits]);

	const date = new Date();

	const toggleHabit = (habitId: number, dayIndex: number) => {
		const today = date.getDay() - 1 === -1 ? 6 : date.getDay() - 1;
		if (today !== dayIndex) return;

		const countDays = habits.length * 7;
		const percentOneDay = 100 / countDays;

		setHabits(
			habits.map(habit => {
				if (habit.id === habitId) {
					habit.completed[dayIndex] = !habit.completed[dayIndex];

					setPercent(
						habit.completed[dayIndex]
							? percent + percentOneDay
							: percent - percentOneDay
					);
				}

				return habit;
			})
		);
	};

	const deleteHabit = (habitId: number) => {
		setHabits(habits.filter(habit => habit.id !== habitId));
	};

	return {
		habits,
		percent,
		toggleHabit,
		setHabits,
		setPercent,
		deleteHabit,
	};
};
