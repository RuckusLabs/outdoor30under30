import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './index.css';

import Logo from "../../assets/outd30r-logo.svg";

const Navigation = () => (
	<header>
		<nav class={style.nav}>
			<Link href="/">
				<img class={style.logo} src={Logo} alt="Outdoor 30 Under 30" />
				<h1 class={style['a11y-hidden']}>Outdoor 30 Under 30</h1>
			</Link>
			<Link activeClassName={style.active} href="/">
				Mission
			</Link>
			<Link activeClassName={style.active} href="/outdoor-30-under-30-list">
				The 30 Under 30
			</Link>
			<Link activeClassName={style.active} href="/outdoor-30-under-30-sponsors">
				Sponsors
			</Link>

			<Link className={style.applications} activeClassName={style.active} href="/outdoor-30-under-30-application">
				2024 Applications
			</Link>
			<Link activeClassName={style.active} href="/become-an-outdoor-30-under-30-sponsor">
				Become a Sponsor
			</Link>
		</nav>
	</header>
);

export default Navigation;
