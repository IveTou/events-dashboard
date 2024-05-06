import { ActionsEnum } from "../../enums/Actions"
import { EventDetail } from "../../types/Event"
import { FormFields } from "../Form/types"
import ListItem from "./ListItem"
import { StyledList } from "./styled"

interface EventListProps {
  events: EventDetail[]
  action: (name: ActionsEnum, eventId?: string, fields?: FormFields) => void
}

export default function EventList({ events, action }: EventListProps ) {
  return (
    <StyledList>
      {events.map((event) => <ListItem event={event} action={action} key={event.id} />)}
    </StyledList>
  )
}
