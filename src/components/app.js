import { h } from 'preact';
import { Router } from 'preact-router';

import Navigation from './navigation';
import Footer from './footer';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import TheList from '../routes/theList';
import Sponsors from '../routes/sponsors';
import Applications from '../routes/applications';
import Sponsorships from '../routes/sponsorships';


const App = () => (
	<div id="app">
		<Navigation />
		<main>
			<Router>
				<Home path="/" />
				<TheList path="/outdoor-30-under-30-list" />
				<Sponsors path="/outdoor-30-under-30-sponsors" />

				<Applications path="/outdoor-30-under-30-application" />
				<Sponsorships path="/become-an-outdoor-30-under-30-sponsor" />
			</Router>
		</main>
		<Footer />
	</div>
);

export default App;
