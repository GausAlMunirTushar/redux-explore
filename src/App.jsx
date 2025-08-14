import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import initialCounter from "./data/initialCounter";

function App() {
	const [counters, setCounters] = useState(initialCounter);

	const handleIncrement = (counterId) => {
		const updatedCounters = counters.map((counter) => {
			if (counter.id === counterId) {
				return { ...counter, value: counter.value + 1 };
			}
			return counter;
		});
		setCounters(updatedCounters);
	};
	const handleDecrement = (counterId) => {
		const updatedCounters = counters.map((counter) => {
			if (counter.id === counterId) {
				return { ...counter, value: counter.value - 1 };
			}
			return counter;
		});
		setCounters(updatedCounters);
	};

	const totalCount = counters.reduce((total, counter) => {
		return total + counter.value;
	}, 0);

	return (
		<div className="bg-gray-200 min-h-screen flex flex-col gap-2 items-center justify-center">
			{counters.map((counter) => (
				<Counter
					key={counter.id}
					count={counter.value}
					onIncrement={() => {
						handleIncrement(counter.id);
					}}
					onDecrement={() => {
						handleDecrement(counter.id);
					}}
				/>
			))}
			<Stats totalCount={totalCount} />
		</div>
	);
}

export default App;
