import styles from './THead.module.css'

const THead = () => {
	return (
		<thead className={styles.THead}>
			<tr>
				<th>ID</th>
				<th>Fullname</th>
				<th>Created at</th>
				<th>Phone</th>
				<th>Region</th>
				<th>Status</th>
			</tr>
		</thead>
	);
};

export default THead;
