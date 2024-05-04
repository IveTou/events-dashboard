import { FormFields } from "../../components/Form/types"
import { useEvents } from "../../context/Event"
import { ActionsEnum } from "../../enums/Actons"
interface ListProps {
  action: (name: ActionsEnum, eventId?: string, fields?: FormFields) => void
}

export default function List({ action }: ListProps) {
  const { events } = useEvents()
  return (
    <article>
      <h1>List</h1>
      <article>
        {events.map((event) => {
          const { title, date, time, id } = event
          return (
            <div key={id}>
              <span>{title}</span>
              <span>{date}</span>
              <span>{time}</span>
              <span onClick={() => action(ActionsEnum.DETAILS, id)}>DETAILS</span>
              <span onClick={() => action(ActionsEnum.EDIT, id, event)}>EDIT</span>
            </div>
          )
        })}
      </article>
    </article>
  )
}
