import { configureStore } from '@reduxjs/toolkit';
import usersSlicer from './users-slicer';

const store = configureStore({
	reducer: {
		usersState: usersSlicer.reducer,
	},
});

export default store;
