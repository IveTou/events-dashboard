import { useCallback, useState } from "react"
import Dialog from "../../components/Dialog"
import { FormFields } from "../../components/Form/types"
import { useEvents } from "../../context/Event"
import { ActionsEnum } from "../../enums/Actions"
import { DialogAction, DialogConfig } from "../../enums/Dialog"
import { StyledView } from "./styled"
import EventList from "../../components/EventList"
interface ListProps {
  action: (name: ActionsEnum, eventId?: string, fields?: FormFields) => void
}

export default function List({ action }: ListProps) {
  const [dialogConfig, setDialogConfig] = useState<DialogConfig>()
  const { events } = useEvents()

  const dialogHandler = useCallback((config: DialogConfig) => {
    setDialogConfig(config)
  }, [])

  const dialogActionHandler = useCallback((type: DialogAction) => {
    if (type === DialogAction.CONFIRM && dialogConfig) {
      const { name, eventId, fields} = dialogConfig
      action(name, eventId, fields)
    }
    setDialogConfig(undefined)
  }, [dialogConfig])

  const listActionHandler = useCallback((name: ActionsEnum, eventId?: string, fields?: FormFields) => {
    if(name === ActionsEnum.DELETE) {
      dialogHandler({
        name,
        eventId,
        fields,
        text: 'Are you sure you want to delete this Event?'
      })
    } else {
      action(name, eventId, fields)
    }
  }, [])

  return (
    <StyledView>
      <h1>Event List</h1>
      <EventList events={events} action={listActionHandler} />
      <Dialog
        text={dialogConfig?.text || ''}
        action={dialogActionHandler}
        isOpen={!!dialogConfig}
      />
    </StyledView>
  )
}
