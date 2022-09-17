import { FC } from 'react';
import styles from './ProgressBar.module.scss';
const weekDays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const ProgressBar: FC<{ percent: number }> = ({ percent }) => {
	const date = new Date();

	return (
		<section className={styles.progressWrapper}>
			<div className={styles.progressHeader}>
				<span>
					{weekDays[date.getDay()]} {date.getDate()}/
					{`${date.getMonth() + 1}`.padStart(2, '0')}
				</span>
				{percent >= 100 ? 'Great job!' : 'You are almost there!'}
			</div>
			<div className={styles.progressBar}>
				<div
					style={{
						width: percent > 0 ? percent + '%' : 0,
						color: percent > 0 ? '#000' : '#fff',
					}}>
					{percent > 0 ? percent.toFixed(1) : '0.0'}%
				</div>
			</div>
		</section>
	);
};

export default ProgressBar;
