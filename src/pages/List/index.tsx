import { useEvents } from "../../context/Event"
import { ActionsEnum } from "../../enums/Actons"
interface ListProps {
  action: (name: ActionsEnum, eventId?: string) => void
}

export default function List({ action }: ListProps) {
  const { events } = useEvents()
  return (
    <article>
      <h1>List</h1>
      <article>
        {events.map(({ title, date, time, id }) => (
          <div key={id} onClick={() => action(ActionsEnum.DETAILS, id)}>
            <span>{title}</span>
            <span>{date}</span>
            <span>{time}</span>
          </div>
        ))}
      </article>
    </article>
  )
}
