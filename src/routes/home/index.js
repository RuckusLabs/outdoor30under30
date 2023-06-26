import { useState } from 'react';
import List from '../../components/list/list.js';
import Carousel from '../../components/carousel/carousel.js';
import style from './home.css';
import modalStyle from "./modal.css";
import bannerStyle from "./banner.css"
import Modal from 'react-modal';
import DonorList from '../../components/donorList/index.js';
import xCircle from "../../assets/images/x-circle.svg";

export default function Home() {

	const logoColor = "white";

	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
			<Modal
				className={modalStyle.modal}
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				ariaHideApp={false}
				style={{
					overlay: {
						position: 'fixed',
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						zIndex: 11,
						backgroundColor: 'rgba(0, 0, 0, 0.75)'
					},
				}
				}
			>
				<img onClick={closeModal} className={modalStyle.close} src={xCircle} />
				<h2>Apply for 2024!</h2>
				<p>Want to be considered for the 2024 Outdoor 30 Under 30 list? Simply submit the form below and we'll get back to you as quickly as possible.</p>
				<div data-tf-widget="bP5CRWPh" class={modalStyle.typeform} data-tf-opacity="100" data-tf-iframe-props="title=Outdoor 30 Under 30 Award Application Form" data-tf-transitive-search-params data-tf-medium="snippet" style="width:100%;"></div><script src="https://embed.typeform.com/next/embed.js"></script>
			</Modal>
			<div className={bannerStyle.banner}>
				<h3 onClick={openModal}>Apply for 2024</h3>
			</div>
			<section className={`${style.parallax} ${style.heroParallax} `}>

				<svg width="140px" height="138px" viewBox="0 0 140 138" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
					<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
						<g id="Artboard" transform="translate(-355, -57)" fill={logoColor} fill-rule="nonzero">
							<g id="Combined-Shape-2-Copy" transform="translate(355, 57)">
								<path d="M44.8243478,27.9076433 L47.6,27.9076433 C50.2295652,27.9076433 52.1286957,28.8598726 52.1286957,31.2770701 C52.1286957,33.2547771 50.6678261,34.5732484 48.7686957,34.5732484 C46.4313043,34.5732484 45.2626087,32.9617834 45.1165217,30.6910828 L30.946087,30.6910828 C31.5304348,40.1401274 38.1043478,46.4394904 48.9878261,46.4394904 C59.213913,46.4394904 65.6417391,40.433121 65.6417391,32.156051 C65.6417391,28.1273885 63.8886957,24.7579618 60.893913,23.2197452 C63.1582609,21.6082803 65.2034783,17.8726115 65.2034783,14.5031847 C65.2034783,5.85987261 58.9947826,0 49.2069565,0 C38.5426087,0 32.2608696,7.17834395 31.3843478,15.455414 L44.7513043,15.455414 C45.0434783,13.477707 46.3582609,11.7197452 48.5495652,11.7197452 C50.5947826,11.7197452 51.7634783,13.0382166 51.7634783,14.8694268 C51.7634783,17.3598726 49.7182609,18.2388535 47.1617391,18.2388535 L44.8243478,18.2388535 L44.8243478,27.9076433 Z M87.773913,46.4394904 C99.3147826,46.4394904 107.349565,36.9171975 107.349565,23.2197452 C107.349565,9.52229299 99.3147826,0 87.773913,0 C76.2330435,0 68.1982609,9.52229299 68.1982609,23.2197452 C68.1982609,36.9171975 76.2330435,46.4394904 87.773913,46.4394904 Z M87.773913,12.3057325 C92.0834783,12.3057325 93.6173913,17.7261146 93.6173913,23.2197452 C93.6173913,28.7133758 92.0834783,34.133758 87.773913,34.133758 C83.3913043,34.133758 81.8573913,28.7133758 81.8573913,23.2197452 C81.8573913,17.7261146 83.3913043,12.3057325 87.773913,12.3057325 Z M44.8243478,119.468153 L47.6,119.468153 C50.2295652,119.468153 52.1286957,120.420382 52.1286957,122.83758 C52.1286957,124.815287 50.6678261,126.133758 48.7686957,126.133758 C46.4313043,126.133758 45.2626087,124.522293 45.1165217,122.251592 L30.946087,122.251592 C31.5304348,131.700637 38.1043478,138 48.9878261,138 C59.213913,138 65.6417391,131.993631 65.6417391,123.716561 C65.6417391,119.687898 63.8886957,116.318471 60.893913,114.780255 C63.1582609,113.16879 65.2034783,109.433121 65.2034783,106.063694 C65.2034783,97.4203822 58.9947826,91.5605096 49.2069565,91.5605096 C38.5426087,91.5605096 32.2608696,98.7388535 31.3843478,107.015924 L44.7513043,107.015924 C45.0434783,105.038217 46.3582609,103.280255 48.5495652,103.280255 C50.5947826,103.280255 51.7634783,104.598726 51.7634783,106.429936 C51.7634783,108.920382 49.7182609,109.799363 47.1617391,109.799363 L44.8243478,109.799363 L44.8243478,119.468153 Z M87.773913,138 C99.3147826,138 107.349565,128.477707 107.349565,114.780255 C107.349565,101.082803 99.3147826,91.5605096 87.773913,91.5605096 C76.2330435,91.5605096 68.1982609,101.082803 68.1982609,114.780255 C68.1982609,128.477707 76.2330435,138 87.773913,138 Z M87.773913,103.866242 C92.0834783,103.866242 93.6173913,109.286624 93.6173913,114.780255 C93.6173913,120.273885 92.0834783,125.694268 87.773913,125.694268 C83.3913043,125.694268 81.8573913,120.273885 81.8573913,114.780255 C81.8573913,109.286624 83.3913043,103.866242 87.773913,103.866242 Z M0,57.9150743 L140,57.9150743 L140,82.3312102 L0,82.3312102 Z" id="Combined-Shape"></path>
							</g>
						</g>
					</g>
				</svg>
				<h1 class="a11y-hidden">Outdoor 30 Under 30</h1>
				<h2>The Outdoor Industry's Brightest Young Minds</h2>
			</section>
			<section>
				<h2>Background</h2>
				<p>Outdoor 30 Under 30 highlights the athletes, designers, founders, and misfits who are challenging the status quo and driving the industry forward. They are the crazy ones. The movers and makers. The bold. The quiet geniuses. The clever and collaborative. The stubborn and passionate.</p>
				<p>This project was born on a long, muddy run. An otherwise innocuous moment, high on endorphins, chasing miles as the sun set. We had recently read <a href="https://www.forbes.com/30-under-30/2023/">Forbes 30 Under 30</a> and saw white space. A few hours of research confirmed our suspicions: this is the first ever outdoor specific list.</p>
			</section>
			<section className={`${style.parallax} ${style.winnersParallax} `}>
				<h2>2016 Winners</h2>
				<p>Proudly announcing the inagural 30 winners</p>
			</section>
			<section>
				<p>With over 600 nominations we're excited to announce 30 of the outdoor industry's future game changers.</p>
				<Carousel />
				<List />
				<p>All winners were selected by the panel of judges and under the age of 30 as of February 1st, 2016.</p>
			</section>
			<section className={`${style.parallax} ${style.sponsorsParallax} `}>
				<h2>Sponsors</h2>
				<p>Those who helped spread the word</p>
			</section>
			<section className={style.sponsors}>
				<h2>Proudly Presented By</h2>
				<p>This project wouldn't be possible without the support of organizations. Sponsors help us create and curate content, make connections, and importantly, promote the project, enabling us reach a large audience and tell a complete story.</p>
				<DonorList />
				<p><a href="#">Want to support this project? Become a sponsor</a></p>
			</section>
		</>
	);
}