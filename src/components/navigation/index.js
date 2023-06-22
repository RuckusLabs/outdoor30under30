import { h } from 'preact';
import { Link } from 'preact-router/match';
import { useState } from 'react';
import style from './index.css';

import Logo from "../../assets/outd30r-logo.svg";

const Navigation = () => {

	const [menuActive, setMenuActive] = useState(false);
	const [menuText, setMenuText] = useState(false);

	function toggleBodyFixed() {
		document.querySelector('body').classList.toggle('fixed');
	}

	function handleMenuClick() {
		setMenuActive(prevState => !prevState);
		setMenuText(prevState => !prevState);
		toggleBodyFixed();
	}

	return (
		<header>
			<nav class={`${style.nav} ${menuActive ? `${style.open}` : "none"}`}>
				<div class={style.navHeader}>
					<Link onClick={handleMenuClick} class={style.logo} href="/">
						<img src={Logo} alt="Outdoor 30 Under 30" />
						<h1 class={style['a11y-hidden']}>Outdoor 30 Under 30</h1>
					</Link>
					<a onClick={handleMenuClick} class={style["menu-toggle"]} href="#">{menuText ? 'Close Menu' : 'Menu'}</a>
				</div>
				<Link onClick={handleMenuClick} activeClassName={style.active} href="/">
					Mission
				</Link>
				<Link onClick={handleMenuClick} activeClassName={style.active} href="/outdoor-30-under-30-list">
					The 30 Under 30
				</Link>
				<Link onClick={handleMenuClick} activeClassName={style.active} href="/outdoor-30-under-30-sponsors">
					Sponsors
				</Link>
				<div className={style.separator} />
				<Link onClick={handleMenuClick} className={style.applications} activeClassName={style.active} href="/outdoor-30-under-30-application">
					2024 Applications
				</Link>
				<Link onClick={handleMenuClick} activeClassName={style.active} href="/become-an-outdoor-30-under-30-sponsor">
					Become a Sponsor
				</Link>
			</nav>
		</header>
	)
};

export default Navigation;
