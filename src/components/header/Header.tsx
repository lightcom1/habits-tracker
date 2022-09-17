import { Dispatch, FC, SetStateAction, useState } from 'react';
import styles from './Header.module.scss';
import cn from 'clsx';
import { IHabit } from '../habits/habit.interface';

const Header: FC<{
	setHabits: Dispatch<SetStateAction<IHabit[]>>;
	setPercent: Dispatch<SetStateAction<number>>;
}> = ({ setHabits, setPercent }) => {
	const [isShow, setIsShow] = useState(false);
	const [habitName, setHabitName] = useState('');

	const addNewHabit = () => {
		if (habitName === '') return;

		setHabits(prev => {
			setPercent((prevPercent: number) => {
				return prevPercent - prevPercent / (prev.length + 1);
			});

			return [
				{
					id: prev.length + 1,
					img: './habit.png',
					name: habitName,
					completed: [false, false, false, false, false, false, false],
				},
				...prev,
			];
		});

		setHabitName('');
		setIsShow(false);
	};

	return (
		<header className={styles.header}>
			<h1>HabitsTracker</h1>
			<button
				className={cn(styles.addHabit, {
					[styles.rotate]: isShow,
				})}
				onClick={() => setIsShow(!isShow)}>
				<span>+</span>
			</button>
			<div
				className={cn(styles.form, {
					[styles.open]: isShow,
				})}>
				<label>
					<input
						value={habitName}
						onChange={e => setHabitName(e.target.value)}
						className={styles.inputHabitName}
						type='text'
						placeholder='Enter habit name'
						onKeyDown={e => e.key === 'Enter' && addNewHabit()}
					/>
				</label>
				<button className={styles.addHabitButton} onClick={addNewHabit}>
					Add
				</button>
			</div>
		</header>
	);
};

export default Header;
