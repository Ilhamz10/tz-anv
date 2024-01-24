/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './Dropdown.module.css';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { usersActions } from '../../../store/users-slicer';

const Dropdown = ({ elements }) => {
	const dispatch = useDispatch();

	const [activeItem, setActiveItem] = useState(elements[0]);
	const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

	function handleActiveElement(item) {
		setActiveItem(item);
		setDropdownIsOpen(false);
		dispatch(usersActions.changeFilter(item));
	}

	function handleDropdownClick() {
		setDropdownIsOpen((prev) => !prev);
	}

	return (
		<div className={styles.Dropdown}>
			<button
				className={`${styles.activeItemBtn} ${
					dropdownIsOpen ? styles.active : ''
				}`}
				onClick={handleDropdownClick}>
				{activeItem}{' '}
				<Icon
					icon='pepicons-pop:arrow-up'
					color='#4b49ac'
					width='25'
					rotate={2}
				/>
			</button>
			{dropdownIsOpen && (
				<ul>
					{elements.map((item) => (
						<li key={item}>
							<button onClick={() => handleActiveElement(item)}>{item}</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
