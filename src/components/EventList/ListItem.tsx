import { ActionsEnum } from "../../enums/Actions"
import { EventDetail } from "../../types/Event"
import { FormFields } from "../Form/types"
import { StyledItemActions, StyledItemContent, StyledListItem } from "./styled"

interface ListItemProps {
  event: EventDetail
  action: (
    name: ActionsEnum,
    eventId?: string,
    fields?: FormFields,
  ) => void
}

export default function ListItem({ event, action }: ListItemProps) {
 const { title, start, end, id } = event

  return (
    <StyledListItem>
      <StyledItemContent>
        <span>{title}</span>
        <div>
          <span>from {start}</span>
          {end ? <span>to {end}</span> : <span> (All day)</span>}
        </div>
      </StyledItemContent>
      <StyledItemActions>
        <button onClick={() => action(ActionsEnum.DETAILS, id)}>View</button>
        <button onClick={() => action(ActionsEnum.EDIT, id, event )}>Edit</button>
        <button onClick={() => action(ActionsEnum.DELETE, id, event)}>Delete</button>
      </StyledItemActions>
    </StyledListItem>
  )
}
