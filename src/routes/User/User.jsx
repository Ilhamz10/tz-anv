import { Link, useParams } from 'react-router-dom';
import styles from './User.module.css';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';

const User = () => {
	const { id } = useParams();
	const [currentUser, setCurrentUser] = useState();

	useEffect(() => {
		async function getUsers() {
			const response = await fetch('./clients.json');
			const result = await response.json();

			setCurrentUser(result.find((user) => user.id === id));
		}

		getUsers();
	}, [id]);

	return (
		<section className={styles.User}>
			<div className={styles.userCont}>
				<Link className={styles.link} to={'/'}>
					View all users
				</Link>
				<div className={styles.card}>
					<div className={styles.cardMainInfo}>
						<Icon
							icon='lets-icons:user-box-duotone'
							color='#4b49ac'
							width='130'
						/>
						<h1>{currentUser?.fullname}</h1>
						<p>{currentUser?.region}</p>
					</div>
					<div className={styles.cardInfo}>
						<p>{currentUser?.status}</p>
						<p>{new Date(currentUser?.created_at).toLocaleDateString()}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default User;
