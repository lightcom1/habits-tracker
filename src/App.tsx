import './App.scss';
import Header from './components/header/Header';
import ProgressBar from './components/progress-bar/ProgressBar';
import { useState } from 'react';
import { IHabit } from './components/habits/habit.interface';
import Habits from './components/habits/Habits';

function App() {
	const [habits, setHabits] = useState<IHabit[]>([
		{
			id: 1,
			img: './habit.png',
			name: 'No caffeine',
			completed: [false, false, false, false, false, false, false],
		},
		{
			id: 2,
			img: './habit.png',
			name: 'No caffeine',
			completed: [false, false, false, false, false, false, false],
		},
	]);

	return (
		<>
			<Header />
			<main>
				<ProgressBar />
				<Habits habits={habits} />
			</main>
		</>
	);
}

export default App;
