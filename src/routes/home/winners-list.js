import Winners from "./winners-list.json";

export default function WinnerList() {
  return (
    <ul>
      {
        Winners.map((winner) => (
          <li>
            <p class="winner--name">{winner.name}</p>
            <p class="winner-company">{winner.company ? winner.company : winner.title}</p>
          </li>
        ))
      }
    </ul>
  )
}