/* eslint-disable react/prop-types */
import styles from './TRow.module.css';
import Input from '../../UI/Input/Input';
import { useDispatch } from 'react-redux';
import { usersActions } from '../../../store/users-slicer';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TRow = ({ user, ...props }) => {
	const [isEditable, setIsEditable] = useState(false);
	const [inputsData, setInputsData] = useState({
		fullname: user.fullname,
		status: user.status,
		region: user.region,
		phone: user.phone,
	});
	const dispatch = useDispatch();

	function handleDeleteUser(id) {
		dispatch(usersActions.deleteUser(id));
	}

	function handleChangeUser(edit, id) {
		setIsEditable(edit);

		if (!edit) {
			dispatch(
				usersActions.changeUser({
					id,
					data: inputsData,
				})
			);
		}
	}

	function handleInputChange(key, value) {
		setInputsData((prevData) => ({
			...prevData,
			[key]: value,
		}));
	}

	return (
		<tr key={user.id} {...props}>
			<td data-cell='id'>{user.id}</td>
			<td data-cell='fullname'>
				{isEditable ? (
					<Input
						id={'editfullname'}
						onChange={(e) => handleInputChange('fullname', e.target.value)}
						value={inputsData.fullname}
					/>
				) : (
					<Link to={`/${user.id}`}>{user.fullname}</Link>
				)}
			</td>
			<td data-cell='created at'>
				{new Date(user['created_at']).toLocaleDateString()}
			</td>
			<td data-cell='phone'>
				{isEditable ? (
					<Input
						id={'editphone'}
						onChange={(e) => handleInputChange('phone', e.target.value)}
						value={inputsData.phone}
					/>
				) : (
					user.phone
				)}
			</td>
			<td data-cell='region'>
				{isEditable ? (
					<Input
						id={'editregion'}
						onChange={(e) => handleInputChange('region', e.target.value)}
						value={inputsData.region}
					/>
				) : (
					user.region
				)}
			</td>
			<td data-cell='status'>
				<div className={styles.trCont}>
					{isEditable ? (
						<Input
							id={'editstatus'}
							onChange={(e) => handleInputChange('status', e.target.value)}
							value={inputsData.status}
						/>
					) : (
						user.status
					)}
					<div className={styles.trBtns}>
						<button onClick={() => handleDeleteUser(user.id)}>
							<Icon
								icon='material-symbols:delete-outline'
								color='red'
								width='25'
							/>
						</button>
						<button onClick={() => handleChangeUser(!isEditable, user.id)}>
							{!isEditable ? (
								<Icon
									icon='material-symbols:edit-outline'
									color='#4b49ac'
									width='25'
								/>
							) : (
								<Icon icon='mdi:success' color='green' width='25' />
							)}
						</button>
					</div>
				</div>
			</td>
		</tr>
	);
};

export default TRow;
