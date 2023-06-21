import { h } from 'preact';
import style from './index.css';

const Home = () => {
	return (
		<>
			<h2 style={style.heading}>About</h2>
			<p><span class="highlight">Outdoor 30 Under 30</span> highlights the athletes, designers, founders, and misfits who are challenging the status quo and driving the industry forward. They are the crazy ones. The movers and makers. The bold. The quiet geniuses. The clever and collaborative. The stubborn and passionate.</p>
			<p>This project was born on a long, muddy run. An otherwise innocuous moment, high on endorphins, chasing miles as the sun set. We had recently read <a href="#">Forbes 30 Under 30</a> and saw opportunity and here we are.</p>
		</>
	);
};

export default Home;
