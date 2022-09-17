import './App.scss';
import Header from './components/header/Header';
import ProgressBar from './components/progress-bar/ProgressBar';
import Habits from './components/habits/Habits';
import { useHabit } from './hooks/useHabit';

function App() {
	const { habits, setHabits, toggleHabit, percent, setPercent } = useHabit();

	return (
		<>
			<Header setHabits={setHabits} setPercent={setPercent}/>
			<main>
				<ProgressBar percent={percent} />
				<Habits habits={habits} toggleHabit={toggleHabit} />
			</main>
		</>
	);
}

export default App;
