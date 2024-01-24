import THead from '../../components/THead/THead';
import TBody from '../../components/TBody/TBody';

import styles from './Users.module.css';
import AddClient from '../../components/AddClient/AddClient';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from '../../store/users-slicer';
import FilterBox from '../../components/FilterBox/FilterBox';

const Users = () => {
	const users = useSelector((state) => state.usersState.users);
	const filter = useSelector((state) => state.usersState.filter);
	const search = useSelector((state) => state.usersState.search);

	const dispatch = useDispatch();

	const filteredUsers = filter
		? users.filter((user) => user.status === filter)
		: users;

	const filteredAndSearchedUsers = filteredUsers.filter((user) =>
		user.fullname.toUpperCase().includes(search.toUpperCase())
	);

	useEffect(() => {
		async function getUsers() {
			const response = await fetch('./clients.json');
			const result = await response.json();

			dispatch(usersActions.getAllUsers(result));
		}

		getUsers();
	}, [dispatch]);

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(users));
	}, [users]);

	return (
		<section className={styles.Users}>
			<FilterBox />
			<table>
				<THead />
				<TBody data={filteredAndSearchedUsers} />
			</table>
			<AddClient />
		</section>
	);
};

export default Users;
