// import { useState } from "react";
import Button from "./Button";
import Count from "./Count";

const Counter = ({ count, onIncrement, onDecrement }) => {
	// Controller or Logic Parts
	// create a state for our counter
	// const [count, setCount] = useState(0);

	// const handleIncrement = () => {
	// 	if (count < 10) {
	// 		setCount(count + 1);
	// 	}
	// };
	// const handleDecrement = () => {
	// 	if (count > 0) {
	// 		setCount(count - 1);
	// 	}
	// };
	// Views
	return (
		<div className="flex flex-col items-center justify-center p-8 rounded-xl bg-gray-100">
			<h1 className="text-3xl font-bold text-gray-800 mb-6">
				Counter App
			</h1>

			<Count count={count} />

			<div className="flex space-x-4 mt-6">
				<Button
					onClick={onIncrement}
					className="bg-green-500 hover:bg-green-600"
				>
					Increment
				</Button>
				<Button
					onClick={onDecrement}
					className="bg-red-500 hover:bg-red-600"
				>
					Decrement
				</Button>
			</div>
		</div>
	);
};

export default Counter;
