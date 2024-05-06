import { ActionsEnum } from "../../enums/Actions"
import { EventDetail } from "../../types/Event"
import EmptyState from "../EmptyState"
import { FormFields } from "../Form/types"
import ListItem from "./ListItem"
import { StyledList } from "./styled"

interface EventListProps {
  events: EventDetail[]
  action: (name: ActionsEnum, eventId?: string, fields?: FormFields) => void
}

export default function EventList({ events, action }: EventListProps ) {
  if(!events.length) {
    return <EmptyState />
  }

  return (
    <StyledList>
      {events.map((event) => <ListItem event={event} action={action} key={event.id} />)}
    </StyledList>
  )
}
