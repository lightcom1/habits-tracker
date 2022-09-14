import { FC, useState } from 'react';
import styles from './Header.module.scss';
import cn from 'clsx';

const Header: FC = () => {
	const [isShow, setIsShow] = useState(false);
	const [habitName, setHabitName] = useState('');

	const addNewHabit = () => {};

	return (
		<header className={styles.header}>
			<h1 className=''>HabitsTracker</h1>
			<button className={cn(styles.addHabit, {
				[styles.rotate]: isShow,
			})} onClick={() => setIsShow(!isShow)}>
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
