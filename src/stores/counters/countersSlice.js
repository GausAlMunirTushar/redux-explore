import { createSlice } from "@reduxjs/toolkit";
import initialCounter from "../../data/initialCounter";

const countersSlice = createSlice({
	name: "counters",
	initialState: initialCounter,
	reducers: {
		increment: (state, action) => {
			// action.payload == coutner ID
			const index = state.findIndex(
				(counter) => counter.id === action.payload
			);
			state[index].value++;
		},
		decrement: (state, action) => {
			// action.payload == coutner ID

			const index = state.findIndex(
				(counter) => counter.id === action.payload
			);
			state[index].value--;
		},
	},
});

export default countersSlice.reducer;
export const { increment, decrement } = countersSlice.actions;
