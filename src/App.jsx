import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./stores/counters/countersSlice";

function App() {
	const counters = useSelector((state) => state.counters);
	const dispatch = useDispatch();

	const handleIncrement = (counterId) => {
		dispatch(increment(counterId));
	};
	const handleDecrement = (counterId) => {
		dispatch(decrement(counterId));
	};

	const totalCount = counters.reduce((acc, counter) => {
		return acc + counter.value;
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
