import { useEvents } from "../../context/Event"
import { ActionsEnum } from "../../enums/Actons"

interface CalendarProps {
  action: (name: ActionsEnum, eventId?: string) => void
}

export default function Calendar({ action }: CalendarProps) {
  const { events } = useEvents()
  return (
    <article>
      <h1>Calendar</h1>
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
