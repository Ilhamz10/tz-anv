import { NavLink } from 'react-router-dom';
import styles from './SideBar.module.css';
import { Icon } from '@iconify/react';

const SideBar = () => {
	return (
		<aside className={styles.SideBar}>
			<nav className={styles.navigation}>
				<ul className={styles.navList}>
					<li>
						<NavLink
							to={'/'}
							className={({ isActive }) =>
								isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
							}>
							<Icon icon='fa-solid:users' color='white' width='25' />
							<span>Users</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to={'/settings'}
							className={({ isActive }) =>
								isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
							}>
							<Icon icon='material-symbols:settings' width='25' />
							<span>Settings</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default SideBar;
