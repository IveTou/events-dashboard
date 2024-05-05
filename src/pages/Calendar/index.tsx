import { useCallback, useState } from "react"
import Dialog from "../../components/Dialog"
import { FormFields } from "../../components/Form/types"
import { useEvents } from "../../context/Event"
import { ActionsEnum } from "../../enums/Actions"
import { DialogAction, DialogConfig } from "../../enums/Dialog"
import { StyledView } from "./styled"

interface CalendarProps {
  action: (name: ActionsEnum, eventId?: string, fields?: FormFields) => void
}

export default function Calendar({ action }: CalendarProps) {
  const [dialogConfig, setDialogConfig] = useState<DialogConfig>()
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
      <article>
        {events.map((event) => {
          const { title, date, time, id } = event
          return (
            <div key={id}>
              <span>{title}</span>
              <span>{date}</span>
              <span>{time}</span>
              <span onClick={() => action(ActionsEnum.DETAILS, id)}>DETAILS</span>
              <span onClick={() => action(ActionsEnum.EDIT, id, event )}>EDIT</span>
              <span
                onClick={
                  () => dialogHandler({
                    name: ActionsEnum.DELETE,
                    eventId: id,
                    fields: event,
                    text: 'Are you sure you want to delete this Event?'
                  })
                }
              >
                DELETE
              </span>
            </div>
          )
        })}
      </article>
      <Dialog
        text={dialogConfig?.text || ''}
        action={actionHandler}
        isOpen={!!dialogConfig}
      />
    </StyledView>
  )
}
