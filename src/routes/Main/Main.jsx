import { Outlet } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';

import styles from './Main.module.css';

const Main = () => {
	return (
		<div className={styles.Main}>
			<SideBar />
			<Outlet />
		</div>
	);
};

export default Main;
