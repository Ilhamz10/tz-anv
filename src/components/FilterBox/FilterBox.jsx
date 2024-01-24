import { useDispatch } from 'react-redux';
import Dropdown from '../UI/Dropdown/Dropdown';
import Input from '../UI/Input/Input';
import styles from './FilterBox.module.css';
import { usersActions } from '../../store/users-slicer';

const FilterBox = () => {
	const dispatch = useDispatch();

	function handleSearchChange(value) {
		dispatch(usersActions.changeSearch(value));
	}
    
	return (
		<div className={styles.FilterBox}>
			<Input
				label={'Search'}
				id='search'
				type='text'
				onChange={(e) => handleSearchChange(e.target.value)}
			/>
			<Dropdown
				elements={['Все', 'Активные', 'Неактивные', 'Приостановленные']}
			/>
		</div>
	);
};

export default FilterBox;
