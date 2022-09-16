import { FC } from 'react';
import styles from './ProgressBar.module.scss';

const ProgressBar: FC<{ percent: number }> = ({ percent }) => {
	return (
		<section className={styles.progressWrapper}>
			<div className={styles.progressHeader}> You are almost there ! </div>
			<div className={styles.progressBar}>
				<div style={{ width: percent + '%' }}>{percent.toFixed(1)}%</div>
			</div>
		</section>
	);
};

export default ProgressBar;
