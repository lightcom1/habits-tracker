import { Dispatch, FC, SetStateAction, useState } from 'react';
import styles from './Header.module.scss';
import cn from 'clsx';
import { IHabit } from '../habits/habit.interface';
import { v4 as uuidv4 } from 'uuid';

const Header: FC<{
	setHabits: Dispatch<SetStateAction<IHabit[]>>;
	setPercent: Dispatch<SetStateAction<number>>;
	setIsEditing: Dispatch<SetStateAction<boolean>>;
	isEditing: boolean;
}> = ({ setHabits, setPercent, setIsEditing, isEditing }) => {
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
					id: uuidv4(),
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
			<div className={styles.headerButtons}>
				<button
					className={cn(styles.edit, {
						[styles.rotate]: isEditing,
					})}
					onClick={() => setIsEditing(!isEditing)}>
					<img src='./edit.svg' width='30' alt='edit' />
				</button>
				<button
					className={cn(styles.addHabit, {
						[styles.rotate]: isShow,
					})}
					onClick={() => setIsShow(!isShow)}>
					<span>+</span>
				</button>
			</div>
			<div
				className={cn(styles.form, {
					[styles.open]: isShow,
				})}>
				<input
					value={habitName}
					onChange={e => setHabitName(e.target.value)}
					className={styles.inputHabitName}
					type='text'
					placeholder='Enter habit name'
					maxLength={30}
					onKeyDown={e => e.key === 'Enter' && addNewHabit()}
				/>
				<button className={styles.addHabitButton} onClick={addNewHabit}>
					Add
				</button>
			</div>
		</header>
	);
};

export default Header;
