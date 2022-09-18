import { useState, useEffect, useRef } from 'react';
import { IHabit } from './../components/habits/habit.interface';

export const useHabit = () => {
	const [habits, setHabits] = useState<IHabit[]>([]);
	const [percent, setPercent] = useState<number>(0);
	const [isEditing, setIsEditing] = useState<boolean>(false);

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

	const toggleHabit = (habitId: string, dayIndex: number) => {
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

	const [isDeleted, setIsDeleted] = useState<boolean>(false);

	useEffect(() => {
		const countDays = habits.length * 7;

		const percentOneDay = 100 / countDays;
		let newPercent = 0;

		for (let i = 0; i < habits.length; i++) {
			console.log(habits[i].completed);
			for (let status of habits[i].completed) {
				if (status) {
					newPercent += percentOneDay;
				}
			}
		}

		setPercent(newPercent);
	}, [isDeleted]);

	const deleteHabit = (habitId: string) => {
		setHabits(habits.filter(habit => habit.id !== habitId));

		if (habits.length === 1) {
			setPercent(0);
			return;
		}

		setIsDeleted(!isDeleted);
	};

	return {
		habits,
		percent,
		toggleHabit,
		setHabits,
		setPercent,
		deleteHabit,
		isEditing,
		setIsEditing,
	};
};
