import { Link } from 'react-router-dom';
import { Routes } from '../../types/routes';
import s from './Header.module.css';

const Header = () => {
	return (
		<header className={s.header}>
			<Link to={Routes.HOME}>Лого</Link>
		</header>
	);
};

export default Header;
