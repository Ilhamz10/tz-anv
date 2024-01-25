/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import styles from './TBody.module.css';
import TRow from './TRow/TRow';
import { usersActions } from '../../store/users-slicer';
import { useDispatch } from 'react-redux';

const TBody = ({ data }) => {
	const dispatch = useDispatch();
	const [currentUser, setCurrentUser] = useState(null);
	const currentRow = useRef(null);

	function dragStartHandler(e, user) {
		e.target.style.opacity = '0';
		e.target.style.position = 'absolute';
		e.target.style.zIndex = '0';
		currentRow.current = e.target;
		setCurrentUser(user);
	}

	function dragEndHandler(e) {
		e.target.parentElement.style.borderBottom = '3px solid transparent';
	}

	function dragOverHandler(e) {
		e.preventDefault();
		e.target.parentElement.style.borderBottom = `60px solid #d6deff`;
	}

	function dropHandler(e, user) {
		e.preventDefault();
		e.target.parentElement.style.borderBottom = '3px solid transparent';
		currentRow.current.style.opacity = '1';
		currentRow.current.style.position = 'static';
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
