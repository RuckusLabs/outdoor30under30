import { h } from 'preact';
import { Parallax } from 'react-parallax';
import WinnerList from './winners-list';
import style from './style.css';


const Home = () => {
	return (
		<>
			<section class="splash">
				<h1 class="a11y-hidden">Outdoor 30 Under 30</h1>
				<h2>The Outdoor Industry's Brightest Young Minds</h2>
			</section>
			<section>
				<h2>Background</h2>
				<p>Outdoor 30 Under 30 highlights the athletes, designers, founders, and misfits who are challenging the status quo and driving the industry forward. They are the crazy ones. The movers and makers. The bold. The quiet geniuses. The clever and collaborative. The stubborn and passionate.</p>
				<p>This project was born on a long, muddy run. An otherwise innocuous moment, high on endorphins, chasing miles as the sun set. We had recently read <a href="https://www.forbes.com/30-under-30/2023/">Forbes 30 Under 30</a> and saw white space. A few hours of research confirmed our suspicions: this is the first ever outdoor specific list.</p>
			</section>
			<section>
				<h2>2016 Winners</h2>
				<p>Proudly announcing the inagural 30 winners</p>
			</section>
			<section>
				<WinnerList />
				<p>All winners were selected by the panel of judges and under the age of 30 as of February 1st, 2016.</p>
			</section>
			<section>
				<h2>Sponsors</h2>
				<p>Those who helped spread the word</p>
			</section>
			<section>
				<h3>Proudly Presented By</h3>
				<p>This project wouldn't be possible without the support of many organizations. Each sponsor helped us create and curate content, make connections, and importantly, promote the project, enabling us reach a large audience and tell a complete story.</p>
				<p>To show our gratitude, we've listed them below.</p>
			</section>
			<footer>
				<p>Question or comments? Email us!</p>
				<p>This project was created by friends with the intent to inspire exploration.</p>
			</footer>
		</>
	);
};

const Resource = props => {
	return (
		<a href={props.link} class={style.resource}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
};

export default Home;
