import style from "./index.css";

const Sponsors = () => {
  return (
    <>
      <h2>Sponsors</h2>
      <p>This project wouldn't be possible without the support of organizations. Sponsors help us create and curate content, make connections, and importantly, promote the project, enabling us reach a large audience and tell a complete story.</p>
      <ul class={style.sponsorsGrid}>
        <li><a href="https://www.getoutdoorjobs.com"><img src="../../assets/goj-logo.svg" alt="Get Outdoor Jobs" /></a></li>
      </ul>
    </>
  )
}

export default Sponsors;