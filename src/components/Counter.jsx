import Button from "./Button";
import Count from "./Count";

const Counter = () => {
	return (
		<div className="flex flex-col items-center justify-center p-8 rounded-xl bg-gray-100">
			<h1 className="text-3xl font-bold text-gray-800 mb-6">
				Counter App
			</h1>

			<Count count={0} />

			<div className="flex space-x-4 mt-6">
				<Button className="bg-green-500 hover:bg-green-600">
					Increment
				</Button>
				<Button className="bg-red-500 hover:bg-red-600">
					Decrement
				</Button>
			</div>
		</div>
	);
};

export default Counter;
