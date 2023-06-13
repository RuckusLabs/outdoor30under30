import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<nav>
			<a href="/" class={style.logo}>Home</a>
		</nav>
	</header>
);

export default Header;
