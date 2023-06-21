import style from "./index.css";
import Data from '../../assets/data/2016-winners.json';

const TheList = () => {
  return (
    <>
      <h2>The List</h2>
      <p>With over 600 nominations we're excited to announce 30 of the outdoor industry's future game changers.</p>
      <ul class={style.winnerList}>
        {
          Data.map((winner) => (
            <li key={winner.id}>
              <p class={style.winnerName}>{winner.name}</p>
              <p class={style.winnerCompany}>{winner.company ? winner.company : winner.title}</p>
              <div class={style.winnerProfileContainer}>
                <img class={style.winnerProfile} src={winner.profile} alt={winner.name} />
              </div>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default TheList;