import { Router } from 'preact-router';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Sponsors from "../routes/sponsors";
import Applications from '../routes/applications';
import Sponsorship from '../routes/sponsorship';
import ThirtyList from '../routes/thirtyList';

const App = () => (
	<div id="app">
		<main>
			<Router>
				<h2>Test</h2>
				<Home path="/" />
				<ThirtyList path="/outdoor-30-under-30-list" />
				<Sponsors path="/outdoor-30-under-30-sponsors" />

				<Applications path="apply-to-outdoor-30-under-30" />
				<Sponsorship path="/outdoor-30-under-30-sponsorship" />
			</Router>
		</main>
	</div>
);

export default App;
