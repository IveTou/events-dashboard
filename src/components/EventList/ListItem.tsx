import { ActionsEnum } from "../../enums/Actions"
import { EventDetail } from "../../types/Event"
import { FormFields } from "../Form/types"
import { StyledItemActions, StyledItemContent, StyledListItem } from "./styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faEye, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
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
          <span>{start}</span>
          {end ? <span> to {end}</span> : <span> (All day)</span>}
        </div>
      </StyledItemContent>
      <StyledItemActions>
        <div>
          <span>Show details</span>
          <FontAwesomeIcon icon={faEye} onClick={() => action(ActionsEnum.DETAILS, id)}/>
        </div>
        <div>
          <span>Edit event</span>
          <FontAwesomeIcon icon={faEdit} onClick={() => action(ActionsEnum.EDIT, id, event)}/>
        </div>
        <div>
          <span>Delete event</span>
          <FontAwesomeIcon icon={faTrashAlt} onClick={() => action(ActionsEnum.DELETE, id, event)} />
        </div>
      </StyledItemActions>
    </StyledListItem>
  )
}
