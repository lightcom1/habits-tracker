import { FC } from 'react';
import { IHabit } from './habit.interface';
import styles from './Habits.module.scss';
const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const HabitItem: FC<{
	habit: IHabit;
	toggleHabit: (habitId: number, dayIndex: number) => void;
	deleteHabit: (habitId: number) => void;
}> = ({ habit, toggleHabit, deleteHabit }) => {
	return (
		<div className={styles.habit}>
			<div className={styles.habitHeader}>
				<img src={habit.img} width='70' alt='Habit' />
				<span className={styles.habitName} onClick={() => deleteHabit(habit.id)}>{habit.name}</span>
			</div>
			<div className={styles.habitPlan}>
				{weekDays.map((name, i) => (
					<button
						onClick={() => toggleHabit(habit.id, i)}
						key={i}
						className={habit.completed[i] ? styles.checked : undefined}>
						<img src='./check.svg' alt='ok' />
						<span>{name}</span>
					</button>
				))}
			</div>
		</div>
	);
};

export default HabitItem;
