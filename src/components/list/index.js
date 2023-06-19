import WinnersData from "../../assets/data/winners-list.json";

// Styles
import style from "./index.css";

export default function List() {
  return (
    <ul className={style.winnerList}>
      {
        WinnersData.map((winner) => (
          <li>
            <p className={style.winnerName}>{winner.name}</p>
            <p className={style.winnerCompany}>{winner.company ? winner.company : winner.title}</p>
          </li>
        ))
      }
    </ul>
  )
}