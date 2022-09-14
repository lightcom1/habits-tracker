import { FC } from 'react';
import { IHabit } from './habit.interface';
import styles from './Habits.module.scss';
import HabitItem from './HabitItem';

const Habits: FC<{ habits: IHabit[] }> = ({ habits }) => {
	return (
		<section className={styles.habitContainer}>
			{habits.map(habit => (
				<HabitItem habit={habit} key={habit.id} />
			))}
		</section>
	);
};

export default Habits;
