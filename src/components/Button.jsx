const Button = ({ onClick, children, className }) => {
	return (
		<button
			onClick={onClick}
			className={`py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
