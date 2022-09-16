import { useState } from 'react';
import { IHabit } from './../components/habits/habit.interface';

export const useHabit = () => {
	const [habits, setHabits] = useState<IHabit[]>([
		{
			id: 1,
			img: './habit.png',
			name: 'No caffeine',
			completed: [false, false, false, false, false, false, false],
		},
	]);
	
	const [percent, setPercent] = useState(0);

	const toggleHabit = (habitId: number, dayIndex: number) => {
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

	return {habits, percent, toggleHabit, setHabits}
}