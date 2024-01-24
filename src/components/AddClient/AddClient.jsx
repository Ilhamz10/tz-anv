import styles from './AddClient.module.css';

import Input from '../UI/Input/Input';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { usersActions } from '../../store/users-slicer';
import { Icon } from '@iconify/react';

const initialState = {
	fullname: '',
	phone: '',
	region: '',
	status: '',
};

const AddClient = () => {
	const dispatch = useDispatch();
	const [formIsOpen, setFormIsOpen] = useState(false);

	const [formData, setFormData] = useState(initialState);

	function handleFormSubmit(e) {
		e.preventDefault();

		dispatch(usersActions.addNewUser(formData));
		setFormData(initialState);
		setFormIsOpen(false);
	}

	function handleInputChange(value, key) {
		setFormData((prevData) => ({
			...prevData,
			[key]: value,
		}));
	}

	return (
		<>
			<button
				className={styles.upButton}
				onClick={() => setFormIsOpen((prev) => !prev)}>
				Create new client{' '}
				<Icon
					icon='solar:double-alt-arrow-up-linear'
					color='#4b49ac'
					fontSize={20}
				/>
			</button>
			<form
				className={`${styles.addNewUserForm} ${
					formIsOpen ? styles.formUp : ''
				}`}
				onSubmit={handleFormSubmit}>
				<button type='button' className={styles.closeBtn} onClick={() => setFormIsOpen(false)}>
					<Icon icon='iconamoon:close-bold' color='#4b49ac' width="25"/>
				</button>
				<Input
					onChange={(e) => handleInputChange(e.target.value, 'fullname')}
					value={formData.fullname}
					id={'fullname'}
					label={'Fullname'}
					type='text'
				/>
				<Input
					onChange={(e) => handleInputChange(e.target.value, 'phone')}
					value={formData.phone}
					id={'phone'}
					label={'Phone'}
					type='number'
				/>
				<Input
					onChange={(e) => handleInputChange(e.target.value, 'region')}
					value={formData.region}
					id={'region'}
					label={'Region'}
					type='text'
				/>
				<Input
					onChange={(e) => handleInputChange(e.target.value, 'status')}
					value={formData.status}
					id={'status'}
					label={'Status'}
					type='text'
				/>
				<button>Create</button>
			</form>
		</>
	);
};

export default AddClient;
