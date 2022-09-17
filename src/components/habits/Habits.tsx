import { FC } from 'react';
import { IHabit } from './habit.interface';
import styles from './Habits.module.scss';
import HabitItem from './HabitItem';

const Habits: FC<{
	habits: IHabit[];
	toggleHabit: (habitId: number, dayIndex: number) => void;
	deleteHabit: (habitId: number) => void;
}> = ({ habits, toggleHabit, deleteHabit }) => {
	return (
		<section className={styles.habitContainer}>
			{habits.length > 0
				? habits.map(habit => (
						<HabitItem
							habit={habit}
							key={habit.id}
							toggleHabit={toggleHabit}
							deleteHabit={deleteHabit}
						/>
				  ))
				: <h2 style={{color: '#000', textAlign: 'center'}}>You don't have habits, try to add one.</h2> }
		</section>
	);
};

export default Habits;
