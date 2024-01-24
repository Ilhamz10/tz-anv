/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './TBody.module.css';
import TRow from './TRow/TRow';
import { usersActions } from '../../store/users-slicer';
import { useDispatch } from 'react-redux';

const TBody = ({ data }) => {
	const dispatch = useDispatch();
	const [currentUser, setCurrentUser] = useState(null);

	function dragStartHandler(e, user) {
		setCurrentUser(user);
	}

	function dragEndHandler(e) {
		e.target.parentElement.style.borderBottom = 'none';
	}

	function dragOverHandler(e) {
		e.preventDefault();
		e.target.parentElement.style.borderBottom = '3px solid green';
	}

	function dropHandler(e, user) {
		e.preventDefault();
		e.target.parentElement.style.borderBottom = 'none';
		dispatch(
			usersActions.dragAndDrop({
				currentId: currentUser.id,
				dropId: user.id,
				currentUser,
			})
		);
	}
	return (
		<tbody className={styles.TBody}>
			{data.map((user, index) => (
				<TRow
					user={user}
					key={user.id}
					index={index}
					draggable
					onDragStart={(e) => dragStartHandler(e, user)}
					onDragLeave={(e) => dragEndHandler(e)}
					onDragEnd={(e) => dragEndHandler(e)}
					onDragOver={(e) => dragOverHandler(e)}
					onDrop={(e) => dropHandler(e, user)}
				/>
			))}
		</tbody>
	);
};

export default TBody;
