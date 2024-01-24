import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	users: [],
	filter: null,
	search: '',
};

const usersSlicer = createSlice({
	initialState,
	name: 'users',
	reducers: {
		getAllUsers(state, action) {
			state.users = action.payload;
		},
		addNewUser(state, action) {
			const id = state.users.at(-1).id ? +state.users.at(-1).id + 1 : 0;
			const created_at = new Date().toLocaleDateString();
			state.users.push({
				...action.payload,
				id,
				created_at,
			});
		},
		deleteUser(state, action) {
			state.users = state.users.filter((user) => user.id !== action.payload);
		},
		changeUser(state, action) {
			const id = action.payload.id;
			const updatedData = action.payload.data;

			const currentUser = state.users.find((user) => user.id === id);

			currentUser.fullname = updatedData.fullname;
			currentUser.status = updatedData.status;
			currentUser.region = updatedData.region;
			currentUser.phone = updatedData.phone;
		},
		dragAndDrop(state, action) {
			const currentUser = action.payload.currentUser;
			const currentId = action.payload.currentId;
			const dropId = action.payload.dropId;
			const currentIndex = state.users.findIndex(
				(user) => user.id === currentId
			);
			state.users.splice(currentIndex, 1);
			const dropIndex = state.users.findIndex((user) => user.id === dropId);
			state.users.splice(dropIndex + 1, 0, currentUser);
		},
		changeFilter(state, action) {
			if (action.payload === 'Активные') {
				state.filter = 'Активен';
			} else if (action.payload === 'Неактивные') {
				state.filter = 'Неактивен';
			} else if (action.payload === 'Приостановленные') {
				state.filter = 'Приостановлен';
			} else {
				state.filter = null;
			}
		},
		changeSearch(state, action) {
			state.search = action.payload;
		},
	},
});

export const usersActions = usersSlicer.actions;
export default usersSlicer;
