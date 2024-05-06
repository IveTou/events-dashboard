import { useCallback, useState } from "react"
import Dialog from "../../components/Dialog"
import { FormFields } from "../../components/Form/types"
import { useEvents } from "../../context/Event"
import { ActionsEnum } from "../../enums/Actions"
import { DialogAction, DialogConfig } from "../../enums/Dialog"
import { StyledView } from "./styled"
import EventsCalendar from "../../components/Calendar"

interface CalendarProps {
  action: (name: ActionsEnum, eventId?: string, fields?: FormFields) => void
}

export default function Calendar({ action }: CalendarProps) {
  const [dialogConfig, setDialogConfig] = useState<DialogConfig>()
  const [selectedEvent, setSelectedEvent] =  useState<FormFields>()
  const { events } = useEvents()

  const dialogHandler = useCallback((config: DialogConfig) => {
    setDialogConfig(config)
  }, [])

  const actionHandler = useCallback((type: DialogAction) => {
    if (type === DialogAction.CONFIRM && dialogConfig) {
      const { name, eventId, fields} = dialogConfig
      action(name, eventId, fields)
    }
    setDialogConfig(undefined)
  }, [dialogConfig])

  return (
    <StyledView>
      <h1>Calendar</h1>
      <EventsCalendar events={events} action={setSelectedEvent}/>
      <Dialog
        text={dialogConfig?.text || ''}
        action={actionHandler}
        isOpen={!!dialogConfig}
      />
    </StyledView>
  )
}
