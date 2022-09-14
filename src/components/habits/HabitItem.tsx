import { FC } from 'react';
import { IHabit } from './habit.interface';
import styles from './Habits.module.scss';
const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const HabitItem: FC<{ habit: IHabit }> = ({ habit }) => {
	const toggleHabit = () => {};

	return (
		<div className={styles.habit}>
			<div className={styles.habitHeader}>
				<img src={habit.img} width='70' alt='' />
				<span className={styles.habitName}>{habit.name}</span>
			</div>
			<div className={styles.habitPlan}>
				{weekDays.map(name => (
					<button onClick={toggleHabit}>
						<img src='./check.svg' alt='' />
						<span> {name} </span>
					</button>
				))}
			</div>
		</div>
	);
};

export default HabitItem;
