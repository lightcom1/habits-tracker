import { FC } from 'react';
import { IHabit } from './habit.interface';
import styles from './Habits.module.scss';
import HabitItem from './HabitItem';

const Habits: FC<{
	habits: IHabit[];
	toggleHabit: (habitId: string, dayIndex: number) => void;
	deleteHabit: (habitId: string) => void;
	isEditing: boolean;
}> = ({ habits, toggleHabit, deleteHabit, isEditing }) => {
	return (
		<section className={styles.habitContainer}>
			{habits.length > 0
				? habits.map(habit => (
						<HabitItem
							habit={habit}
							key={habit.id}
							toggleHabit={toggleHabit}
							isEditing={isEditing}
							deleteHabit={deleteHabit}
						/>
				  ))
				: <h2 style={{color: '#000', textAlign: 'center'}}>You don't have habits, try to add one.</h2> }
		</section>
	);
};

export default Habits;
